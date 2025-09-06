"use client"

import { useState } from "react"
import { Menu, Droplets } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4 justify-between max-w-full mx-auto">
        <div className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center">
            <Droplets className="h-4 w-4 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
            MC Bebidas
          </h1>
        </div>

        {/* Botão do menu para todas as telas */}
        <div className="flex items-center space-x-2">
          <Button  className="ml-8" variant="ghost" size="icon" onClick={() => setMenuOpen(!menuOpen)}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Menu: aparece só quando menuOpen for true */}
      {menuOpen && (
        <nav className="flex flex-col items-center space-y-4 py-4 bg-background border-b">
          <a href="#catalogo" className="text-foreground hover:text-primary transition-colors">
            Catálogo
          </a>
          <a href="#sobre" className="text-foreground hover:text-primary transition-colors">
            Sobre
          </a>
          <a href="#contato" className="text-foreground hover:text-primary transition-colors">
            Contato
          </a>
        </nav>
      )}
    </header>
  )
}
