import { Users, School, Heart } from 'lucide-react'

const facts = [
  { icon: Users, title: "Lives Impacted", value: "5M+" },
  { icon: School, title: "Students Educated", value: "10,000+" },
  { icon: Heart, title: "Communities Transformed", value: "100+" },
]

export default function FactsAndFigures() {
  return (
    <section className="py-16 bg-[#E0F7FA]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {facts.map((fact, index) => (
            <div key={index} className="text-center">
              <fact.icon className="w-16 h-16 mx-auto mb-4 text-[#001F54]" />
              <h3 className="text-2xl font-bold mb-2">{fact.value}</h3>
              <p className="text-gray-600">{fact.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

