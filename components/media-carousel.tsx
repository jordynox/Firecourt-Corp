"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const mediaItems = [
  {
    id: 1,
    title: "Latest Album Release",
    description: "Check out our latest album featuring top artists.",
    image: "/images/latest-album.jpg",
  },
  {
    id: 2,
    title: "New Audio Plugin",
    description: "Introducing our new audio plugin for enhanced sound.",
    image: "/images/new-plugin.jpg",
  },
  {
    id: 3,
    title: "Upcoming Event",
    description: "Join us for our upcoming event on audio production.",
    image: "/images/upcoming-event.jpg",
  },
]

export function MediaCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000) // смена слайдов каждые 5 секунд
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      <div className="flex overflow-hidden">
        {mediaItems.map((item, index) => (
          <div
            key={item.id}
            className={`transition-transform duration-500 ease-in-out ${
              index === currentIndex ? "block" : "hidden"
            }`}
          >
            <Card className="bg-gray-800">
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <Image src={item.image} alt={item.title} width={600} height={400} className="rounded-lg" />
                <p className="mt-2 text-gray-400">{item.description}</p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="absolute top-1/2 left-0 z-10 flex w-full justify-between">
        <Button onClick={prevSlide} className="bg-gray-600 hover:bg-gray-700">Previous</Button>
        <Button onClick={nextSlide} className="bg-gray-600 hover:bg-gray-700">Next</Button>
      </div>
    </div>
  )
}