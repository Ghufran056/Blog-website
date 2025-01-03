import Link from "next/link";

export default function AlertBanner() {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur flex items-center justify-between px-4 h-10 shadow-md"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
       
        <Link href={"/"}><h1 className="text-lg font-bold">BLOGSITE</h1></Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-6 text-sm font-medium">
        <Link href="/" className="hover:text-blue-500">Home</Link>
        <Link href="/About" className="hover:text-blue-500">About</Link>
        <Link href="/Contact" className="hover:text-blue-500">Contact</Link>
      </nav>
    </div>
  );
}