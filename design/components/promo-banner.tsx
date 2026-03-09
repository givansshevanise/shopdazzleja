"use client"

import { useEffect, useState, useRef } from "react"
import { Gift, Sparkles } from "lucide-react"

export function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // Set end date to 7 days from now
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 7)

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const distance = endDate.getTime() - now

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [])

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
    <section ref={sectionRef} className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="animate-item opacity-0 translate-y-8 transition-all duration-700 bg-accent rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-accent-foreground/70 mb-2">
                <Gift className="h-5 w-5" />
                <span className="text-sm font-medium">Limited Time Offer</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-accent-foreground mb-2">
                Special Launch Sale!
              </h3>
              <p className="text-accent-foreground/80">
                Order now and get free customization on your first mirror
              </p>
            </div>

            <div className="flex gap-4">
              {[
                { value: timeLeft.days, label: "Days" },
                { value: timeLeft.hours, label: "Hours" },
                { value: timeLeft.minutes, label: "Mins" },
                { value: timeLeft.seconds, label: "Secs" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-2xl p-4 min-w-[70px] text-center shadow-sm"
                >
                  <span className="block text-2xl md:text-3xl font-bold text-primary">
                    {String(item.value).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
