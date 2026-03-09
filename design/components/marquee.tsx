"use client"

import { Sparkles } from "lucide-react"

const marqueeItems = [
  "HANDMADE WITH LOVE",
  "CUSTOM MIRRORS",
  "PERFECT GIFTS",
  "FOAM CLAY ART",
  "ROOM DECOR",
  "3 DAYS DELIVERY",
]

export function Marquee() {
  return (
    <div className="bg-primary py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center">
        {[...marqueeItems, ...marqueeItems].map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center mx-8 text-primary-foreground text-sm font-medium tracking-wider"
          >
            <Sparkles className="h-4 w-4 mr-2" />
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
