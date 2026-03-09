"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, Sparkles } from "lucide-react"

const galleryImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clay%20mirror%20art-IisO79nxMzmNSeR3hIOnhuD9Db1HF8.jpeg",
    alt: "Colorful foam clay flower mirror",
    caption: "Custom design – rainbow flower arrangement",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%281%29-iMcuaxCuWbZdnTTIVRPKQnBhgQB0kA.png",
    alt: "Coral colored mirror frame",
    caption: "Coral theme – warm sunset vibes",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%282%29-KSeOzttbDTBiNpSHeytrhmWREHmwoX.png",
    alt: "Pink mirror design",
    caption: "Hot pink – bold and beautiful",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design-C0gNeVbu4kYTzzg8rZm3PJa04gZRtV.png",
    alt: "Orange themed mirror",
    caption: "Orange crush – bright and cheerful",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Untitled%20design%20%283%29-mr0qlLauKEy6H7DYnmnRcvcUTOEiRz.png",
    alt: "Purple lavender mirror",
    caption: "Lavender dreams – soft and elegant",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Clay%20mirror%20art-IisO79nxMzmNSeR3hIOnhuD9Db1HF8.jpeg",
    alt: "Detail shot of foam clay flowers",
    caption: "Detail view – intricate craftsmanship",
  },
]

export function Gallery() {
  const sectionRef = useRef<HTMLElement>(null)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

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

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null)
    }
    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [])

  return (
    <section id="gallery" ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out inline-flex items-center gap-2 text-primary font-medium mb-4"
          >
            <Sparkles className="h-5 w-5" />
            Our Work
          </span>
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            style={{ transitionDelay: "100ms" }}
          >
            Gallery
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "200ms" }}
          >
            Browse through our collection of handmade mirrors. Each piece is unique and crafted with care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-card translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-sm font-medium">{image.caption}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-card hover:text-card/80 transition-colors"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          <div
            className="relative max-w-4xl w-full aspect-square animate-in fade-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[selectedImage].src}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-foreground/50 backdrop-blur-sm rounded-b-2xl">
              <p className="text-card text-center">{galleryImages[selectedImage].caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
