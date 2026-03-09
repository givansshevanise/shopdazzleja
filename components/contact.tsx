"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram, MessageCircle, LinkIcon, Sparkles } from "lucide-react"

const contactMethods = [
  {
    icon: Instagram,
    name: "Instagram DM",
    handle: "@shopdazzleja",
    href: "https://www.instagram.com/shopdazzleja",
    color: "bg-linear-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCAF45]",
    hoverColor: "hover:shadow-[#833AB4]/30",
  },
  {
    icon: MessageCircle,
    name: "WhatsApp",
    handle: "Chat with us",
    href: "https://wa.me/message/P4NXT5MFKOHVD1",
    color: "bg-[#25D366]",
    hoverColor: "hover:shadow-[#25D366]/30",
  },
  {
    icon: LinkIcon,
    name: "Linktree",
    handle: "All our links",
    href: "#",
    color: "bg-linear-to-br from-[#43E660] to-[#28C745]",
    hoverColor: "hover:shadow-[#43E660]/30",
  },
]

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out inline-flex items-center gap-2 text-primary font-medium mb-4"
          >
            <Sparkles className="h-5 w-5" />
            {"Let's Connect"}
          </span>
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
            style={{ transitionDelay: "100ms" }}
          >
            Ready to Order?
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "200ms" }}
          >
            Reach out through any of these channels to place your custom order. Custom orders start
            after payment is confirmed.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {contactMethods.map((method, index) => (
            <a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out group`}
              style={{ transitionDelay: `${(index + 3) * 100}ms` }}
            >
              <div
                className={`bg-card rounded-2xl p-8 text-center h-full shadow-sm hover:shadow-xl ${method.hoverColor} transition-all duration-300`}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${method.color} flex items-center justify-center mx-auto mb-6 transition-transform duration-300 group-hover:scale-110`}
                >
                  <method.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{method.name}</h3>
                <p className="text-muted-foreground">{method.handle}</p>
              </div>
            </a>
          ))}
        </div>

        <div
          className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out mt-16 text-center"
          style={{ transitionDelay: "600ms" }}
        >
          <div className="inline-block bg-card rounded-2xl p-8 shadow-sm max-w-md">
            <p className="text-foreground font-medium mb-4">
              Custom orders start after payment is confirmed
            </p>
            <p className="text-muted-foreground text-sm mb-6">
              Bank transfer upfront • 3 days to create • Pickup or delivery available
            </p>
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-105"
              asChild
            >
              <a href="https://www.instagram.com/shopdazzleja" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-2 h-5 w-5" />
                Start Your Order
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
