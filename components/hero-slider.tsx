'use client'

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Empowering Communities for a Better Tomorrow",
    description: "Join us in our mission to transform lives and build sustainable communities.",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Education for All",
    description: "We believe in the power of education to change lives and create opportunities.",
  },
  {
    image: "/placeholder.svg?height=600&width=1200",
    title: "Healthcare Access",
    description: "Providing essential healthcare services to underserved communities.",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[600px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl md:text-2xl mb-8">{slide.description}</p>
              <div className="space-x-4">
                <Button variant="default" size="lg" className="bg-[#32CD32] hover:bg-[#28A228]">
                  Learn More
                </Button>
                <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-[#001F54]">
                  Get Involved
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

