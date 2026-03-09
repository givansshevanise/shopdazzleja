import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Products } from "@/components/products"
import { HowToOrder } from "@/components/how-to-order"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { PromoPopup } from "@/components/promo-popup"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Products />
      <HowToOrder />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <PromoPopup />
      <ScrollToTop />
    </main>
  )
}
