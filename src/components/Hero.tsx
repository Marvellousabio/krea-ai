'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const leftSlides = [
  {
    id: 1,
    image: '/wan.png',
    title: 'WAN 2.2',
    subtitle: 'WAN 2.2 Image generation',
    description: 'Generate complex images with the latest new and powerful WAN 2.2 models. Exceptional prompt adherence and ultra-realistic image generation.',
    button: 'Try WAN 2.2',
    buttonStyle: 'bg-blue-600 hover:bg-blue-700',
    tag: 'FEATURED MODEL'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop',
    title: 'AI Studio',
    subtitle: 'Creative AI Suite',
    description: 'Advanced AI-powered creative tools for professional content generation and editing workflows with cutting-edge technology.',
    button: 'Try Studio',
    buttonStyle: 'bg-purple-600 hover:bg-purple-700',
    tag: 'NEW RELEASE'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&h=400&fit=crop',
    title: 'Pro Tools',
    subtitle: 'Professional Suite',
    description: 'Enterprise-grade AI tools designed for professional workflows and high-volume content creation needs.',
    button: 'Get Pro',
    buttonStyle: 'bg-green-600 hover:bg-green-700',
    tag: 'ENTERPRISE'
  }
]

const rightSlides = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1554475901-4538ddfbccc2?w=600&h=400&fit=crop',
    title: 'Open Source',
    subtitle: 'FLUX.1 Krea',
    description: 'Run FLUX.1 Krea weights to run FLUX.1 model weights. Download model weights, read the tech report, or explore the documentation.',
    button: 'Download',
    buttonStyle: 'bg-green-600 hover:bg-green-700',
    tag: 'OS MODEL'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=600&h=400&fit=crop',
    title: 'Community',
    subtitle: 'Open Models',
    description: 'Access community-driven AI models and contribute to the open-source ecosystem with collaborative development.',
    button: 'Join Community',
    buttonStyle: 'bg-orange-600 hover:bg-orange-700',
    tag: 'COMMUNITY'
  }
]

export default function HeroCarousel() {
  const [leftCurrent, setLeftCurrent] = useState(0)
  const [rightCurrent, setRightCurrent] = useState(0)

  const nextRightSlide = () => setRightCurrent((prev) => (prev + 1) % rightSlides.length)
  const prevRightSlide = () => setRightCurrent((prev) => (prev - 1 + rightSlides.length) % rightSlides.length)

  return (
    <section className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div>
        {/* Left Card - Controlled by Dots */}
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative w-full h-full">
            <img
              src={leftSlides[leftCurrent].image}
              alt={leftSlides[leftCurrent].title}
              className="w-full h-full object-cover transition-all duration-500"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center px-6">
              {/* Tag */}
              <div className="mb-3">
                <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
                  {leftSlides[leftCurrent].tag}
                </span>
              </div>
              
              {/* Title */}
              <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
                {leftSlides[leftCurrent].title}
              </h1>
              
              {/* Subtitle */}
              <h2 className="text-lg text-white/90 mb-3 font-medium">
                {leftSlides[leftCurrent].subtitle}
              </h2>
              
              {/* Description */}
              <p className="text-white/80 mb-4 text-sm leading-relaxed">
                {leftSlides[leftCurrent].description}
              </p>
              
              {/* CTA Button */}
              <div>
                <button className={`${leftSlides[leftCurrent].buttonStyle} text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-sm`}>
                  {leftSlides[leftCurrent].button}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Dots for Left Card Only */}
      <div className="flex float-right mt-3 pl-1 space-x-3">
        {leftSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => setLeftCurrent(index)}
            title={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition-all ${
              index === leftCurrent
                ? 'bg-blue-600 scale-125'
                : 'bg-gray-300 hover:bg-gray-400'
            }`}
          />
        ))}
      </div>
        </div>

       {/* Right Card */}
<div>
  <div className="relative h-80 rounded-2xl overflow-hidden shadow-2xl">
    {/* Image */}
    <div className="relative w-full h-full">
      <img
        src={rightSlides[rightCurrent].image}
        alt={rightSlides[rightCurrent].title}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6">
        {/* Tag */}
        <div className="mb-3">
          <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
            {rightSlides[rightCurrent].tag}
          </span>
        </div>

        {/* Title */}
        <h1 className="text-4xl font-bold text-white mb-2 leading-tight">
          {rightSlides[rightCurrent].title}
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg text-white/90 mb-3 font-medium">
          {rightSlides[rightCurrent].subtitle}
        </h2>

        {/* Description */}
        <p className="text-white/80 mb-4 text-sm leading-relaxed">
          {rightSlides[rightCurrent].description}
        </p>

        {/* CTA Button */}
        <div>
          <button className={`${rightSlides[rightCurrent].buttonStyle} text-white px-5 py-2 rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-sm`}>
            {rightSlides[rightCurrent].button}
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* Arrows under the image */}
  <div className="flex justify-center items-center gap-3 mt-3 md:mt-1.5">
    <button
      onClick={prevRightSlide}
      aria-label="Previous Slide"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 transition-all"
    >
      <ChevronLeft className="w-4 h-4" />
    </button>

    <button
      onClick={nextRightSlide}
      aria-label="Next Slide"
      className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-300 hover:bg-gray-400 text-gray-700 transition-all"
    >
      <ChevronRight className="w-4 h-4" />
    </button>
  </div>
</div>
        
      </div>

      
    </section>
  )
}