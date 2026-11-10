'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { BookingWidget } from '@/components/booking/BookingWidget';
import { DestinationCard } from '@/components/destination/DestinationCard';
import { PricingCard } from '@/components/pricing/PricingCard';
import { DESTINATIONS, PRICING_PLANS, TESTIMONIALS } from '@/lib/data/travel-data';
import { Destination, PricingPlan } from '@/types/travel';
import { ShieldCheck, Compass, HeartHandshake, Quote } from 'lucide-react';

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [, setSelectedDestination] = useState<Destination | null>(null);

  const filteredDestinations = selectedCategory === 'all'
    ? DESTINATIONS
    : DESTINATIONS.filter((d) => d.category === selectedCategory);

  const handleSelectDestination = (dest: Destination) => {
    setSelectedDestination(dest);
    const element = document.getElementById('reserver');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleChoosePlan = (plan: PricingPlan) => {
    alert(`Votre sélection : ${plan.name} (${plan.price} €)`);
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-stone-900 flex flex-col font-sans">
      <Navbar />

      {/* Editorial Hero Section */}
      <section className="relative pt-12 pb-24 px-4 sm:px-6 lg:px-8 border-b border-[#EADBCE]/70 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-stone-300 bg-white/80 text-amber-900 text-[10px] uppercase font-mono tracking-[0.2em] shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-800" />
              Maison de Voyages d&apos;Exception & Pèlerinages
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal text-stone-950 leading-[1.08] tracking-tight">
              L&apos;art de voyager en <span className="italic font-normal text-amber-900 font-serif">toute sérénité.</span>
            </h1>

            <p className="text-base sm:text-lg text-stone-600 max-w-xl leading-relaxed font-sans">
              Séjours spirituels vers les lieux saints, traversées culturelles d&apos;Orient et échappées privées. Nous concevons chaque voyage comme une œuvre d&apos;artisanat.
            </p>

            <div className="pt-2 flex flex-wrap gap-7 items-center text-xs text-stone-700 font-medium">
              <div className="flex items-center gap-2">
                <Compass className="w-4 h-4 text-amber-800" />
                <span>Itinéraires Privatisés</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-amber-800" />
                <span>Garantie Atout France & APST</span>
              </div>
              <div className="flex items-center gap-2">
                <HeartHandshake className="w-4 h-4 text-amber-800" />
                <span>Accompagnateur Francophone Dédié</span>
              </div>
            </div>
          </div>

          <div id="reserver" className="lg:col-span-5 flex justify-center">
            <BookingWidget />
          </div>
        </div>
      </section>

      {/* Destinations - Asymmetric Layout */}
      <section id="destinations" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-800 block mb-2 font-semibold">
              I. Nos Escapades Rares
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900">
              Destinations d&apos;Émotion & de Sérénité
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {[
              { id: 'all', label: 'Toutes les collections' },
              { id: 'culture', label: 'Patrimoine & Foi' },
              { id: 'beach', label: 'Retraites Méditerranée' },
              { id: 'city', label: 'Métropoles d’Orient' },
              { id: 'adventure', label: 'Asie Impériale' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-serif transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-stone-900 text-[#FBF9F5] shadow-sm'
                    : 'bg-white border border-[#EADBCE] text-stone-600 hover:text-stone-900 hover:border-stone-400'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento / Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, idx) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onSelect={handleSelectDestination}
              isFeaturedLarge={idx === 0}
              className={idx === 0 ? 'md:col-span-2' : ''}
            />
          ))}
        </div>
      </section>

      {/* Engagements Section */}
      <section id="engagements" className="py-24 bg-[#F4EFEA] border-y border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-800 block mb-2 font-semibold">
              II. Notre Philosophie
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 mb-4">
              La Charte d&apos;Excellence Al-Buraq
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-sans">
              Éloignés des circuits industriels et impersonnels, nous privilégions la discrétion, le confort absolu et l&apos;authenticité culturelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-9 rounded-2xl bg-white border border-[#EADBCE] shadow-[0_8px_24px_rgba(44,30,20,0.04)]">
              <span className="font-serif text-4xl text-amber-900/40 block mb-4">01.</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2.5">Hôtels d&apos;Élite & Proximité</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Sélection rigoureuse des établissements 5 étoiles situés à quelques pas des lieux saints et des monuments emblématiques.
              </p>
            </div>

            <div className="p-9 rounded-2xl bg-white border border-[#EADBCE] shadow-[0_8px_24px_rgba(44,30,20,0.04)]">
              <span className="font-serif text-4xl text-amber-900/40 block mb-4">02.</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2.5">Guides Lettrés & Attentionnés</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Chaque étape est contée et éclairée par nos spécialistes francophones pour vivre un moment d&apos;enrichissement rare.
              </p>
            </div>

            <div className="p-9 rounded-2xl bg-white border border-[#EADBCE] shadow-[0_8px_24px_rgba(44,30,20,0.04)]">
              <span className="font-serif text-4xl text-amber-900/40 block mb-4">03.</span>
              <h3 className="font-serif text-xl font-medium text-stone-900 mb-2.5">Transparence & Sérénité</h3>
              <p className="text-xs text-stone-600 leading-relaxed font-sans">
                Zéro mauvaise surprise. Vols réguliers sur compagnies de renom, transferts privatifs et conciergerie 7j/7.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing / Formules */}
      <section id="formules" className="py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-800 block mb-2 font-semibold">
            III. Formules & Privilèges
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-stone-900 mb-4">
            Des Prestations à Votre Mesure
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 font-sans">
            Des solutions conçues pour répondre avec justesse aux attentes des voyageurs les plus exigeants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
          {PRICING_PLANS.map((plan) => (
            <PricingCard key={plan.id} plan={plan} onChoose={handleChoosePlan} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-[#FAF7F2] border-t border-[#EADBCE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-amber-800 block mb-2 font-semibold">
              IV. Carnets de Voyage
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900">
              Ce Qu&apos;en Disent Nos Hôtes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-8 rounded-2xl bg-white border border-[#EADBCE] flex flex-col justify-between shadow-[0_4px_20px_rgba(44,30,20,0.03)]">
                <div>
                  <Quote className="w-6 h-6 text-amber-900/20 mb-4" />
                  <p className="text-xs sm:text-sm text-stone-700 italic font-serif leading-relaxed mb-6">
                    &ldquo;{t.content}&rdquo;
                  </p>
                </div>
                <div className="flex items-center gap-3.5 pt-4 border-t border-stone-100">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden border border-[#EADBCE]">
                    <Image src={t.avatarUrl} alt={t.author} fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-medium text-stone-900">{t.author}</h4>
                    <p className="text-[10px] uppercase tracking-wider text-stone-500 font-mono">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
