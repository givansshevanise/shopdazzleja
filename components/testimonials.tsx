"use client"

import { useEffect, useRef } from "react"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "Loved my custom mirror — it completely transformed my room! The colors matched perfectly with my decor.",
    rating: 5,
  },
  {
    name: "Jessica T.",
    text: "Ordered a medium mirror as a birthday gift and it was absolutely stunning. My friend was so happy!",
    rating: 5,
  },
  {
    name: "Amanda R.",
    text: "The attention to detail is incredible. Every flower looks perfect and the personalization made it so special.",
    rating: 5,
  },
]

export function Testimonials() {
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
    <section ref={sectionRef} className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            What Our Customers Say
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "100ms" }}
          >
            {"Don't just take our word for it — hear from our happy customers!"}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out"
              style={{ transitionDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="bg-card rounded-2xl p-8 h-full shadow-sm hover:shadow-lg transition-all duration-300 relative">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">
                  {`"${testimonial.text}"`}
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-secondary flex items-center justify-center text-primary-foreground font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <span className="font-medium text-foreground">{testimonial.name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
