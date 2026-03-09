"use client"

import { useEffect, useRef } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "How long does it take to make a mirror?",
    answer:
      "Each mirror takes approximately 3 days to complete. This allows us to carefully craft each piece with attention to detail and ensure the foam clay sets properly.",
  },
  {
    question: "Can I choose my own colors and flowers?",
    answer:
      "Absolutely! We offer full customization. You can choose your preferred color palette, flower styles, and even add personal touches like names or special dates.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers for all orders. Payment is required upfront to confirm your custom order and begin crafting your mirror.",
  },
  {
    question: "Do you offer pickup or delivery?",
    answer:
      "Both options are available! You can pick up your mirror directly from us, or we can arrange delivery to your location.",
  },
  {
    question: "What sizes are available?",
    answer:
      "We offer three sizes: Small (~6 inches), Medium (~10 inches), and Large (~14 inches). Each size is perfect for different uses and spaces.",
  },
  {
    question: "Can I order a mirror as a gift?",
    answer:
      "Yes! Our mirrors make perfect gifts for birthdays, housewarmings, weddings, and other special occasions. We can add personalized touches to make it extra special.",
  },
]

export function FAQ() {
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
    <section ref={sectionRef} className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
          >
            Frequently Asked Questions
          </h2>
          <p
            className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out text-muted-foreground text-lg"
            style={{ transitionDelay: "100ms" }}
          >
            Got questions? We have answers!
          </p>
        </div>

        <div
          className="animate-item opacity-0 translate-y-8 transition-all duration-700 ease-out max-w-3xl mx-auto"
          style={{ transitionDelay: "200ms" }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-2xl px-6 border-none shadow-sm data-[state=open]:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
