import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Apartments } from '@/components/apartments'
import { Amenities } from '@/components/amenities'
import { Location } from '@/components/location'
import { Booking } from '@/components/booking'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Apartments />
      <Amenities />
      <Location />
      <Booking />
      <Footer />
    </main>
  )
}
