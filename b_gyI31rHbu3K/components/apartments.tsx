'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Heart } from 'lucide-react'

interface Apartment {
  id: number
  name: string
  type: string
  price: string
  beds: number
  baths: number
  size: string
  image: string
  description: string
}

const apartments: Apartment[] = [
  {
    id: 1,
    name: 'Lavender Suite',
    type: 'Studio + Sleeping Area',
    price: '€180/night',
    beds: 1,
    baths: 1,
    size: '45 m²',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&q=80',
    description: 'Intimate luxury with panoramic sea views and private terrace'
  },
  {
    id: 2,
    name: 'Provence Suite',
    type: 'One Bedroom',
    price: '€240/night',
    beds: 2,
    baths: 1.5,
    size: '65 m²',
    image: 'https://images.unsplash.com/photo-1631049307038-da0ec9d70304?w=500&q=80',
    description: 'Classic elegance with separate living and bedroom spaces'
  },
  {
    id: 3,
    name: 'Golden Hour',
    type: 'Two Bedroom',
    price: '€320/night',
    beds: 3,
    baths: 2,
    size: '95 m²',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    description: 'Spacious comfort for families with luxury amenities'
  },
  {
    id: 4,
    name: 'Olive Grove',
    type: 'Penthouse',
    price: '€450/night',
    beds: 3,
    baths: 2.5,
    size: '140 m²',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&q=80',
    description: 'Ultimate luxury with rooftop terrace and full amenities'
  },
]

export function Apartments() {
  const [isInView, setIsInView] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('apartments-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  return (
    <section id="apartments" className="py-16 md:py-24 bg-beige-pale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="apartments-section" className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-4">
              Our Collection
            </h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Each apartment is a masterpiece of design and comfort, thoughtfully appointed with premium finishes and curated details.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {apartments.map((apt, idx) => (
              <div
                key={apt.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group transform hover:-translate-y-2 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                {/* Image */}
                <div className="relative h-56 md:h-48 overflow-hidden bg-gray-100">
                  <Image
                    src={apt.image}
                    alt={apt.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => toggleFavorite(apt.id)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors z-10"
                    aria-label="Add to favorites"
                  >
                    <Heart
                      size={20}
                      className={`transition-colors ${
                        favorites.includes(apt.id)
                          ? 'fill-red-500 text-red-500'
                          : 'text-foreground/60'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-2">
                    <p className="text-xs text-accent uppercase font-semibold tracking-wider">
                      {apt.type}
                    </p>
                  </div>

                  <h3 className="font-serif text-xl font-light text-foreground mb-2">
                    {apt.name}
                  </h3>

                  <p className="text-sm text-foreground/60 mb-4">
                    {apt.description}
                  </p>

                  <div className="flex gap-4 text-xs text-foreground/70 mb-4 py-3 border-t border-b border-border">
                    <span>{apt.beds} Beds</span>
                    <span>{apt.baths} Baths</span>
                    <span>{apt.size}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="font-serif text-accent text-lg">
                      {apt.price}
                    </div>
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
