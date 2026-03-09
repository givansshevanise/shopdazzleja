"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Instagram, Sparkles } from "lucide-react"

const products = [
  {
    name: "Small Mirror",
    size: "8 × 12",
    description: "Perfect for vanity tables and small spaces. Great as a gift or keepsake.",
    bestFor: "Gifts & Personal Use",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-iMcuaxCuWbZdnTTIVRPKQnBhgQB0kA.png",
    color: "from-secondary to-secondary/70",
  },
  {
    name: "Medium Mirror",
    size: "12 × 18",
    description: "Ideal for bedrooms and entryways. A statement piece that adds charm.",
    bestFor: "Room Décor",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29-KSeOzttbDTBiNpSHeytrhmWREHmwoX.png",
    color: "from-accent to-accent/70",
  },
  {
    name: "Large Mirror",
    size: "16 × 24",
    description: "A stunning centerpiece for any room. Makes a bold decorative statement.",
    bestFor: "Statement Pieces",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-C0gNeVbu4kYTzzg8rZm3PJa04gZRtV.png",
    color: "from-primary to-primary/70",
  },
]

export function Products() {
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
    <section id="products" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out inline-flex items-center gap-2 text-primary font-medium mb-4"
          >
            <Sparkles className="h-5 w-5" />
            Our Collection
          </span>
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            style={{ transitionDelay: "100ms" }}
          >
            Choose Your Perfect Mirror
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "200ms" }}
          >
            Available in three sizes to fit any space. All mirrors are fully customizable with your
            choice of colors, flowers, and personal touches.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.name}
              className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div className="relative rounded-3xl overflow-hidden bg-card shadow-sm hover:shadow-xl transition-all duration-500">
                <div className={`aspect-square bg-gradient-to-br ${product.color} p-8`}>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold text-foreground">{product.name}</h3>
                    <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {product.size}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Best for: <span className="font-medium text-foreground">{product.bestFor}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-center mt-12"
          style={{ transitionDelay: "600ms" }}
        >
          <p className="text-muted-foreground mb-6">
            Custom orders available via Instagram DM, WhatsApp, or Linktree
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="https://www.instagram.com/shopdazzleja" target="_blank" rel="noopener noreferrer">
              <Instagram className="mr-2 h-5 w-5" />
              Order Now
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
