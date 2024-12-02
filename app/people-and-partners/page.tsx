import Image from 'next/image';

export default function PeopleAndPartners() {
  return (
    <div className='bg-white'>
      <section className='bg-[#001F54] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>
            Meet Our Team and Partners
          </h1>
          <p className='text-xl max-w-3xl mx-auto'>
            Together, we're working to create lasting positive change in
            communities around the world.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Our Team</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              {
                name: 'Jane Doe',
                role: 'Executive Director',
                image: '/placeholder.svg?height=300&width=300',
              },
              {
                name: 'John Smith',
                role: 'Operations Manager',
                image: '/placeholder.svg?height=300&width=300',
              },
              {
                name: 'Emily Brown',
                role: 'Program Coordinator',
                image: '/placeholder.svg?height=300&width=300',
              },
              {
                name: 'Michael Lee',
                role: 'Fundraising Specialist',
                image: '/placeholder.svg?height=300&width=300',
              },
              {
                name: 'Sarah Johnson',
                role: 'Community Outreach Manager',
                image: '/placeholder.svg?height=300&width=300',
              },
              {
                name: 'David Chen',
                role: 'Project Manager',
                image: '/placeholder.svg?height=300&width=300',
              },
            ].map((member, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-md text-center'
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={300}
                  height={300}
                  className='w-full'
                />
                <div className='p-6'>
                  <h3 className='text-xl font-semibold mb-2'>{member.name}</h3>
                  <p className='text-gray-600'>{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-12 text-center'>Our Partners</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            {[
              {
                name: 'Global Health Initiative',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Education for All Foundation',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Clean Water Alliance',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Sustainable Future Network',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Community Empowerment Group',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Tech for Good',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Green Earth Association',
                logo: '/placeholder.svg?height=150&width=250',
              },
              {
                name: 'Youth Leadership Council',
                logo: '/placeholder.svg?height=150&width=250',
              },
            ].map((partner, index) => (
              <div
                key={index}
                className='bg-white rounded-lg overflow-hidden shadow-md p-6 flex items-center justify-center'
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={250}
                  height={150}
                  className='max-w-full h-auto'
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>Join Our Network</h2>
          <p className='text-xl mb-8 max-w-2xl mx-auto'>
            We&apos;re always looking for passionate individuals and
            organizations to join our mission. If you&apos;re interested in
            partnering with us, get in touch today!
          </p>
          <button className='bg-[#32CD32] hover:bg-[#28A228] text-white font-bold py-2 px-4 rounded'>
            Contact Us
          </button>
        </div>
      </section>
    </div>
  );
}
