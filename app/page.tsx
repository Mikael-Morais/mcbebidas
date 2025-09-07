import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { ProductGrid } from "@/components/product-grid"
import { AboutSection } from "@/components/about-section"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Footer } from "@/components/footer"
import { Cart } from "@/components/cart"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <section id="catalogo">
        <ProductGrid />
      </section>
      <Cart />
      <AboutSection />
      <WhatsAppButton />
      <Footer />
    </div>
  )
}
