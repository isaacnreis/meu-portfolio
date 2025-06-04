"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#060212] text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-[#fe5412]">
          INR
        </Link>

        <nav className="hidden md:flex items-center">
          <ul className="flex gap-6">
            <li>
              <Link
                href="/"
                className={`hover:text-[#fe5412] ${
                  pathname === "/" ? "underline" : ""
                }`}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={`hover:text-[#fe5412] ${
                  pathname?.startsWith("/blog") ? "underline" : ""
                }`}
              >
                Blog
              </Link>
            </li>
            <li>
              <Link href="#contato" className="hover:text-[#fe5412]">
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#060212] px-4 pb-4">
          <Link
            href="/"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Início
          </Link>
          <Link
            href="/blog"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Blog
          </Link>
          <Link
            href="#contato"
            className="block py-2"
            onClick={() => setIsOpen(false)}
          >
            Contato
          </Link>
        </div>
      )}
    </header>
  );
}
