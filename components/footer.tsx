import { Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              MC Bebidas
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Seu catálogo completo de bebidas com qualidade e variedade. Entre em contato pelo WhatsApp e faça seu
              pedido!
            </p>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Facebook size={24} />
              </a>
            </div> */}
          </div>

          {/* Contato */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-green-400" />
                <span className="text-gray-300">(98) 98142-7343</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin size={18} className="text-red-400" />
                <span className="text-gray-300">São Luís, Ma</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={18} className="text-yellow-400" />
                <span className="text-gray-300">Seg - Dom: 8h às 20h</span>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-cyan-400">Links Rápidos</h4>
            <div className="space-y-2">
              <a href="#catalogo" className="block text-gray-300 hover:text-white transition-colors">
                Catálogo
              </a>
              <a href="#sobre" className="block text-gray-300 hover:text-white transition-colors">
                Sobre Nós
              </a>
              <a
                href="https://wa.me/5598981427343?text=Olá,%20gostaria%20de%20mais%20informações!"
                target="_blank"
                className="block text-gray-300 hover:text-green-400 transition-colors"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Linha divisória e copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p className="text-gray-400">© 2025 MC Bebidas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
