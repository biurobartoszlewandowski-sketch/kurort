'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export function About() {
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

    const section = document.getElementById('about-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="about-section" className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className={`relative h-96 md:h-full rounded-2xl overflow-hidden transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          }`}>
            <Image
              src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=600&q=80"
              alt="Luxury apartment interior"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content */}
          <div className={`transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-6">
              About Kurort
            </h2>

            <div className="space-y-4 text-foreground/80">
              <p>
                Nestled on the picturesque Baltic coast, Kurort Kołobrzeg offers an exquisite escape. Our carefully curated collection of apartments blends the timeless elegance of Provence with contemporary luxury.
              </p>
              <p>
                Each residence is designed with meticulous attention to detail, featuring classic architectural elements, refined furnishings, and bespoke amenities. Whether you&apos;re seeking a romantic getaway or a peaceful retreat, our apartments provide the perfect sanctuary.
              </p>
              <p>
                Experience the art of living well. From our sourced linens to curated art collections, every element speaks to our commitment to excellence and your comfort.
              </p>
            </div>

            <div className="mt-8 flex gap-8 text-center">
              <div>
                <div className="text-3xl font-serif text-accent mb-2">12</div>
                <p className="text-sm text-foreground/60">Luxury Apartments</p>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent mb-2">15+</div>
                <p className="text-sm text-foreground/60">Years of Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-serif text-accent mb-2">4.9★</div>
                <p className="text-sm text-foreground/60">Guest Rating</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
