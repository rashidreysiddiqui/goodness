import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function WhoWeAre() {
  return (
    <div className='bg-white'>
      <section className='bg-[#001F54] text-white py-20'>
        <div className='container mx-auto px-4'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6 text-center'>
            We Innovate, Collaborate, and Transform Communities
          </h1>
          <p className='text-xl text-center max-w-3xl mx-auto'>
            Our approach combines innovative solutions with community
            collaboration to create lasting positive change.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>
            The Problem We re Addressing
          </h2>
          <div className='flex flex-col md:flex-row items-center gap-8'>
            <div className='md:w-1/2'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Problem visualization'
                width={600}
                height={400}
                className='rounded-lg shadow-md'
              />
            </div>
            <div className='md:w-1/2'>
              <p className='text-lg mb-4'>
                Millions of people worldwide lack access to basic necessities
                such as clean water, quality education, and healthcare. This
                perpetuates a cycle of poverty and limits opportunities for
                individuals and communities to thrive.
              </p>
              <p className='text-lg'>
                We believe that by addressing these fundamental issues, we can
                create a ripple effect of positive change that transforms entire
                communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Our Idea</h2>
          <div className='flex flex-col md:flex-row-reverse items-center gap-8'>
            <div className='md:w-1/2'>
              <Image
                src='/placeholder.svg?height=400&width=600'
                alt='Our idea visualization'
                width={600}
                height={400}
                className='rounded-lg shadow-md'
              />
            </div>
            <div className='md:w-1/2'>
              <p className='text-lg mb-4'>
                We envision a world where every individual has the opportunity
                to reach their full potential. Our idea is to create
                sustainable, community-driven solutions that address the root
                causes of poverty and inequality.
              </p>
              <p className='text-lg'>
                By empowering local communities with the tools, knowledge, and
                resources they need, we can create lasting change that continues
                long after our initial involvement.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>How We Do It</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {[
              {
                title: 'Assess',
                description:
                  'We work closely with communities to identify their specific needs and challenges.',
              },
              {
                title: 'Collaborate',
                description:
                  'We partner with local organizations and leaders to develop tailored solutions.',
              },
              {
                title: 'Implement',
                description:
                  'We execute projects with a focus on sustainability and long-term impact.',
              },
              {
                title: 'Educate',
                description:
                  'We provide training and education to ensure community members can maintain and build upon our initiatives.',
              },
              {
                title: 'Monitor',
                description:
                  'We continuously evaluate our projects and make adjustments as needed.',
              },
              {
                title: 'Scale',
                description:
                  'We replicate successful models in other communities, adapting to local contexts.',
              },
            ].map((step, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-4'>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Our Work</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                title: 'Clean Water Initiative',
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Providing access to clean water in rural communities',
              },
              {
                title: 'Education for All',
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Building schools and training teachers in underserved areas',
              },
              {
                title: 'Healthcare Access',
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Establishing mobile clinics and health education programs',
              },
              {
                title: 'Sustainable Agriculture',
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Teaching modern farming techniques to improve food security',
              },
              {
                title: "Women's Empowerment",
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Supporting women entrepreneurs with microloans and training',
              },
              {
                title: 'Youth Development',
                image: '/placeholder.svg?height=300&width=400',
                description:
                  'Creating opportunities for young people through skills training',
              },
            ].map((project, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-md'
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={300}
                  className='w-full'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>
                    {project.title}
                  </h3>
                  <p className='text-gray-600 mb-4'>{project.description}</p>
                  <Button variant='outline'>Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
