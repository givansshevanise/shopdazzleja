"use client"

import Image from "next/image"
import Link from "next/link"
import { Instagram, MessageCircle, LinkIcon, Heart } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/shopdazzleja", label: "Instagram" },
  { icon: MessageCircle, href: "https://wa.me/message/P4NXT5MFKOHVD1", label: "WhatsApp" },
  { icon: LinkIcon, href: "#", label: "Linktree" },
]

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  return (
    <footer className="bg-foreground text-card py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-08%20at%2023.04.04-UVfv7POfWycMvKf0euOgJ39ksu1b8k.jpeg"
              alt="Dazzle"
              width={120}
              height={48}
              className="h-12 w-auto object-contain mb-4 brightness-110"
            />
            <p className="text-card/70 leading-relaxed">
              Handmade foam clay mirrors perfect for gifts and room décor. Each piece is designed to
              dazzle.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-card/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-card/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-card/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-card/50 text-sm">© 2026 Dazzle. All rights reserved.</p>
          <p className="text-card/50 text-sm flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-accent fill-accent" /> in Jamaica
          </p>
        </div>
      </div>
    </footer>
  )
}
