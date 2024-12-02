import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#001F54] text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          NGO Name
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/" className="hover:text-[#32CD32] transition-colors">Home</Link></li>
          <li><Link href="/contact" className="hover:text-[#32CD32] transition-colors">Contact</Link></li>
          <li><Link href="/what-we-do" className="hover:text-[#32CD32] transition-colors">What We Do</Link></li>
          <li><Link href="/who-we-are" className="hover:text-[#32CD32] transition-colors">Who We Are</Link></li>
        </ul>
      </div>
    </nav>
  )
}

