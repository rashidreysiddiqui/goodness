import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "Empowering Rural Communities with Education",
    description: "Read how our initiatives are bringing quality education to underserved areas.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/blog/empowering-rural-communities",
  },
  {
    title: "Clean Water Initiative: A Year in Review",
    description: "Discover the impact of our clean water projects over the past year.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/blog/clean-water-initiative",
  },
  {
    title: "Volunteer Spotlight: Meet Our Heroes",
    description: "Get to know the dedicated volunteers who make our work possible.",
    image: "/placeholder.svg?height=200&width=300",
    link: "/blog/volunteer-spotlight",
  },
]

export default function MediaAndBlog() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Latest News & Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
              <Image src={post.image} alt={post.title} width={300} height={200} className="w-full" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link href={post.link} className="text-[#001F54] hover:underline">
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

