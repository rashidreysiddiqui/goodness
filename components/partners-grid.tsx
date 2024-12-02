import Image from "next/image"

const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 2", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 3", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 4", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 5", logo: "/placeholder.svg?height=100&width=200" },
  { name: "Partner 6", logo: "/placeholder.svg?height=100&width=200" },
]

export default function PartnersGrid() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={100}
                className="transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

