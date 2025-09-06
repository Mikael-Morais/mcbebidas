import { Button } from "@/components/ui/button"
import { Sparkles, ShoppingCart } from "lucide-react"

export function Hero() {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-cyan-50 via-purple-50 to-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <div className="flex items-center justify-center mb-4">
          <Sparkles className="h-6 w-6 text-cyan-500 mr-2 animate-pulse" />
          <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Catálogo de Produtos</span>
          <Sparkles className="h-6 w-6 text-purple-500 ml-2 animate-pulse" />
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-card-foreground mb-6 text-balance">
          <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">MC Bebidas</span>
          <span className="block text-2xl md:text-4xl mt-2 text-muted-foreground">
            Distribuindo Qualidade, Brindando Momentos
          </span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
          Explore nosso catálogo completo de bebidas premium. De refrigerantes a destilados, temos tudo para o seu
          negócio ou momento especial.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#catalogo">
            <Button
              size="lg"
              className="text-lg px-8 bg-cyan-600 hover:bg-cyan-700 text-white transform hover:scale-105 transition-all duration-200"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Ver Catálogo
            </Button>
          </a>
          <a href= "https://wa.me/5598981427343?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20os%20produtos%20da%20MC%20bebidas." target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 bg-transparent border-2 border-cyan-500 text-cyan-600 hover:bg-cyan-50 transform hover:scale-105 transition-all duration-200"
            >
              Falar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
