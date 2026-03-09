"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, Sparkles } from "lucide-react"

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll(".animate-item")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex items-center overflow-hidden pt-32 pb-8 md:pt-36 md:pb-12"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-32 right-0 w-64 h-64 bg-accent/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <div
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
            style={{ transitionDelay: "100ms" }}
          >
            <span className="inline-flex items-center gap-2 text-primary font-medium mb-4">
              <Sparkles className="h-5 w-5" />
              Handmade with Love
            </span>
          </div>

          <h1
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6 leading-tight text-balance"
            style={{ transitionDelay: "200ms" }}
          >
            Handmade Mirrors & Décor that{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Dazzle
            </span>
          </h1>

          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg md:text-xl mb-8 max-w-lg mx-auto md:mx-0"
            style={{ transitionDelay: "300ms" }}
          >
            Custom foam clay mirrors perfect for gifts and room décor. Choose your colors, flowers,
            and personal touches to make it uniquely yours.
          </p>

          <div
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            style={{ transitionDelay: "400ms" }}
          >
            <Button
              size="lg"
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg shadow-secondary/25 transition-all duration-300 hover:scale-105 hover:shadow-xl rounded-full px-8"
              asChild
            >
              <a href="https://www.instagram.com/shopdazzleja" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Order via Instagram
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 hover:scale-105 rounded-full px-8"
              asChild
            >
              <a href="https://wa.me/message/P4NXT5MFKOHVD1" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div
          className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out relative"
          style={{ transitionDelay: "500ms" }}
        >
          <div className="relative aspect-square max-w-md mx-auto">
            {/* Decorative frame */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-secondary/30 to-accent/30 rounded-3xl rotate-3 scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tl from-accent/30 via-primary/30 to-secondary/30 rounded-3xl -rotate-3 scale-105" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clay%20mirror%20art-IisO79nxMzmNSeR3hIOnhuD9Db1HF8.jpeg"
                alt="Beautiful handmade foam clay mirror with colorful flowers"
                width={500}
                height={500}
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                priority
              />
            </div>

            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce">
              Custom Made
            </div>
            <div className="absolute -bottom-4 -left-4 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg animate-bounce delay-500">
              3 Days Delivery
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-foreground/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
