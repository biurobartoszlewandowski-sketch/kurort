'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-16 md:pt-20 flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=1920&q=80"
          alt="Luxury apartment"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className={`relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <h1 className="text-white font-serif text-5xl md:text-7xl font-light mb-6 drop-shadow-lg">
          Kurort Kołobrzeg
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl font-light mb-8 drop-shadow-md max-w-2xl mx-auto">
          Experience timeless elegance in our collection of boutique luxury apartments. Where Provence charm meets Baltic serenity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-3 rounded-lg transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-xl">
            Explore Apartments
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-all duration-200 text-lg font-medium backdrop-blur-sm border border-white/30">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
