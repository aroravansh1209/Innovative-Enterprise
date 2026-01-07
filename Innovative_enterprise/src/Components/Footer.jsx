

import { Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-black text-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-red-600 font-bold text-lg mb-4">Innovative Enterprise</h3>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              Your trusted partner in IT solutions and enterprise technology. Delivering excellence since day one.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-black transition-all duration-300"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-red-600/20 rounded-lg flex items-center justify-center hover:bg-red-600 hover:text-black transition-all duration-300"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  Hardware Solutions
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  Cybersecurity
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-300 hover:text-red-600 transition-colors duration-300">
                  Network Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-red-600" />
                <span className="text-gray-300">+91-XXXX-XXXX-XX</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-red-600" />
                <span className="text-gray-300">info@innovativeenterprise.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-red-600 flex-shrink-0 mt-1" />
                <span className="text-gray-300">Your City, Country</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
            <p>&copy; 2025 Innovative Enterprise. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-red-600 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-red-600 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
