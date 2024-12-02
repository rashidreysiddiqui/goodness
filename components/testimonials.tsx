'use client'

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from 'lucide-react'

const testimonials = [
  {
    quote: "Thanks to this initiative, our village has access to clean drinking water.",
    name: "Ravi",
    role: "Beneficiary",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The education program has transformed the lives of many children in our community.",
    name: "Maria",
    role: "Teacher",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote: "The healthcare services provided have made a significant impact on our well-being.",
    name: "John",
    role: "Community Leader",
    image: "/placeholder.svg?height=100&width=100",
  },
]

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What People Say</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="text-center">
            <p className="text-xl italic mb-4">"{testimonials[currentTestimonial].quote}"</p>
            <div className="flex items-center justify-center mb-4">
              <Image
                src={testimonials[currentTestimonial].image}
                alt={testimonials[currentTestimonial].name}
                width={60}
                height={60}
                className="rounded-full"
              />
            </div>
            <p className="font-semibold">{testimonials[currentTestimonial].name}</p>
            <p className="text-gray-600">{testimonials[currentTestimonial].role}</p>
          </div>
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

