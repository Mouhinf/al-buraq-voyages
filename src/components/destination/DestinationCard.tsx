import React from 'react';
import Image from 'next/image';
import { Destination } from '@/types/travel';
import { ArrowRight } from 'lucide-react';

interface DestinationCardProps {
  destination: Destination;
  onSelect?: (destination: Destination) => void;
  className?: string;
  isFeaturedLarge?: boolean;
}

const CATEGORY_LABELS: Record<string, string> = {
  culture: 'Patrimoine & Sérénité',
  city: 'Métropole d’Orient',
  beach: 'Retraite Méditerranéenne',
  adventure: 'Découverte Impériale',
};

export function DestinationCard({ destination, onSelect, className = '', isFeaturedLarge = false }: DestinationCardProps) {
  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-white border border-[#EADBCE] hover:border-amber-700/50 transition-all duration-500 hover:shadow-[0_16px_40px_rgba(44,30,20,0.08)] flex flex-col ${className}`}
    >
      <div className={`relative w-full overflow-hidden ${isFeaturedLarge ? 'h-80 sm:h-96' : 'h-72'}`}>
        <Image
          src={destination.imageUrl}
          alt={destination.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
        
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-white/90 backdrop-blur-md text-stone-800 border border-stone-200 shadow-sm">
            {CATEGORY_LABELS[destination.category] || destination.category}
          </span>
          {destination.featured && (
            <span className="px-3 py-1 rounded-full text-[10px] uppercase font-mono tracking-wider bg-amber-900 text-[#FBF9F5] shadow-sm">
              Coup de Cœur
            </span>
          )}
        </div>

        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-stone-200 text-xs font-serif text-stone-900 flex items-center gap-1 shadow-sm">
          <span className="text-amber-700">★</span>
          <span>{destination.rating.toFixed(2)}</span>
          <span className="text-stone-400 font-sans text-[10px]">({destination.reviewsCount})</span>
        </div>

        <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-200/90 mb-0.5">
              {destination.country}
            </p>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium tracking-tight group-hover:text-amber-200 transition-colors">
              {destination.location}
            </h3>
          </div>
          <div className="text-right">
            <span className="text-[10px] uppercase tracking-wider text-stone-300 block">À partir de</span>
            <span className="font-serif text-xl sm:text-2xl font-semibold text-white">{destination.price} €</span>
          </div>
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <h4 className="font-serif text-lg text-stone-900 group-hover:text-amber-900 transition-colors mb-2">
            {destination.title}
          </h4>
          <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed font-sans">
            {destination.description}
          </p>
        </div>

        <div className="pt-4 border-t border-stone-100 flex items-center justify-between text-xs">
          <span className="text-stone-500 font-mono text-[11px] flex items-center gap-1.5">
            ⏱ {destination.duration}
          </span>
          <button
            onClick={() => onSelect?.(destination)}
            className="inline-flex items-center gap-1.5 text-stone-900 hover:text-amber-800 font-serif text-xs font-medium transition-colors"
          >
            <span>Découvrir l&apos;itinéraire</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </article>
  );
}
