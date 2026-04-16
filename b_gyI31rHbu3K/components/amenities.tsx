'use client'

import { useEffect, useState } from 'react'
import { Wifi, Wind, UtensilsCrossed, Sparkles, Dumbbell, Users } from 'lucide-react'

interface Amenity {
  icon: React.ReactNode
  title: string
  description: string
}

const amenities: Amenity[] = [
  {
    icon: <Wifi className="w-8 h-8" />,
    title: 'High-Speed Internet',
    description: 'Ultra-fast WiFi 6 connectivity throughout all apartments'
  },
  {
    icon: <Wind className="w-8 h-8" />,
    title: 'Climate Control',
    description: 'Precision temperature management in every room'
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8" />,
    title: 'Gourmet Kitchen',
    description: 'Fully equipped with premium appliances and cookware'
  },
  {
    icon: <Sparkles className="w-8 h-8" />,
    title: 'Housekeeping',
    description: 'Daily cleaning and turndown service available'
  },
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: 'Fitness Center',
    description: 'Fully equipped with modern workout equipment'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Concierge',
    description: '24/7 personal concierge service for all your needs'
  },
]

export function Amenities() {
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

    const section = document.getElementById('amenities-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="amenities" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="amenities-section" className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-4">
              World-Class Amenities
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Discover the perfect blend of comfort and luxury designed for your stay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((amenity, idx) => (
              <div
                key={idx}
                className={`p-8 rounded-2xl bg-beige-pale hover:shadow-lg transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="text-accent mb-4">
                  {amenity.icon}
                </div>
                <h3 className="font-serif text-xl font-light text-foreground mb-2">
                  {amenity.title}
                </h3>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  {amenity.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
