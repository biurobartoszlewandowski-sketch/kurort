'use client'

import { useState, useEffect } from 'react'
import { Mail, Phone, Calendar } from 'lucide-react'

export function Booking() {
  const [isInView, setIsInView] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 }
    )

    const section = document.getElementById('booking-section')
    if (section) observer.observe(section)

    return () => {
      if (section) observer.unobserve(section)
    }
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      checkIn: '',
      checkOut: '',
      guests: '2',
      message: '',
    })
  }

  return (
    <section id="contact" className="py-16 md:py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="booking-section" className={`transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif font-light text-primary mb-4">
              Plan Your Stay
            </h2>
            <p className="text-foreground/70">
              Secure your reservation with us
            </p>
          </div>

          <div className="bg-beige-pale rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              {/* Dates */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="checkIn" className="block text-sm font-medium text-foreground mb-2">
                    Check-In Date *
                  </label>
                  <input
                    type="date"
                    id="checkIn"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="checkOut" className="block text-sm font-medium text-foreground mb-2">
                    Check-Out Date *
                  </label>
                  <input
                    type="date"
                    id="checkOut"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                  />
                </div>
              </div>

              {/* Guests */}
              <div>
                <label htmlFor="guests" className="block text-sm font-medium text-foreground mb-2">
                  Number of Guests *
                </label>
                <select
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
                >
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent transition-colors resize-none"
                  placeholder="Tell us about your preferences..."
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 rounded-lg font-medium transition-colors text-lg"
              >
                Request Reservation
              </button>
            </form>

            {/* Contact Info */}
            <div className="mt-8 pt-8 border-t border-border grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <p className="font-medium text-foreground">info@kurortkolo.pl</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <p className="font-medium text-foreground">+48 94 351 25 00</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
