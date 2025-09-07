"use client"
import { useCart } from "../context/cart-context"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

export function Cart() {
  const { cart, clearCart } = useCart()

  // Monta a mensagem para o WhatsApp
  const whatsappMessage = encodeURIComponent(
    cart.map(item =>
      `${item.quantity}x ${item.name} - R$ ${(item.price * item.quantity).toFixed(2).replace(".", ",")}`
    ).join("\n")
  )

  const whatsappUrl = `https://wa.me/5598981427343?text=Olá,%20gostaria%20de%20pedir%20os%20itens:%0A${whatsappMessage}` 

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center">
        <ShoppingCart className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
        <p className="text-muted-foreground">Seu carrinho está vazio.</p>
      </div>
    )
  }

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">Seu Carrinho</h2>
      <ul className="mb-4">
        {cart.map(item => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.quantity}x {item.name}</span>
            <span className="font-bold">R$ {(item.price * item.quantity).toFixed(2).replace(".", ",")}</span>
          </li>
        ))}
      </ul>
      <Button
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold mb-2"
        asChild
      >
        <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
          Enviar pedido pelo WhatsApp
        </a>
      </Button>
      <Button
        className="w-full"
        variant="outline"
        onClick={clearCart}
      >
        Limpar carrinho
      </Button>
    </div>
  )
}