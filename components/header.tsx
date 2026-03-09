"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Marquee } from "@/components/marquee"

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "How to Order", href: "#how-to-order" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

function AnimatedHamburger({ isOpen, onClick }: { isOpen: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="md:hidden relative z-[102] w-10 h-10 flex items-center justify-center focus:outline-none"
      aria-label="Toggle menu"
    >
      <div className="relative w-6 h-5 flex flex-col justify-between">
        <span
          className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out origin-center ${
            isOpen ? "rotate-45 translate-y-[9px]" : ""
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out ${
            isOpen ? "opacity-0 scale-x-0" : "opacity-100 scale-x-100"
          }`}
        />
        <span
          className={`block h-0.5 w-full bg-foreground rounded-full transition-all duration-300 ease-out origin-center ${
            isOpen ? "-rotate-45 -translate-y-[9px]" : ""
          }`}
        />
      </div>
    </button>
  )
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <>
      {/* Mobile Navigation Overlay - rendered outside header */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] md:hidden"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#FDF8F3',
          }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8 px-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-3xl font-semibold text-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 mt-8">
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full border-2"
                asChild
              >
                <a 
                  href="https://www.instagram.com/shopdazzleja" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  onClick={() => setIsOpen(false)}
                >
                  <Instagram className="h-5 w-5 mr-2" />
                  Instagram
                </a>
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="rounded-full border-2"
                asChild
              >
                <a 
                  href="https://wa.me/message/P4NXT5MFKOHVD1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  onClick={() => setIsOpen(false)}
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}

      <header
        className="fixed top-0 left-0 right-0 z-[101] transition-all duration-500 ease-out"
      >
        {/* Teal Top Bar with Marquee */}
        <Marquee />
        
        {/* Main Navigation */}
        <div className="bg-background/95 backdrop-blur-md shadow-sm py-3">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link href="#home" className="relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-08%20at%2023.04.04-UVfv7POfWycMvKf0euOgJ39ksu1b8k.jpeg"
              alt="Dazzle"
              width={120}
              height={48}
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/70 hover:text-accent hover:bg-accent/10 transition-all duration-300"
              asChild
            >
              <a href="https://www.instagram.com/shopdazzleja" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-foreground/70 hover:text-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
              asChild
            >
              <a href="https://wa.me/message/P4NXT5MFKOHVD1" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <MessageCircle className="h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Animated Hamburger Menu Button */}
          <AnimatedHamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        </div>
        </div>
      </header>
    </>
  )
}
