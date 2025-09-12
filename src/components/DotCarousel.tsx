'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react' // For potential arrows, but using dots

interface DotCarouselProps {
  images: string[]
  title: string
  description: string
  buttonText: string
  buttonColor: string
}

export default function DotCarousel({ images, title, description, buttonText, buttonColor }: DotCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => setCurrentIndex(index)
  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % images.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)

  return (
    <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
      {/* Image */}
      <Image
        src={images[currentIndex]}
        alt={`${title} Slide ${currentIndex + 1}`}
        width={600}
        height={400}
        className="w-full h-64 object-cover"
      />
      
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      
      {/* Text and Button - Static for card, but can be per-slide */}
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-white/90 mb-4">{description}</p>
        <button className={`hover:opacity-90 px-6 py-2 rounded-md font-semibold ${buttonColor}`}>
          {buttonText}
        </button>
      </div>

      {/* Dots Indicator - Below image */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentIndex === index ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}