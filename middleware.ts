import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/chat'],
}

export function middleware(req: NextRequest) {
  return NextResponse.next()
}
