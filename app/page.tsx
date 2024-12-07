import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Calendar, Newspaper, Gift } from 'lucide-react'
import { MediaCarousel } from "@/components/media-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <section className="relative min-h-[80vh] w-full bg-gradient-to-br from-purple-900 via-blue-800 to-gray-900">
        <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center px-4 text-center">
          <div className="mb-8 flex items-center gap-3">
            <Image src="/images/logo.png" alt="Firecourt Corp Logo" width={48} height={48} />
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-6xl/none">
              Welcome to Firecourt Corp
            </h1>
          </div>
          <p className="mx-auto max-w-[600px] text-lg text-gray-300 md:text-xl">
            The leading audio production company providing comprehensive suite of hardware, software, and community resources.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/store">Console.log("");
                Explore Products
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white hover:bg-white/20" asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* New Releases Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            New Releases
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {['/images/audio dock.jpg', '/images/logo for cubes.jpg', '/images/xz.jpg'].map((src, index) => (
              <Card key={index} className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle>New Product {index + 1}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Image
                    src={src}
                    alt={`Product ${index + 1}`}
                    width={300}
                    height={200}
                    className="rounded-lg object-cover"
                  />
                  <p className="mt-4 text-gray-400">
                    Experience our latest innovation designed to elevate your audio production.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company News Section */}
      <section className="w-full py-12 md:py-24 bg-gray-950">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Company News
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle>Latest News {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">
                    Stay updated with the latest developments and announcements from Firecourt Corp.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      <section className="w-full py-12 md:py-24 bg-gray-900">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter text-white sm:text-4xl">
            Upcoming Events
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[1, 2].map((i) => (
              <Card key={i} className="bg-gray-800 text-white">
                <CardHeader>
                  <CardTitle>Event {i}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>Date: Coming Soon</span>
                  </div>
                  <p className="mt-4 text-gray-400">
                    Join us for an exciting event showcasing the latest in audio technology.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Register</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <MediaCarousel />
    </div>
  )
}

