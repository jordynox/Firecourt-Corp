import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="w-full border-t border-gray-800 bg-black text-white">
      <div className="container grid gap-8 px-4 py-8 md:grid-cols-4 md:px-6">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Input type="search" placeholder="Search..." className="max-w-[200px]" />
            <Button variant="outline">Search</Button>
          </div>
          <div className="flex space-x-4">
            <Link href="#" className="hover:text-yellow-300 transition-colors duration-200">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors duration-200">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors duration-200">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="#" className="hover:text-yellow-300 transition-colors duration-200">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Legal</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/documents/privacy-policy" className="hover:text-yellow-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/documents/terms-of-service" className="hover:text-yellow-300 transition-colors duration-200">
              Terms of Service
            </Link>
            <Link href="/documents/cookie-policy" className="hover:text-yellow-300 transition-colors duration-200">
              Cookie Policy
            </Link>
            <Link href="/documents/refund-policy" className="hover:text-yellow-300 transition-colors duration-200">
              Refund Policy
            </Link>
            <Link href="/documents/fbi-cooperation" className="hover:text-yellow-300 transition-colors duration-200">
              FBI Cooperation
            </Link>
            <Link href="/documents/alcohol-disclaimer" className="hover:text-yellow-300 transition-colors duration-200">
              Alcohol Disclaimer
            </Link>
            <Link href="/documents/shipping-policy" className="hover:text-yellow-300 transition-colors duration-200">
              Shipping Policy
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Company</h3>
          <nav className="flex flex-col space-y-2">
            <Link href="/documents/about-us" className="hover:text-yellow-300 transition-colors duration-200">
              About Us
            </Link>
            <Link href="/documents/our-values" className="hover:text-yellow-300 transition-colors duration-200">
              Our Values
            </Link>
            <Link href="/documents/partners" className="hover:text-yellow-300 transition-colors duration-200">
              Partners
            </Link>
            <Link href="/documents/investors" className="hover:text-yellow-300 transition-colors duration-200">
              Investors
            </Link>
          </nav>
        </div>
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Contact</h3>
          <div className="space-y-2">
            <p>187 Mashkhur Zhusupa</p>
            <p>City, Country</p>
            <p>
              Email:{" "}
              <Link href="mailto:contact@firecourt.com" //Напишешь сюда свою бизнес почту
               className="hover:text-yellow-300 transition-colors duration-200">
                contact@firecourt.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

