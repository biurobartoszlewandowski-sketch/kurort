import { Mail, Phone, MapPin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-light mb-3">Kurort</h3>
            <p className="text-background/70 text-sm leading-relaxed">
              Luxury apartments on the Baltic coast, blending Provence elegance with contemporary comfort.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-background/70 hover:text-background transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#apartments" className="text-background/70 hover:text-background transition-colors">
                  Apartments
                </Link>
              </li>
              <li>
                <Link href="#amenities" className="text-background/70 hover:text-background transition-colors">
                  Amenities
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-background/70 hover:text-background transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Policies</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Cancellation Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-background/70 hover:text-background transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-medium mb-4 text-sm uppercase tracking-wider">Contact</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/70">info@kurortkolo.pl</span>
              </div>
              <div className="flex gap-2 items-start">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/70">+48 94 351 25 00</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-accent" />
                <span className="text-background/70">Kołobrzeg, Poland</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-background/60">
            <p>&copy; {currentYear} Kurort Kołobrzeg. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-background transition-colors">
                Instagram
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Facebook
              </Link>
              <Link href="#" className="hover:text-background transition-colors">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
