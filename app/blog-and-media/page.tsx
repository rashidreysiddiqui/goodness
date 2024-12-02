import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const blogPosts = [
  {
    title: 'Empowering Rural Communities Through Education',
    excerpt:
      'Learn how our education initiatives are transforming lives in rural areas.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'May 15, 2023',
    author: 'Jane Doe',
  },
  {
    title: 'Clean Water Project: A Year in Review',
    excerpt:
      'Discover the impact of our clean water initiatives over the past year.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'April 22, 2023',
    author: 'John Smith',
  },
  {
    title: 'Sustainable Agriculture: Feeding the Future',
    excerpt:
      "Explore how we're promoting sustainable farming practices to ensure food security.",
    image: '/placeholder.svg?height=200&width=300',
    date: 'March 10, 2023',
    author: 'Emily Brown',
  },
  {
    title: "Women's Empowerment: Breaking Barriers",
    excerpt:
      'Read about our programs supporting women entrepreneurs in developing countries.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'February 8, 2023',
    author: 'Sarah Johnson',
  },
  {
    title: 'Youth Leadership Summit: Inspiring Change',
    excerpt:
      'Highlights from our annual youth leadership summit and its impact on participants.',
    image: '/placeholder.svg?height=200&width=300',
    date: 'January 25, 2023',
    author: 'Michael Lee',
  },
  {
    title: 'Technology for Good: Bridging the Digital Divide',
    excerpt:
      "How we're using technology to improve access to education and healthcare in remote areas.",
    image: '/placeholder.svg?height=200&width=300',
    date: 'December 12, 2022',
    author: 'David Chen',
  },
];

export default function BlogAndMedia() {
  return (
    <div className='bg-white'>
      <section className='bg-[#001F54] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Blog and Media
          </h1>
          <p className='text-xl max-w-3xl mx-auto'>
            Stay updated with our latest news, stories, and insights from the
            field.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-md'
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  width={300}
                  height={200}
                  className='w-full'
                />
                <div className='p-6'>
                  <h2 className='text-xl font-semibold mb-2'>{post.title}</h2>
                  <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                  <div className='flex justify-between items-center text-sm text-gray-500 mb-4'>
                    <span>{post.date}</span>
                    <span>By {post.author}</span>
                  </div>
                  <Link
                    href={`/blog/${post.title
                      .toLowerCase()
                      .replace(/ /g, '-')}`}
                    passHref
                  >
                    <Button variant='outline' className='w-full'>
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            Featured Media
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
              <Image
                src='/placeholder.svg?height=300&width=600'
                alt='Video Thumbnail'
                width={600}
                height={300}
                className='w-full'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>
                  Our Impact: A Video Journey
                </h3>
                <p className='text-gray-600 mb-4'>
                  Watch our latest video showcasing the impact of our programs
                  across the globe.
                </p>
                <Button className='w-full bg-[#32CD32] hover:bg-[#28A228]'>
                  Watch Video
                </Button>
              </div>
            </div>
            <div className='bg-white rounded-lg overflow-hidden shadow-md'>
              <Image
                src='/placeholder.svg?height=300&width=600'
                alt='Podcast Thumbnail'
                width={600}
                height={300}
                className='w-full'
              />
              <div className='p-6'>
                <h3 className='text-xl font-semibold mb-2'>
                  NGO Insights Podcast
                </h3>
                <p className='text-gray-600 mb-4'>
                  Listen to our weekly podcast featuring interviews with
                  changemakers and thought leaders.
                </p>
                <Button className='w-full bg-[#32CD32] hover:bg-[#28A228]'>
                  Listen Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Stay Connected</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Subscribe to our newsletter to receive the latest updates, stories,
            and opportunities to get involved.
          </p>
          <form className='max-w-md mx-auto flex'>
            <Input
              type='email'
              placeholder='Enter your email'
              className='flex-grow'
            />
            <Button
              type='submit'
              className='ml-2 bg-[#32CD32] hover:bg-[#28A228]'
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}
