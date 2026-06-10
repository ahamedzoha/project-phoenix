import { NextResponse } from 'next/server'

// The Keystatic admin is UNAUTHENTICATED in `local` storage mode, and on a
// deployed server its edits would also go to ephemeral container storage
// (never committed). So only expose /keystatic in production when GitHub mode
// is configured — that flow requires a GitHub login and commits to the repo.
// Otherwise return 404. (In development, local editing stays available.)
export function proxy() {
  const isProduction = process.env.NODE_ENV === 'production'
  const githubModeConfigured = Boolean(
    process.env.NEXT_PUBLIC_KEYSTATIC_GITHUB_APP_SLUG,
  )

  if (isProduction && !githubModeConfigured) {
    return new NextResponse('Not Found', { status: 404 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/keystatic', '/keystatic/:path*', '/api/keystatic/:path*'],
}
