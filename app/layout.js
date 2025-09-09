'use client'

import { Inter, Poppins } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import './globals.css'
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins'
})

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 10,
    })
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/svg+xml" href="/Photo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="google-site-verification"
          content="ZYNfZwMUiNwSMF3EMvY85bid2BVvB12uMMRfUNWw75A"
        />
        <meta
          name="keywords"
          content="Portfolio, Frontend Developer, React, Next.js, Web Developer"
        />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="title"
          content="Portfolio - Frontend Developer"
        />
        <meta
          name="description"
          content="Welcome to my portfolio! I'm a frontend developer focused on creating innovative, functional, and user-friendly digital solutions."
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://portfolio.com/" />
        <meta
          property="og:title"
          content="Portfolio - Frontend Developer"
        />
        <meta
          property="og:description"
          content="Welcome to my portfolio! I'm a frontend developer focused on creating innovative, functional, and user-friendly digital solutions."
        />
        <meta property="og:image" content="/Meta.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://portfolio.com/" />
        <meta
          property="twitter:title"
          content="Portfolio - Frontend Developer"
        />
        <meta
          property="twitter:description"
          content="Welcome to my portfolio! I'm a frontend developer focused on creating innovative, functional, and user-friendly digital solutions."
        />
        <meta property="twitter:image" content="/Meta.png" />
        <meta name="theme-color" content="rgb(3,0,20)" />
        <meta name="msapplication-navbutton-color" content="rgb(3,0,20)" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        <title>Frontend Developer Portfolio</title>
      </head>
      <body className={`${poppins.variable}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}