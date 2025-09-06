import { Truck, Users, Award, Clock } from "lucide-react"

export function AboutSection() {
  return (
    <section id="sobre" className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-card-foreground mb-6">
            Sobre a{" "}
            <span className="bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
              MC Bebidas
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Na MC Bebidas, nossa missão é levar sabor, qualidade e praticidade para o seu negócio ou momento de lazer.
              Somos uma distribuidora especializada em oferecer uma ampla variedade de bebidas — desde refrigerantes e
              sucos até cervejas, destilados e águas — sempre com preços competitivos, entrega ágil e atendimento de
              excelência.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Com uma equipe comprometida e um sistema logístico eficiente, garantimos que bares, restaurantes, eventos
              e consumidores finais recebam seus pedidos no prazo e em perfeitas condições. Trabalhamos apenas com
              marcas reconhecidas e produtos de procedência garantida, porque acreditamos que cada brinde merece o
              melhor.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Seja para abastecer seu comércio ou para celebrar bons momentos, conte com a MC Bebidas para manter a sua
              geladeira sempre cheia e a sua experiência sempre refrescante.
            </p>

            <div className="text-center p-6 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-lg border border-cyan-200/50">
              <p className="text-xl font-semibold bg-gradient-to-r from-cyan-600 to-purple-600 bg-clip-text text-transparent">
                MC Bebidas — Distribuindo qualidade, brindando momentos.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Portfólio Completo</h3>
              <p className="text-sm text-muted-foreground">Bebidas para todos os gostos</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Entrega Rápida</h3>
              <p className="text-sm text-muted-foreground">Segura e no prazo</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Atendimento</h3>
              <p className="text-sm text-muted-foreground">Personalizado</p>
            </div>

            <div className="text-center p-6 bg-card rounded-lg border shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">Parcerias</h3>
              <p className="text-sm text-muted-foreground">Fornecedores de confiança</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
