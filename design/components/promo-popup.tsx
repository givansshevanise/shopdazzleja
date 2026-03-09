"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PromoPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [isDismissed, setIsDismissed] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const handleDismiss = () => {
    setIsVisible(false)
    setTimeout(() => setIsDismissed(true), 300)
  }

  if (isDismissed) return null

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 max-w-xs transition-all duration-500 ease-out ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "translate-x-full opacity-0"
      }`}
    >
      <div className="relative overflow-hidden rounded-2xl bg-card shadow-xl border border-border">
        {/* Decorative gradient top bar */}
        <div className="h-1.5 bg-gradient-to-r from-primary via-secondary to-accent" />
        
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Dismiss notification"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        <div className="p-5">
          {/* Icon */}
          <div className="mb-3 inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
            <Sparkles className="w-5 h-5 text-primary" />
          </div>

          {/* Content */}
          <h3 className="font-semibold text-foreground mb-2 pr-6">
            Love this website?
          </h3>
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            I can create one just like it for you! Let&apos;s bring your vision to life.
          </p>

          {/* CTA Button */}
          <Button
            asChild
            className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-primary-foreground"
          >
            <a 
              href="https://www.linkedin.com/in/shevanise-givans/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Get Your Own Website
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
