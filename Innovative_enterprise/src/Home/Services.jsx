"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import seo from '../assets/Hero.jpeg'
import appdev from '../assets/Hero.jpeg'
import webdev from '../assets/Hero.jpeg'
import UX from '../assets/Hero.jpeg'
import smm from '../assets/Hero.jpeg'

export default function BusinessServices() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the component is visible
        rootMargin: "50px 0px -50px 0px", // Start animation slightly before entering viewport
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const services = [
    {
      id: 1,
      title: "Affordable Web Development Services",
      category: "DEVELOPMENT",
      description: "Professional affordable web development services with responsive web design, custom websites, and web applications tailored to your business needs.",
      image: webdev,
    },
    {
      id: 2,
      title: "UI/UX Design Services",
      category: "DESIGN",
      description: "Expert UI/UX design services crafting intuitive user interfaces and seamless user experiences for websites and mobile applications.",
      image: UX,
    },
    {
      id: 3,
      title: "SEO Services",
      category: "MARKETING",
      description: "Comprehensive SEO services to optimize your website and rank higher in search engine results, driving organic traffic to your business.",
      image: seo,
    },
    {
      id: 4,
      title: "Social Media Marketing Agency",
      category: "MARKETING",
      description: "Professional social media marketing agency managing your social media presence to engage with your audience and grow your brand.",
      image: smm,
    },
    {
      id: 5,
      title: "Mobile App Development India",
      category: "DEVELOPMENT",
      description: "Expert mobile app development in India, building custom mobile applications for iOS and Android platforms with modern technologies.",
      image: appdev,
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length)
  }

  return (
    <section
      ref={sectionRef}
      className={`w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16 transition-all duration-1000 transform ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#2d2b4a] max-w-md mb-6 md:mb-0 transition-all duration-800 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            Professional Development Services & Digital Marketing Solutions
          </h2>
          <p
            className={`text-gray-600 max-w-md transition-all duration-800 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            Leading digital marketing agency in India offering affordable web development services, UI/UX design services, SEO services, and responsive web design solutions for businesses of all sizes.
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute top-4 right-4 bg-[#2d2b4a] text-white text-xs font-medium py-1 px-3 rounded-full z-10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#1a1830]">
                  {service.category}
                </div>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2d2b4a]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#2d2b4a] mb-2 group-hover:text-[#1a1830] transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm mb-6 group-hover:text-gray-600 transition-colors duration-300">
                  {service.description}
                </p>
                <div className="relative inline-block">
                  <a
                    href="/services"
                    className="text-xs font-semibold tracking-wider text-[#2d2b4a] transition-all duration-300 hover:text-[#1a1830] hover:pl-2 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#2d2b4a] after:transition-all after:duration-300 hover:after:w-full"
                  >
                    EXPLORE SERVICES →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex md:hidden items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-md active:scale-95"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  )
}
