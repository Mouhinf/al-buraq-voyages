import React from 'react';
import { PricingPlan } from '@/types/travel';
import { Check } from 'lucide-react';

interface PricingCardProps {
  plan: PricingPlan;
  onChoose?: (plan: PricingPlan) => void;
}

export function PricingCard({ plan, onChoose }: PricingCardProps) {
  return (
    <div
      className={`relative rounded-2xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-500 ${
        plan.isPopular
          ? 'bg-gradient-to-b from-white to-[#FDFBF7] border-2 border-amber-800/80 shadow-[0_24px_60px_rgba(44,30,20,0.1)] lg:-translate-y-2'
          : 'bg-white border border-[#EADBCE] hover:border-stone-400 shadow-[0_10px_30px_rgba(28,25,23,0.04)]'
      }`}
    >
      {plan.isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-amber-900 text-[#FBF9F5] px-4 py-1 rounded-full text-[10px] font-mono uppercase tracking-[0.2em] shadow-sm">
          Sélection Recommandée
        </div>
      )}

      <div>
        <div className="flex justify-between items-baseline mb-2">
          <h3 className="font-serif text-2xl text-stone-900 font-medium">{plan.name}</h3>
        </div>
        <p className="text-xs text-stone-500 mb-6 min-h-[36px] leading-relaxed font-sans">{plan.tagline}</p>

        <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-stone-100">
          <span className="font-serif text-4xl sm:text-5xl font-medium text-stone-900">{plan.price} €</span>
          <span className="text-xs uppercase tracking-wider font-mono text-stone-500">
            /{plan.billingPeriod === 'month' ? 'adhérent' : 'séjour'}
          </span>
        </div>

        <ul className="space-y-3.5 text-xs text-stone-700 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <span className="w-4 h-4 rounded-full bg-amber-50 text-amber-800 border border-amber-200/80 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-2.5 h-2.5" />
              </span>
              <span className="leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => onChoose?.(plan)}
        className={`w-full py-3.5 rounded-full font-serif text-xs uppercase tracking-widest transition-all shadow-sm active:scale-95 ${
          plan.isPopular
            ? 'bg-amber-900 hover:bg-amber-800 text-[#FBF9F5] shadow-amber-900/10'
            : 'bg-stone-900 hover:bg-stone-800 text-[#FBF9F5]'
        }`}
      >
        {plan.ctaText}
      </button>
    </div>
  );
}
