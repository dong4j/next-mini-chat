import { NextResponse, NextRequest } from 'next/server'

export async function GET(req: NextRequest, res: NextResponse) {
  return new NextResponse(null, {
    status: 200,
  })
}
