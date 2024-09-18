import { NextResponse } from 'next/server'
import { jwtVerify } from 'jose'
import { publicRoutes } from './utils/routes/public-routes'
import { privateRoutes } from './utils/routes/private-routes'

export async function middleware(request) {
  const jwt = request.cookies.get('token')

  if (!jwt && !publicRoutes.includes(request.nextUrl.pathname))
    return NextResponse.redirect(new URL('/login', request.url))

  try {
    if (jwt) {
      const privateRoute = privateRoutes.find(
        (r) => r.path === request.nextUrl.pathname
      )
      const publicRoute = publicRoutes.find(
        (r) => r === request.nextUrl.pathname
      )

      if (publicRoute) {
        try {
          return NextResponse.redirect(new URL('/account', request.url))
        } catch (error) {
          return NextResponse.next()
        }
      }

      if (privateRoute) {
        const { payload } = await jwtVerify(
          jwt.value,
          new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
        )

        privateRoute.roles.includes(payload.role)
          ? NextResponse.next()
          : NextResponse.redirect(new URL('/account', request.url))
        return
      }
    }

    return NextResponse.next()
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url))
  }
}

export const config = {
  matcher: ['/', '/login', '/register', '/account/:path*'],
}
