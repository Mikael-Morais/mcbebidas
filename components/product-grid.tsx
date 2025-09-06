import { ProductCard } from "@/components/product-card"
import { Sparkles } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Coca Cola 2L",
    price: 12.0,
    image: "/cola2l.jpg",
    category: "Refrigerantes",
  },
  {
    id: 2,
    name: "Cola Cola 0 2L",
    price: 12.0,
    image: "/cola02l.jpg",
    category: "Refrigerantes",
  },
  {
    id: 3,
    name: "Jesus 2L",
    price: 12.0,
    image: "/jesus2l.jpg",
    category: "Refrigerantes",
  },
  {
    id: 4,
    name: "Guaraná 2L",
    price: 10.0,
    image: "/guarana2l.jpg",
    category: "Refrigerantes",
  },
  {
    id: 5,
    name: "Guaraná 1L",
    price: 6.0,
    image: "/guarana1l.jpg",
    category: "Refrigerantes",
  },
  {
    id: 6,
    name: "Brahma duplo malte Lata",
    price: 3.7,
    image: "/brahmadm.jpg",
    category: "Cervejas",
  },
  {
    id: 7,
    name: "Skol Lata",
    price: 3.6,
    image: "/skol.jpg",
    category: "Cervejas",
  },
  {
    id: 8,
    name: "Brahma duplo malte Lata Fardo",
    price: 45.0,
    image: "/brahmafardo.png",
    category: "Cervejas",
  },
  {
    id: 9,
    name: "Skol Lata Fardo",
    price: 44.0,
    image: "/skolfardo.jpg",
    category: "Cervejas",
  },
  {
    id: 10,
    name: "Garrafão 20L Cheio",
    price: 5.0,
    image: "/garrafao2.png",
    category: "Cervejas",
  },
  {
    id: 11,
    name: "Garrafão 20L Vazio",
    price: 20.0,
    image: "/vazio.png",
    category: "Cervejas",
  },
]

export function ProductGrid() {
  return (
    <section id="produtos" className="py-16 px-4 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="h-5 w-5 text-cyan-500 mr-2 animate-pulse" />
            <span className="text-sm font-medium text-cyan-600 uppercase tracking-wider">Catálogo Completo</span>
            <Sparkles className="h-5 w-5 text-purple-500 ml-2 animate-pulse" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              Nossos Produtos
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore nossa seleção premium de bebidas. Escolha a quantidade e peça direto pelo WhatsApp!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={product.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
