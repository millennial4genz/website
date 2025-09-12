"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl text-slate-900">
            #millennials4genz
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-slate-600 hover:text-teal-600 transition-colors">
              About
            </Link>
            <Link href="/areas" className="text-slate-600 hover:text-teal-600 transition-colors">
              Support Areas
            </Link>
            <Link href="/get-involved" className="text-slate-600 hover:text-teal-600 transition-colors">
              Get Involved
            </Link>
            <Link href="/resources" className="text-slate-600 hover:text-teal-600 transition-colors">
              Resources
            </Link>
            <Link href="/updates" className="text-slate-600 hover:text-teal-600 transition-colors">
              Updates
            </Link>
            <Link href="/contact" className="text-slate-600 hover:text-teal-600 transition-colors">
              Contact
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-slate-600 hover:text-teal-600 hover:bg-slate-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="flex flex-col space-y-3">
              <Link
                href="/about"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/get-involved"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Involved
              </Link>
              <Link
                href="/areas"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Support Areas
              </Link>
              <Link
                href="/resources"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resources
              </Link>
              <Link
                href="/updates"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Updates
              </Link>
              <Link
                href="/contact"
                className="text-slate-600 hover:text-teal-600 transition-colors px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
