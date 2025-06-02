"use client"

import { useState } from "react"
import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Heart, Star, ArrowRight, ArrowLeft, Sparkles, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function CorinthiaPetite() {
  const [currentSection, setCurrentSection] = useState("home")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const products = [
    {
      id: 1,
      name: "Vestido Abejita Chiquitita",
      description: "Elegante vestido en tul rosa con bordados dorados, perfecto para fiestas especiales.",
      images: ["/abejita.HEIC?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: true,
    },
    {
      id: 2,
      name: "Vestido Cinnamon Roll",
      description: "Vestido floral con detalles bordados a mano, ideal para eventos al aire libre.",
      images: ["/placeholder.svg?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: true,
    },
    {
      id: 3,
      name: "Vestido Estrella Dorada",
      description: "Vestido de gala con aplicaciones doradas y falda amplia, para ocasiones muy especiales.",
      images: ["/placeholder.svg?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: true,
    },
    {
      id: 4,
      name: "Vestido Mariposa Azul",
      description: "Vestido en azul cielo con aplicaciones de mariposas, perfecto para cumpleaños.",
      images: ["/placeholder.svg?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: false,
    },
    {
      id: 5,
      name: "Vestido Rosa Encantada",
      description: "Vestido en rosa pastel con encajes delicados, ideal para bautizos y primeras comuniones.",
      images: ["/placeholder.svg?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: false,
    },
    {
      id: 6,
      name: "Vestido Hada del Bosque",
      description: "Vestido en verde menta con detalles florales, perfecto para eventos de jardín.",
      images: ["/placeholder.svg?height=500&width=400", "/placeholder.svg?height=500&width=400"],
      featured: false,
    },
  ]

  const testimonials = [
    {
      name: "María González",
      text: "El vestido de mi hija fue absolutamente perfecto. La calidad y los detalles son increíbles. ¡Mi niña se sintió como una verdadera princesa!",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Ana Rodríguez",
      text: "Corinthia creó el vestido de ensueño para el cumpleaños de mi pequeña. El trabajo es hermoso y la atención al cliente excelente.",
      image: "/placeholder.svg?height=120&width=120",
    },
    {
      name: "Carmen López",
      text: "Quedé fascinada con el vestido. La tela es de muy buena calidad y los acabados son perfectos. ¡Totalmente recomendado!",
      image: "/placeholder.svg?height=120&width=120",
    },
  ]

const openWhatsApp = (message = "") => {
  const phone = "526535389027"; // Número de WhatsApp en formato internacional (sin signos + ni espacios)
  const defaultMessage = "Hola Corinthia, me interesa conocer más sobre los vestidos para mi niña. ¿Podrías ayudarme?";
  const finalMessage = message.trim() !== "" ? message : defaultMessage;
  const encodedMessage = encodeURIComponent(finalMessage);
  const url = `https://wa.me/${phone}?text=${encodedMessage}`;
  window.open(url, "_blank");
};


  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const renderHome = () => (
    <div>
      {/* Hero Section - Elegant */}
      <section className="gradient-pink min-h-screen flex items-center justify-center py-20 px-4 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 opacity-20">
          <Sparkles className="w-16 h-16 text-pink-400" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20">
          <Crown className="w-20 h-20 text-pink-500" />
        </div>
        <div className="absolute top-1/2 left-1/4 opacity-10">
          <Heart className="w-24 h-24 text-rose-400" />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="mb-12">
            <div className="relative w-80 h-80 mx-auto mb-8">
              <Image
                src="/placeholder.svg?height=320&width=320"
                alt="Niña con vestido hermoso"
                fill
                className="object-cover rounded-full shadow-elegant border-8 border-white"
              />
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-elegant">
                <Crown className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>

          <h1 className="font-cormorant text-6xl md:text-8xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-black bg-clip-text mb-6 tracking-wide">
            Corinthia Petite
          </h1>
          <p className="font-playfair text-3xl md:text-4xl text-gray-600 mb-8 italic font-medium">
            "Vestidos que cuentan historias"
          </p>
          <p className="text-xl text-gray-700 mb-16 max-w-3xl mx-auto leading-relaxed">
            Vestidos únicos hechos a mano con amor y dedicación artesanal, para que tu niña se sienta especial en su día
            más importante
          </p>

          {/* Elegant Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
              onClick={() => setCurrentSection("catalog")}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Ver Todos los Vestidos
            </Button>

            <div className="text-lg text-gray-500 font-playfair italic">o</div>

            <Button
              size="lg"
              className="text-xl px-12 py-6 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
              onClick={() => openWhatsApp()}
            >
              <Phone className="w-6 h-6 mr-3" />
              Contactar por WhatsApp
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Products - Elegant */}
      <section className="py-20 px-4 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Nuestros Vestidos Más Populares</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Estos son los favoritos de nuestras clientas, cada uno creado con amor y atención al detalle
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {products
              .filter((p) => p.featured)
              .map((product, index) => (
                <Card
                  key={product.id}
                  className="overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-3xl border-0"
                >
                  <div className="relative h-96 overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-soft">
                        <Star className="w-6 h-6 text-white fill-current" />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <h3 className="font-playfair font-bold text-2xl mb-4 text-gray-800">{product.name}</h3>
                    <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>
                    <Button
                      className="w-full text-lg py-4 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-full shadow-soft transform hover:scale-105 transition-all duration-300 border-0"
                      onClick={() => {
                        setSelectedProduct(product)
                        setCurrentSection("product")
                      }}
                    >
                      Ver Este Vestido
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  )

  const renderCatalog = () => (
    <div className="py-12 px-4 min-h-screen gradient-pale-pink">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Todos Nuestros Vestidos</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">Haz clic en cualquier vestido para ver más detalles</p>
        </div>

        {/* Elegant Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <Card
              key={product.id}
              className="overflow-hidden shadow-elegant hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 bg-white rounded-3xl border-0"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={product.images[0] || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
                {product.featured && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-gradient-to-r from-pink-500 to-black text-white px-4 py-2 rounded-full text-sm font-semibold shadow-soft flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-current" />
                      Popular
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <CardContent className="p-8">
                <h3 className="font-playfair font-bold text-2xl mb-4 text-gray-800">{product.name}</h3>
                <p className="text-gray-600 mb-8 text-lg leading-relaxed">{product.description}</p>
                <Button
                  className="w-full text-lg py-4 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-full shadow-soft transform hover:scale-105 transition-all duration-300 border-0"
                  onClick={() => {
                    setSelectedProduct(product)
                    setCurrentSection("product")
                  }}
                >
                  Ver Detalles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Elegant Contact Section */}
        <div className="text-center mt-20">
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0 max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">¿Te gustó algún vestido?</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Contáctanos por WhatsApp y te ayudamos a elegir el perfecto para tu niña
              </p>
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => openWhatsApp()}
              >
                <Phone className="w-6 h-6 mr-3" />
                Contactar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderProduct = () => {
    if (!selectedProduct) return null

    return (
      <div className="py-12 px-4 min-h-screen bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Back Button */}
          <Button
            variant="outline"
            className="mb-12 text-lg px-8 py-4 rounded-full border-2 border-gray-300 hover:border-pink-400 hover:text-pink-600 transition-all duration-300"
            onClick={() => setCurrentSection("catalog")}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver a Todos los Vestidos
          </Button>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Elegant Images */}
            <div className="space-y-8">
              <div className="relative h-96 lg:h-[700px] overflow-hidden rounded-3xl shadow-elegant">
                <Image
                  src={selectedProduct.images[0] || "/placeholder.svg"}
                  alt={selectedProduct.name}
                  fill
                  className="object-cover"
                />
              </div>
              {selectedProduct.images[1] && (
                <div className="relative h-64 overflow-hidden rounded-3xl shadow-soft">
                  <Image
                    src={selectedProduct.images[1] || "/placeholder.svg"}
                    alt={`${selectedProduct.name} - Vista 2`}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>

            {/* Elegant Product Info */}
            <div className="space-y-10">
              <div>
                <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">{selectedProduct.name}</h1>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-black rounded-full mb-6"></div>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">{selectedProduct.description}</p>
              </div>

              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-800">Información Importante</h3>
                  </div>
                  <div className="space-y-4 text-lg">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Hecho completamente a mano</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Telas de alta calidad</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Disponible en tallas 2, 4 y 6</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Tiempo de confección: 2-3 semanas</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-pink-400 rounded-full mr-3"></div>
                      <span>Se puede personalizar el color</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-soft border-0">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-playfair text-2xl font-bold text-gray-800">¿Cómo hacer tu pedido?</h3>
                  </div>
                  <div className="space-y-3 text-lg">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                        1
                      </div>
                      <span>Contáctanos por WhatsApp</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                        2
                      </div>
                      <span>Nos dices la talla de tu niña</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                        3
                      </div>
                      <span>Te damos el precio exacto</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">
                        4
                      </div>
                      <span>Comenzamos a hacer tu vestido</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Elegant Action Button */}
              <Button
                size="lg"
                className="w-full text-xl py-8 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() =>
                  openWhatsApp(
                    `Hola Corinthia, me interesa el ${selectedProduct.name}. ¿Podrías darme más información sobre precios y tallas?`,
                  )
                }
              >
                <Phone className="w-6 h-6 mr-3" />
                ¡Quiero Este Vestido!
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const renderAbout = () => (
    <div className="py-20 px-4 min-h-screen gradient-pink">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-16">
          <div className="relative w-64 h-64 mx-auto mb-12">
            <Image
              src="/placeholder.svg?height=256&width=256"
              alt="Corinthia Bautista"
              fill
              className="object-cover rounded-full shadow-elegant border-8 border-white"
            />
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-elegant">
              <Heart className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Conoce a Corinthia</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
          <p className="font-playfair text-2xl text-gray-600 italic">La diseñadora detrás de cada vestido</p>
        </div>

        <div className="text-left space-y-10 text-lg leading-relaxed text-gray-700">
          <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <p className="text-xl leading-relaxed">
                Hola, soy Corinthia Bautista. Desde hace más de 10 años me dedico a crear vestidos únicos para niñas. Mi
                pasión comenzó cuando era pequeña, viendo a mi abuela coser vestidos hermosos.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <p className="text-xl leading-relaxed">
                Cada vestido que hago es especial. Uso solo las mejores telas y dedico muchas horas a cada detalle. Me
                encanta ver la sonrisa de las niñas cuando se ponen sus vestidos por primera vez.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="text-center mb-8">
                <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">¿Por qué elegir mis vestidos?</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full"></div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg mb-2">100% hechos a mano</h4>
                    <p>Cada puntada está hecha con amor y cuidado</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg mb-2">Telas de calidad</h4>
                    <p>Solo uso materiales que son suaves y duraderos</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg mb-2">Diseños únicos</h4>
                    <p>Tu niña tendrá un vestido que nadie más tiene</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair font-bold text-lg mb-2">Atención personal</h4>
                    <p>Te acompaño en todo el proceso</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10 text-center">
              <p className="text-xl leading-relaxed font-playfair italic">
                Mi mayor alegría es saber que ayudo a crear momentos especiales e inolvidables para las familias.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <Button
            size="lg"
            className="text-xl px-12 py-6 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
            onClick={() => openWhatsApp("Hola Corinthia, me gustaría conocer más sobre tu trabajo y tus vestidos.")}
          >
            <Heart className="w-6 h-6 mr-3" />
            Contactar a Corinthia
          </Button>
        </div>
      </div>
    </div>
  )

  const renderTestimonials = () => (
    <div className="py-20 px-4 min-h-screen gradient-pale-pink">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Lo que dicen las mamás</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">Testimonios reales de nuestras clientas felices</p>
        </div>

        <div className="relative">
          <Card className="bg-white/90 backdrop-blur-sm shadow-elegant rounded-3xl border-0">
            <CardContent className="p-12">
              <div className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-8">
                  <Image
                    src={testimonials[currentTestimonial].image || "/placeholder.svg"}
                    alt={testimonials[currentTestimonial].name}
                    fill
                    className="object-cover rounded-full border-4 border-white shadow-soft"
                  />
                </div>
                <p className="font-playfair text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="font-playfair font-bold text-xl text-gray-800 mb-4">
                  - {testimonials[currentTestimonial].name}
                </p>
                <div className="flex justify-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Elegant Navigation */}
          <div className="flex justify-center gap-6 mt-12">
            <Button
              variant="outline"
              size="lg"
              onClick={prevTestimonial}
              className="px-8 py-4 rounded-full border-2 border-gray-300 hover:border-pink-400 hover:text-pink-600 transition-all duration-300"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Anterior
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={nextTestimonial}
              className="px-8 py-4 rounded-full border-2 border-gray-300 hover:border-pink-400 hover:text-pink-600 transition-all duration-300"
            >
              Siguiente
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0 max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">
                ¿Quieres que tu niña también se sienta especial?
              </h3>
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => openWhatsApp()}
              >
                <Phone className="w-6 h-6 mr-3" />
                Contactar Ahora
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderFAQ = () => (
    <div className="py-20 px-4 min-h-screen bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Preguntas Frecuentes</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">Todo lo que necesitas saber</p>
        </div>

        <div className="space-y-8">
          {/* Each FAQ as an elegant card */}
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">¿Cómo hago un pedido?</h3>
                  <div className="text-lg text-gray-700 space-y-3">
                    <p>Es muy fácil:</p>
                    <div className="space-y-2 ml-4">
                      <p>• Contáctanos por WhatsApp</p>
                      <p>• Nos dices qué vestido te gusta</p>
                      <p>• Nos das la talla de tu niña</p>
                      <p>• Te damos el precio y comenzamos</p>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-2xl mt-4">
                      <p className="font-semibold text-amber-800">
                        ⚠️ Importante: Necesitamos 2 semanas mínimo para hacer el vestido
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">¿Qué tallas tienen?</h3>
                  <div className="text-lg text-gray-700">
                    <p className="mb-4">Trabajamos con 3 tallas principales:</p>
                    <div className="bg-white p-6 rounded-2xl shadow-soft">
                      <div className="space-y-3">
                        <p>
                          <strong>Talla 2:</strong> Para niñas de 1-2 años
                        </p>
                        <p>
                          <strong>Talla 4:</strong> Para niñas de 3-4 años
                        </p>
                        <p>
                          <strong>Talla 6:</strong> Para niñas de 5-6 años
                        </p>
                      </div>
                    </div>
                    <p className="mt-4">
                      Si tu niña está entre tallas, no te preocupes. Podemos ajustar el vestido perfectamente.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">¿Cuánto cuesta un vestido?</h3>
                  <div className="text-lg text-gray-700">
                    <p>El precio depende del modelo y los detalles que quieras. Cada vestido es único.</p>
                    <p className="mt-2 font-semibold">Te damos el precio exacto cuando nos contactes por WhatsApp.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">¿Cómo pago?</h3>
                  <div className="text-lg text-gray-700 space-y-2">
                    <p>Es muy sencillo:</p>
                    <p>• Pagas el 20% para comenzar el vestido</p>
                    <p>• Pagas el resto cuando esté listo</p>
                    <p>• Aceptamos transferencia bancaria</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-lg">5</span>
                </div>
                <div>
                  <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-4">¿Envían a toda la República?</h3>
                  <div className="text-lg text-gray-700">
                    <p>¡Sí! Enviamos a todo México.</p>    CCAMBIAR ETSO
                    <p>También puedes recoger tu vestido en persona si vives cerca.</p>
                    <p className="mt-2 font-semibold">El costo de envío se calcula según tu ubicación.</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Card className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-3xl shadow-elegant border-0 max-w-3xl mx-auto">
            <CardContent className="p-12">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-soft">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-4">¿Tienes más preguntas?</h3>
              <p className="text-lg text-gray-600 mb-8">Contáctanos por WhatsApp y te ayudamos con todo</p>
              <Button
                size="lg"
                className="text-xl px-12 py-6 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-elegant transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => openWhatsApp()}
              >
                <Phone className="w-6 h-6 mr-3" />
                Preguntar por WhatsApp
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderContact = () => (
    <div className="py-20 px-4 min-h-screen gradient-pink">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-5xl font-bold text-gray-800 mb-6">Contáctanos</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-black mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-600">Estamos aquí para ayudarte a crear el vestido perfecto</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods - Very Elegant */}
          <div className="space-y-8">
            <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8">Formas de Contacto</h3>

            {/* WhatsApp - Most Prominent */}
            <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-4 border-pink-200 rounded-3xl shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center shadow-soft">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-playfair text-2xl font-bold text-gray-800">WhatsApp (Recomendado)</h4>
                    <p className="text-pink-600 font-semibold text-lg">+52 653 538 9027</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 text-lg">
                  La forma más rápida de contactarnos. Te respondemos en minutos.
                </p>
                <Button
                  className="w-full bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white text-lg py-4 rounded-full shadow-soft transform hover:scale-105 transition-all duration-300 border-0"
                  onClick={() => openWhatsApp()}
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Abrir WhatsApp
                </Button>
              </CardContent>
            </Card>

            {/* Other Contact Methods */}
            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
              <CardContent className="p-8">
                <h4 className="font-playfair text-xl font-bold text-gray-800 mb-6">Otros medios</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Email</p>
                      <p className="text-gray-600">corinthiadesigns2023@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <Facebook className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Facebook</p>
                      <p className="text-gray-600">@CorinthiaPetite</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Instagram</p>
                      <p className="text-gray-600">@Corinthia_Petite</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
              <CardContent className="p-8">
                <h4 className="font-playfair text-xl font-bold text-gray-800 mb-6">Horarios de Atención</h4>
                <div className="space-y-3 text-gray-700 text-lg">
                  <p>
                    <strong>Lunes a Viernes:</strong> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <strong>Sábados:</strong> 10:00 AM - 4:00 PM
                  </p>
                  <p>
                    <strong>Domingos:</strong> Solo citas especiales
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Elegant Contact Form */}
          <Card className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-elegant border-0">
            <CardContent className="p-10">
              <h3 className="font-playfair text-3xl font-bold text-gray-800 mb-8">Envíanos un Mensaje</h3>
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-lg font-semibold text-gray-700">
                    Tu nombre completo
                  </Label>
                  <Input
                    id="name"
                    placeholder="Escribe tu nombre"
                    className="text-lg p-4 rounded-2xl border-2 border-gray-200 focus:border-pink-400 transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-lg font-semibold text-gray-700">
                    Tu teléfono
                  </Label>
                  <Input
                    id="phone"
                    placeholder="Tu número de teléfono"
                    className="text-lg p-4 rounded-2xl border-2 border-gray-200 focus:border-pink-400 transition-colors"
                  />
                </div>

                <div>
                  <Label htmlFor="message" className="text-lg font-semibold text-gray-700">
                    Tu mensaje
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos qué vestido te interesa, para qué ocasión es, la edad de tu niña, etc."
                    rows={5}
                    className="text-lg p-4 rounded-2xl border-2 border-gray-200 focus:border-pink-400 transition-colors"
                  />
                </div>

                <Button className="w-full text-lg py-4 bg-gradient-to-r from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700 text-white rounded-full shadow-soft transform hover:scale-105 transition-all duration-300 border-0">
                  <Heart className="w-6 h-6 mr-3" />
                  Enviar Mensaje
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderCurrentSection = () => {
    switch (currentSection) {
      case "home":
        return renderHome()
      case "catalog":
        return renderCatalog()
      case "product":
        return renderProduct()
      case "about":
        return renderAbout()
      case "testimonials":
        return renderTestimonials()
      case "faq":
        return renderFAQ()
      case "contact":
        return renderContact()
      default:
        return renderHome()
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Elegant Navigation */}
      <nav className="bg-white/95 backdrop-blur-sm shadow-soft border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            <button
              onClick={() => setCurrentSection("home")}
              className="font-cormorant text-4xl font-bold text-transparent bg-gradient-to-r from-pink-500 to-black bg-clip-text"
            >
              Corinthia Petite
            </button>

            {/* Elegant Menu */}
            <div className="hidden lg:flex space-x-2">
              {[
                { id: "home", label: "Inicio" },
                { id: "catalog", label: "Ver Vestidos" },
                { id: "about", label: "Sobre Corinthia" },
                { id: "testimonials", label: "Testimonios" },
                { id: "faq", label: "Preguntas" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`text-lg font-medium px-6 py-3 rounded-full transition-all duration-300 ${
                    currentSection === item.id
                      ? "bg-gradient-to-r from-pink-100 to-pink-200 text-pink-700 shadow-soft"
                      : "text-gray-600 hover:text-pink-600 hover:bg-pink-50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <Button
                className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white text-lg px-8 py-3 rounded-full shadow-soft transform hover:scale-105 transition-all duration-300 border-0"
                onClick={() => openWhatsApp()}
              >
                <Phone className="w-5 h-5 mr-2" />
                WhatsApp
              </Button>
            </div>

            {/* Mobile - Just WhatsApp Button */}
            <div className="lg:hidden">
              <Button
                className="bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white rounded-full shadow-soft border-0"
                onClick={() => openWhatsApp()}
              >
                <Phone className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu - Elegant */}
          <div className="lg:hidden pb-6">
            <div className="flex flex-wrap gap-3 justify-center">
              {[
                { id: "home", label: "Inicio" },
                { id: "catalog", label: "Vestidos" },
                { id: "about", label: "Sobre Corinthia" },
                { id: "testimonials", label: "Testimonios" },
                { id: "faq", label: "Preguntas" },
                { id: "contact", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentSection(item.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    currentSection === item.id
                      ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-soft"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>{renderCurrentSection()}</main>

      {/* Elegant Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="font-cormorant text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text">
            Corinthia Petite
          </h3>
          <p className="font-playfair text-xl text-gray-300 mb-8 italic">Vestidos únicos hechos con amor</p>

          <div className="flex justify-center space-x-6 mb-12">
            <Button
              variant="ghost"
              size="lg"
              onClick={() => openWhatsApp()}
              className="text-white hover:text-pink-400 rounded-full p-4 hover:bg-pink-500/20 transition-all duration-300"
            >
              <Phone className="w-6 h-6 mr-2" />
              WhatsApp
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://www.facebook.com/profile.php?id=61572425394616", "_blank")}
              className="text-white hover:text-pink-400 rounded-full p-4 hover:bg-pink-500/20 transition-all duration-300"
            >
              <Facebook className="w-6 h-6 mr-2" />
              Facebook
            </Button>
            <Button
              variant="ghost"
              size="lg"
              onClick={() => window.open("https://www.instagram.com/corinthia_petite/", "_blank")}
              className="text-white hover:text-pink-400 rounded-full p-4 hover:bg-pink-500/20 transition-all duration-300"
            >
              <Instagram className="w-6 h-6 mr-2" />
              Instagram
            </Button>
          </div>

          <div className="text-gray-400 space-y-3 text-lg">
            <p>WhatsApp: +52 653 538 9027</p>
            <p>Email: corinthiadesigns2023@gmail.com</p>
            <p className="mt-6">&copy; 2024 Corinthia Petite. Todos los derechos reservados.</p>
            <p className="font-playfair italic">Diseño por Samantha Quintero @samaneli00</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
