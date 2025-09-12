"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

const heroImages = [
  "https://images.rumsan.com/e046dd94-ea48-43b8-8bc4-525f10b4ef00/public",
  "https://images.rumsan.com/b7d63887-6dda-4d93-1dde-9030f83eef00/public",
  "https://images.rumsan.com/ccb3d167-4ed4-4fc9-747f-36cb6a560300/public"
]

export function HeroImage() {
  const [currentImage, setCurrentImage] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Select a random image on component mount
    const randomIndex = Math.floor(Math.random() * heroImages.length)
    setCurrentImage(heroImages[randomIndex])
  }, [])

  if (!currentImage) {
    return null
  }

  return (
    <div className="absolute inset-0 z-0">
      <div className="relative w-full h-full">
        <Image
          src={currentImage}
          alt="Youth activists and democratic change in Nepal"
          fill
          className={`object-cover transition-opacity duration-700 ${
            isLoaded ? "opacity-55" : "opacity-0"
          }`}
          onLoad={() => setIsLoaded(true)}
          priority
        />
        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/85 via-indigo-50/80 to-violet-100/85"></div>
        {/* Additional gradient blurs for design consistency */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-gradient-to-br from-violet-400/15 to-indigo-400/15 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-400/15 to-purple-400/15 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
    </div>
  )
}
