import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <div className='bg-white'>
      <section className='bg-[#001F54] text-white py-20'>
        <div className='container mx-auto px-4 text-center'>
          <h1 className='text-4xl md:text-5xl font-bold mb-6'>Get in Touch</h1>
          <p className='text-xl max-w-3xl mx-auto'>
            We&apos;d love to hear from you. Reach out to us for any questions,
            partnerships, or ways to get involved.
          </p>
        </div>
      </section>

      <section className='py-16'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold mb-6'>Contact Information</h2>
              <div className='space-y-4'>
                <div className='flex items-start'>
                  <MapPin className='w-6 h-6 mr-4 text-[#001F54]' />
                  <div>
                    <h3 className='font-semibold'>Address</h3>
                    <p>123 NGO Street, Cityville, State 12345, Country</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Phone className='w-6 h-6 mr-4 text-[#001F54]' />
                  <div>
                    <h3 className='font-semibold'>Phone</h3>
                    <p>+1 (123) 456-7890</p>
                  </div>
                </div>
                <div className='flex items-start'>
                  <Mail className='w-6 h-6 mr-4 text-[#001F54]' />
                  <div>
                    <h3 className='font-semibold'>Email</h3>
                    <p>info@ngoname.org</p>
                  </div>
                </div>
              </div>
              <div className='mt-8'>
                <h3 className='text-xl font-semibold mb-4'>Office Hours</h3>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday - Sunday: Closed</p>
              </div>
            </div>
            <div>
              <h2 className='text-3xl font-bold mb-6'>Send Us a Message</h2>
              <form className='space-y-4'>
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Full Name
                  </label>
                  <Input id='name' name='name' required />
                </div>
                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Email Address
                  </label>
                  <Input id='email' name='email' type='email' required />
                </div>
                <div>
                  <label
                    htmlFor='subject'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Subject
                  </label>
                  <Input id='subject' name='subject' required />
                </div>
                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-medium text-gray-700 mb-1'
                  >
                    Message
                  </label>
                  <Textarea id='message' name='message' rows={4} required />
                </div>
                <Button
                  type='submit'
                  className='w-full bg-[#32CD32] hover:bg-[#28A228]'
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h2 className='text-3xl font-bold mb-8 text-center'>Our Locations</h2>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {[
              { city: 'New York', address: '123 Broadway, New York, NY 10001' },
              { city: 'London', address: '456 Oxford Street, London, W1C 1AP' },
              { city: 'Tokyo', address: '789 Shibuya, Tokyo 150-0002' },
            ].map((location, index) => (
              <div key={index} className='bg-white p-6 rounded-lg shadow-md'>
                <h3 className='text-xl font-semibold mb-2'>{location.city}</h3>
                <p>{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
