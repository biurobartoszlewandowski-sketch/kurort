'use client'

import { useEffect, useState } from 'react'
import { MapPin, Clock, Navigation } from 'lucide-react'

export function Location() {
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('location-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="location" className="py-16 md:py-24 bg-beige-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="location-section" className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-4">
              Prime Location
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Perfectly positioned on the Baltic coast, close to attractions and dining
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map Placeholder */}
            <div className="relative h-96 md:h-full rounded-2xl overflow-hidden bg-gradient-to-br from-olive/20 to-lavender/20 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4 opacity-50" />
                <p className="text-foreground/60">Interactive Map</p>
              </div>
            </div>

            {/* Details */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-light text-foreground mb-3">
                  Kołobrzeg, Poland
                </h3>
                <p className="text-foreground/70 mb-6">
                  Located in one of Poland&apos;s most charming coastal towns, Kurort is minutes away from pristine beaches, local markets, and authentic restaurants.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Travel Times</p>
                    <ul className="text-sm text-foreground/70 space-y-1 mt-1">
                      <li>• Beach: 5 minutes walk</li>
                      <li>• Old Town: 10 minutes walk</li>
                      <li>• Airport: 1.5 hours drive</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <Navigation className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Nearby Attractions</p>
                    <ul className="text-sm text-foreground/70 space-y-1 mt-1">
                      <li>• Lighthouse & pier</li>
                      <li>• Museums & galleries</li>
                      <li>• Spa & wellness centers</li>
                    </ul>
                  </div>
                </div>
              </div>

              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-lg font-medium transition-colors w-full md:w-auto">
                Get Directions
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
