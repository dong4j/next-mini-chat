'use server'

import { createStreamableValue } from 'ai/rsc'
import { CoreMessage, streamText } from 'ai'
import { createOpenAI } from '@ai-sdk/openai'

const openai = createOpenAI({
  baseURL: process.env.OPENAI_BASE_URL,
  apiKey: process.env.OPENAI_API_KEY,
})

export async function continueConversation(messages: CoreMessage[]) {
  try {
    const result = await streamText({
      model: openai(process.env.OPENAI_MODEL || 'gpt-4o-mini'),
      messages,
    })

    const stream = createStreamableValue(result.textStream)
    return stream.value
  } catch (error) {
    if (error instanceof TypeError) {
      // 处理类型错误
      console.error('TypeError in continueConversation:', error)
      throw new Error('An unexpected error occurred. Please try again.')
    } else if (error.response) {
      // 处理 API 响应错误
      console.error('API response error:', error.response.data)
      throw new Error('API responded with an error. Please check your request.')
    } else {
      // 处理其他错误
      console.error('Error in continueConversation:', error)
      throw error
    }
  }
}
