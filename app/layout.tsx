import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import Header from "@/components/shared/header"
import Footer from "@/components/shared/footer"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://millennials4genz.org"),
  title: {
    default: "Millennials4GenZ - Youth-Led Movement for Nepal | Lifebank Foundation",
    template: "%s | Millennials4GenZ - Youth Leadership Nepal",
  },
  description:
    "A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, technology, health, finance, and the arts. Empowering youth voices for democratic change.",
  keywords: [
    "Nepal youth movement",
    "Gen Z leadership",
    "millennial support",
    "Nepal democracy",
    "youth activism",
    "civic engagement Nepal",
    "intergenerational collaboration",
    "Nepal governance",
    "youth empowerment",
    "democratic participation",
    "Nepal civil society",
    "youth-led initiatives",
    "political engagement Nepal",
    "social change Nepal",
    "Lifebank Foundation",
  ],
  authors: [{ name: "Lifebank Foundation" }],
  creator: "Lifebank Foundation",
  publisher: "Lifebank Foundation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://millennials4genz.org",
    siteName: "Millennials4GenZ",
    title: "Millennials4GenZ - Youth-Led Movement for Nepal",
    description:
      "A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, technology, health, finance, and the arts.",
    images: [
      {
        url: "/nepal-mountains-landscape-with-youth-activists-sil.jpg",
        width: 1200,
        height: 630,
        alt: "Nepal youth activists in mountain landscape - Millennials4GenZ movement",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Millennials4GenZ - Youth-Led Movement for Nepal",
    description: "Empowering Gen Z leadership in Nepal through intergenerational support and democratic engagement.",
    images: ["/nepal-mountains-landscape-with-youth-activists-sil.jpg"],
    creator: "@millennials4genz",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
  },
  alternates: {
    canonical: "https://millennials4genz.org",
    languages: {
      "en-US": "https://millennials4genz.org",
      "ne-NP": "https://millennials4genz.org/ne",
    },
  },
  category: "Social Movement",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Millennials4GenZ",
              alternateName: "Millennials for Gen Z Nepal",
              url: "https://millennials4genz.org",
              logo: "https://millennials4genz.org/logo.png",
              description:
                "A Nepal movement centering Gen Z leadership—backed by intergenerational support in governance, technology, health, finance, and the arts.",
              foundingDate: "2024",
              founder: {
                "@type": "Organization",
                name: "Lifebank Foundation",
              },
              areaServed: {
                "@type": "Country",
                name: "Nepal",
              },
              knowsAbout: [
                "Youth Leadership",
                "Democratic Governance",
                "Civic Engagement",
                "Intergenerational Collaboration",
                "Social Change",
              ],
              sameAs: [
                "https://twitter.com/millennials4genz",
                "https://facebook.com/millennials4genz",
                "https://instagram.com/millennials4genz",
              ],
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Header />
        <Suspense fallback={null}>{children}</Suspense>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
