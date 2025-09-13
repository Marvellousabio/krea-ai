'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    id: 1,
    image: '/wan.png',
    title: 'WAN 2.2',
    description:
      'WAN 2.2 Image generation based on new generation WAN 2.2 models. Exceptional prompt adherence and ultra-realistic image generation.',
    button: 'Try WAN 2.2',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700',
  },
  {
    id: 2,
    image: '/cor.png',
    title: 'FLUX.1 Open Source',
    description:
      'FLUX.1 [schnell] weights to run FLUX.1 model weights. Download model weights, read the tech report, or',
    button: 'Download model weights',
    buttonStyle: 'bg-green-600 hover:bg-green-700',
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length)

  return (
    <section className="container mx-auto px-6 py-8 ">
      <div className="container mx-auto px-6 py-8">
        {/* Hero Section with Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* WAN 2.2 Card */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/wan.png"
              alt="WAN 2.2 Image Generation"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-2">WAN 2.2</h2>
              <p className="text-white/90 mb-4">WAN 2.2 Image generation based on new generation WAN 2.2 models. Exceptional prompt adherence and ultra-realistic image generation.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-semibold">
                Try WAN 2.2
              </button>
            </div>
          </div>

          {/* FLUX.1 Card */}
          <div className="relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/cor.png"
              alt="FLUX.1 Open Source"
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h2 className="text-3xl font-bold text-white mb-2">FLUX.1<br />Open Source</h2>
              <p className="text-white/90 mb-4">FLUX.1 [schnell] weights to run FLUX.1 model weights. Download model weights, read the tech report, or</p>
              <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-md font-semibold">
                Download model weights
              </button>
            </div>
          </div>
        </div>

      {/* Dots */}
      <div className="flex justify-center space-x-2 mt-4">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            title={`Go to slide ${idx + 1}`}
            aria-label={`Go to slide ${idx + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              idx === current
                ? 'bg-gray-900 dark:bg-gray-100'
                : 'bg-gray-400/50 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
    </section>
  )
}
