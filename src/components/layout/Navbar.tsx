'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#FBF9F5]/90 backdrop-blur-md border-b border-stone-200/80 text-stone-900 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-22">
          <Link href="/" className="flex items-center gap-3.5 group">
            <div className="w-10 h-10 rounded-full border border-amber-700/30 bg-[#F4EFEA] flex items-center justify-center font-serif text-amber-900 text-lg shadow-sm group-hover:border-amber-800 transition-colors">
              B
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-tight text-stone-900 font-medium">
                AL-BURAQ<span className="text-amber-700 font-serif">.</span>
              </span>
              <span className="text-[9px] uppercase tracking-[0.25em] text-stone-500 font-sans font-semibold">
                Maison de Voyages
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-9 text-xs uppercase tracking-[0.15em] font-medium text-stone-600">
            <Link href="/" className="text-amber-900 font-semibold border-b border-amber-900 pb-0.5">
              Accueil
            </Link>
            <Link href="#destinations" className="hover:text-amber-900 transition-colors">
              Destinations
            </Link>
            <Link href="#engagements" className="hover:text-amber-900 transition-colors">
              L&apos;Excellence
            </Link>
            <Link href="#formules" className="hover:text-amber-900 transition-colors">
              Formules & Tarifs
            </Link>
            <Link href="#contact" className="hover:text-amber-900 transition-colors">
              Contact
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <div className="text-right">
              <span className="block text-[10px] uppercase tracking-widest text-stone-400 font-mono">
                Assistance VIP
              </span>
              <span className="text-xs font-serif text-stone-800 font-medium">
                +33 (0)1 48 00 22 10
              </span>
            </div>
            <a
              href="#reserver"
              className="px-6 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-[#FBF9F5] font-serif text-sm tracking-wide transition-all shadow-sm active:scale-95 border border-stone-800"
            >
              Concevoir un séjour
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-stone-800 hover:text-stone-950"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-6 border-t border-stone-200 space-y-4 bg-[#FBF9F5]">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-amber-900 font-serif text-lg py-1"
            >
              Accueil
            </Link>
            <Link
              href="#destinations"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700 hover:text-stone-950 font-serif text-lg py-1"
            >
              Destinations
            </Link>
            <Link
              href="#engagements"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700 hover:text-stone-950 font-serif text-lg py-1"
            >
              L&apos;Excellence
            </Link>
            <Link
              href="#formules"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700 hover:text-stone-950 font-serif text-lg py-1"
            >
              Formules & Tarifs
            </Link>
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-stone-700 hover:text-stone-950 font-serif text-lg py-1"
            >
              Contact
            </Link>
            <a
              href="#reserver"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center mt-4 py-3 rounded-full bg-stone-900 text-[#FBF9F5] font-serif text-sm tracking-wide"
            >
              Concevoir un séjour
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
