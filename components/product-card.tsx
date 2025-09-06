"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Minus, Plus, MessageCircle, Sparkles } from "lucide-react"

interface Product {
  id: number
  name: string
  price: number
  image: string
  category: string
}

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1)

  const handleQuantityChange = (change: number) => {
    const newQuantity = quantity + change
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleWhatsAppOrder = () => {
    const message = `Olá, gostaria de pedir ${quantity}x ${product.name} - R$ ${(product.price * quantity).toFixed(2).replace(".", ",")}`
    const whatsappUrl = `https://wa.me/5598981427343?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Card className="group hover:shadow-xl transition-all duration-500 hover:border-cyan-200/50 hover:-translate-y-2 bg-gradient-to-br from-card to-card/80 backdrop-blur-sm">
      <CardContent className="p-4">
        <div className="relative mb-4 overflow-hidden rounded-lg">
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-48 object-contain transition-transform duration-500 group-hover:scale-110 bg-white"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <Badge className="absolute top-2 left-2 bg-cyan-700 text-white border-0 shadow-lg font-medium">
            {product.category}
          </Badge>
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Sparkles className="h-5 w-5 text-yellow-400 animate-pulse" />
          </div>
        </div>

        <h3 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-cyan-600 transition-colors duration-300">
          {product.name}
        </h3>

        <p className="text-2xl font-bold mb-4 bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
          R$ {product.price.toFixed(2).replace(".", ",")}
        </p>

        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-muted-foreground font-medium">Quantidade:</span>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200"
              onClick={() => handleQuantityChange(-1)}
              disabled={quantity <= 1}
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-8 text-center font-bold text-lg bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              {quantity}
            </span>
            <Button
              variant="outline"
              size="icon"
              className="h-8 w-8 bg-transparent border-cyan-200 hover:bg-cyan-50 hover:border-cyan-300 transition-all duration-200"
              onClick={() => handleQuantityChange(1)}
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="text-center mb-2 p-2 bg-gradient-to-r from-cyan-50 to-purple-50 rounded-lg border border-cyan-100">
          <span className="text-sm text-muted-foreground">
            Total:{" "}
            <span className="font-bold text-lg bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              R$ {(product.price * quantity).toFixed(2).replace(".", ",")}
            </span>
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          className="w-full bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 font-semibold border-0"
          onClick={handleWhatsAppOrder}
        >
          <MessageCircle className="mr-2 h-4 w-4" />
          Pedir no WhatsApp
        </Button>
      </CardFooter>
    </Card>
  )
}
