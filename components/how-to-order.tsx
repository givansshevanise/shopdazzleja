"use client"

import { useEffect, useRef } from "react"
import { Palette, Flower2, Type, Send, CreditCard, Package } from "lucide-react"

const steps = [
  {
    icon: Palette,
    step: "01",
    title: "Choose Your Size",
    description: "Pick from Small (~6\"), Medium (~10\"), or Large (~14\") mirrors.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Flower2,
    step: "02",
    title: "Pick Colors & Flowers",
    description: "Select your favorite color palette and flower styles for your design.",
    color: "bg-secondary text-secondary-foreground",
  },
  {
    icon: Type,
    step: "03",
    title: "Add Personal Touches",
    description: "Include names, dates, or special text to make it uniquely yours.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Send,
    step: "04",
    title: "Send Your Order",
    description: "DM us on Instagram, WhatsApp, or through our Linktree.",
    color: "bg-chart-4 text-white",
  },
  {
    icon: CreditCard,
    step: "05",
    title: "Confirm Payment",
    description: "Secure bank transfer to confirm your custom order.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Package,
    step: "06",
    title: "Receive Your Mirror",
    description: "Your handmade mirror will be ready in just 3 days!",
    color: "bg-secondary text-secondary-foreground",
  },
]

export function HowToOrder() {
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
    <section id="how-to-order" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            How to Order
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "100ms" }}
          >
            Getting your custom mirror is easy! Follow these simple steps to create your perfect piece.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, index) => (
            <div
              key={item.step}
              className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out relative"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="bg-card rounded-2xl p-6 h-full hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-sm font-bold text-primary/50 mb-1 block">
                      Step {item.step}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out mt-12 text-center"
          style={{ transitionDelay: "800ms" }}
        >
          <div className="inline-flex items-center gap-2 bg-card px-6 py-3 rounded-full shadow-sm">
            <CreditCard className="h-5 w-5 text-primary" />
            <span className="text-foreground font-medium">
              Payment: Bank transfer upfront for custom mirrors
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
