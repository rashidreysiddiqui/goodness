import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-[#001F54] text-white py-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-[#32CD32] transition-colors">Home</Link></li>
            <li><Link href="/contact" className="hover:text-[#32CD32] transition-colors">Contact</Link></li>
            <li><Link href="/what-we-do" className="hover:text-[#32CD32] transition-colors">What We Do</Link></li>
            <li><Link href="/who-we-are" className="hover:text-[#32CD32] transition-colors">Who We Are</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <p>123 NGO Street, City, Country</p>
          <p>Email: info@ngo.org</p>
          <p>Phone: +1 234 567 8900</p>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#32CD32] transition-colors">Facebook</a>
            <a href="#" className="hover:text-[#32CD32] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#32CD32] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#32CD32] transition-colors">LinkedIn</a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <form className="flex flex-col space-y-2">
            <Input type="email" placeholder="Your email" className="bg-white text-black" />
            <Button type="submit" className="bg-[#32CD32] hover:bg-[#28A228] text-white">Subscribe</Button>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 text-center">
        <p>&copy; {new Date().getFullYear()} NGO Name. All rights reserved.</p>
      </div>
    </footer>
  )
}

