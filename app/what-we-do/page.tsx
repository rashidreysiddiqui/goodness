import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function WhatWeDo() {
  return (
    <div className='bg-white'>
      <section className='bg-[#001F54] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Transforming Lives, One Step at a Time
          </h1>
          <p className='text-xl max-w-3xl mx-auto mb-8'>
            We&apos;re committed to creating sustainable solutions that empower
            communities and individuals to thrive.
          </p>
          <div className='flex justify-center space-x-4'>
            <Button size='lg' className='bg-[#32CD32] hover:bg-[#28A228]'>
              Learn More
            </Button>
            <Button
              size='lg'
              variant='outline'
              className='text-white border-white hover:bg-white hover:text-[#001F54]'
            >
              Join Us
            </Button>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Our Focus Areas
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Education',
                description: 'Empowering youth through quality education',
                icon: '📚',
              },
              {
                title: 'Healthcare',
                description: 'Affordable healthcare solutions for all',
                icon: '🏥',
              },
              {
                title: 'Clean Water',
                description: 'Providing access to safe, clean water',
                icon: '💧',
              },
              {
                title: 'Sustainable Agriculture',
                description: 'Promoting food security and sustainable farming',
                icon: '🌾',
              },
              {
                title: "Women's Empowerment",
                description: "Supporting women's rights and opportunities",
                icon: '👩‍🦰',
              },
              {
                title: 'Environmental Conservation',
                description: 'Protecting our planet for future generations',
                icon: '🌍',
              },
            ].map((area, index) => (
              <div
                key={index}
                className='bg-[#E0F7FA] p-6 rounded-lg shadow-md'
              >
                <div className='text-4xl mb-4'>{area.icon}</div>
                <h3 className='text-xl font-semibold mb-2'>{area.title}</h3>
                <p className='text-gray-600'>{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Our Impact</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              { stat: '10,000+', description: 'Students educated' },
              { stat: '5M+', description: 'Lives impacted' },
              { stat: '100+', description: 'Communities transformed' },
            ].map((impact, index) => (
              <div key={index} className='text-center'>
                <div className='text-4xl font-bold text-[#001F54] mb-2'>
                  {impact.stat}
                </div>
                <p className='text-xl'>{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>How We Work</h2>
          <div className='flex flex-col items-center'>
            {[
              {
                step: 'Community Assessment',
                description:
                  'We start by understanding the unique needs and challenges of each community.',
              },
              {
                step: 'Collaborative Planning',
                description:
                  'We work with local leaders and experts to develop tailored solutions.',
              },
              {
                step: 'Implementation',
                description:
                  'We execute projects with a focus on sustainability and community involvement.',
              },
              {
                step: 'Monitoring and Evaluation',
                description:
                  'We continuously assess our impact and make improvements as needed.',
              },
              {
                step: 'Scaling Success',
                description:
                  'We replicate successful models in other communities, adapting to local contexts.',
              },
            ].map((step, index) => (
              <div key={index} className='flex items-start mb-8 last:mb-0'>
                <div className='bg-[#001F54] text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0'>
                  {index + 1}
                </div>
                <div>
                  <h3 className='text-xl font-semibold mb-2'>{step.step}</h3>
                  <p className='text-gray-600'>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>
            Success Stories
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Empowering Girls Through Education',
                image: '/placeholder.svg?height=300&width=400',
                quote:
                  'The new school has given me hope for a brighter future.',
              },
              {
                title: 'Clean Water for Rural Communities',
                image: '/placeholder.svg?height=300&width=400',
                quote: 'Access to clean water has transformed our daily lives.',
              },
              {
                title: 'Sustainable Farming Techniques',
                image: '/placeholder.svg?height=300&width=400',
                quote:
                  'Our crop yields have doubled since implementing these new methods.',
              },
            ].map((story, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-md'
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={400}
                  height={300}
                  className='w-full'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>{story.title}</h3>
                  <p className='text-gray-600 mb-4'>"{story.quote}"</p>
                  <Button
                    variant='link'
                    className='text-[#001F54] hover:text-[#32CD32]'
                  >
                    Read Full Story <ArrowRight className='ml-2 h-4 w-4' />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-[#001F54] text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>
            Ready to Make a Difference?
          </h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            Join us in our mission to create lasting change and empower
            communities around the world.
          </p>
          <Button size='lg' className='bg-[#32CD32] hover:bg-[#28A228]'>
            Get Involved Now
          </Button>
        </div>
      </section>
    </div>
  );
}
