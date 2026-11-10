import React from 'react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer id="contact" className="bg-[#1C1917] text-stone-400 border-t border-stone-800 pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-stone-800/80">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full border border-amber-500/30 bg-stone-900 flex items-center justify-center font-serif text-amber-200 text-lg">
                B
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl tracking-tight text-[#FBF9F5] leading-none">
                  AL-BURAQ<span className="text-amber-500">.</span>
                </span>
                <span className="text-[9px] uppercase font-mono tracking-[0.25em] text-amber-200/60">
                  Maison de Voyages
                </span>
              </div>
            </Link>
            <p className="text-xs text-stone-400 leading-relaxed font-sans">
              Maison d&apos;artisanat de voyages d&apos;exception : pèlerinages de sérénité, circuits culturels et séjours privés en Orient et Méditerranée.
            </p>
            <div className="text-[11px] text-amber-200/80 font-mono tracking-wider pt-2">
              Immatriculation Atout France & Garantie Financière APST.
            </div>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-stone-200 mb-5">
              Destinations Rares
            </h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="#destinations" className="hover:text-amber-200 transition-colors">Médine & La Mecque 5★</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-200 transition-colors">Istanbul & Palais du Bosphore</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-200 transition-colors">Trésors d&apos;Andalousie</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-200 transition-colors">Oasis & Dunes de Dubaï</Link></li>
              <li><Link href="#destinations" className="hover:text-amber-200 transition-colors">Retraites de Santorin</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-stone-200 mb-5">
              La Maison
            </h4>
            <ul className="space-y-3 text-xs">
              <li><Link href="#engagements" className="hover:text-amber-200 transition-colors">La Charte d&apos;Excellence</Link></li>
              <li><Link href="#formules" className="hover:text-amber-200 transition-colors">Formules & Privilèges</Link></li>
              <li><Link href="#reserver" className="hover:text-amber-200 transition-colors">Rendez-vous Conseil Privé</Link></li>
              <li><Link href="#contact" className="hover:text-amber-200 transition-colors">Permanence Conciergerie 7j/7</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-mono font-medium uppercase tracking-[0.2em] text-stone-200 mb-5">
              La Gazette Voyageur
            </h4>
            <p className="text-xs text-stone-400 mb-4 leading-relaxed font-sans">
              Recevez nos ouvertures de départs privilégiés et nos récits de voyage chaque mois.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="votre@email.fr"
                className="bg-stone-900 border border-stone-800 rounded-lg px-3 py-2 text-xs text-stone-100 placeholder-stone-500 focus:outline-none focus:border-amber-600 flex-1 font-sans"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-amber-900 hover:bg-amber-800 text-[#FBF9F5] font-serif text-xs rounded-lg transition-colors"
              >
                Rejoindre
              </button>
            </form>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-500 font-mono">
          <div>
            © 2026 Al-Buraq Voyages. Tous droits réservés.
          </div>
          <div className="flex gap-6">
            <span className="hover:text-stone-300 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-stone-300 cursor-pointer">Confidentialité</span>
            <span className="hover:text-stone-300 cursor-pointer">Conditions Générales</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
