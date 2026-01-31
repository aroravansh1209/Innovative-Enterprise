"use client"

import { useState, useEffect, useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import LaptopSupplier from '../assets/Laptop&DesktopSupplier.png'
import Security from '../assets/Securityservices.png'
import Corporate from '../assets/CorporateTelecom.png'
import appdev from '../assets/Hero.jpeg'
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
      title: "Laptop and Desktop Supplier",
      category: "DEVELOPMENT",
      description: "Wide range of laptops and desktop computers for personal and business use.",
      image: LaptopSupplier,
    },
    {
      id: 2,
      title: "Security Services",
      category: "DESIGN",
      description: "Comprehensive security solutions for your computing infrastructure.",
      image: Security,
    },
    {
      id: 3,
      title: "Corporate Telecome",
      category: "MARKETING",
      description: "Professional telecom solutions tailored for enterprises.",
      image: Corporate,
    },
    {
      id: 4,
      title: "Gaming Setup",
      category: "MARKETING",
      description: "High-performance gaming systems and custom custom builds.",
      image: smm,
    },
    {
      id: 5,
      title: "Printer Solutions",
      category: "DEVELOPMENT",
      description: "All types of printers and printing solutions for your needs.",
      image: appdev,
    },
    {
      id: 6,
      title: "Software Licenses",
      category: "DEVELOPMENT",
      description: "Legitmate software licenses and licensing support.",
      image: appdev,
    },
    {
      id: 7,
      title: "Refurbished Systems",
      category: "DEVELOPMENT",
      description: "Quality refurbished laptops and system at affordable prices.",
      image: appdev,
    },
    {
      id: 8,
      title: "UPS and Stabilizers",
      category: "DEVELOPMENT",
      description: "Power backup and voltage stabilization solutions.",
      image: appdev,
    },
    {
      id: 9,
      title: "Network Solutions",
      category: "DEVELOPMENT",
      description: "Complete networking infrastructure and solutions.",
      image: appdev,
    },
    {
      id: 10,
      title: "Antivirus Solutions",
      category: "DEVELOPMENT",
      description: "Advanced antivirus and cybersecurity protection.",
      image: appdev,
    },
    {
      id: 11,
      title: "Computer Preipherals",
      category: "DEVELOPMENT",
      description: "Keybords, mice, monitors and other PC peripherals.",
      image: appdev,
    },
    {
      id: 12,
      title: "Internet Leased Lines",
      category: "DEVELOPMENT",
      description: "Dedicated high-speed internet connectivity solutions.",
      image: appdev,
    },
    {
      id: 13,
      title: "Multi-Screen Setup",
      category: "DEVELOPMENT",
      description: "Professional multi-display workstation configuration.",
      image: appdev,
    },
    {
      id: 14,
      title: "CCTV Surveillance",
      category: "DEVELOPMENT",
      description: "Complete CCTV survelliance systems and monitoring.",
      image: appdev,
    },
    {
      id: 15,
      title: "Cybersecurity",
      category: "DEVELOPMENT",
      description: "Enterprise-grade cybersecurity and threat protection.",
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
      className={`w-full bg-gray-50 py-16 px-4 md:px-8 lg:px-16 transition-all duration-1000 transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-[#2d2b4a] max-w-md mb-6 md:mb-0 transition-all duration-800 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
              }`}
          >
            OUR SERVICES
          </h2>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group cursor-pointer ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
            >
              <div className="relative h-48 overflow-hidden">
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
