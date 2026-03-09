"use client"

import { useEffect, useRef } from "react"
import { Heart, Palette, Gift } from "lucide-react"

const features = [
  {
    icon: Heart,
    title: "Handmade with Love",
    description: "Every mirror is crafted by hand with attention to detail and passion.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description: "Choose your colors, flowers, and add personal touches like names or dates.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Gift,
    title: "Perfect for Gifts",
    description: "Ideal for birthdays, housewarmings, weddings, and special keepsakes.",
    color: "bg-secondary/10 text-secondary",
  },
]

export function About() {
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
    <section id="about" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            About Dazzle
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg leading-relaxed"
            style={{ transitionDelay: "100ms" }}
          >
            Dazzle creates handmade, customizable foam clay mirrors perfect for gifts and décor.
            From birthdays and housewarmings to weddings and keepsakes, each piece is designed to
            dazzle. Choose your colors, flowers, and personal touches to make it uniquely yours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out bg-card rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow group"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
