'use client';

import React, { useState } from 'react';
import { Calendar, Compass, MapPin, Users, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { BookingFormData } from '@/types/travel';

export function BookingWidget() {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    destination: 'Médine & La Mecque, Arabie Saoudite',
    activity: 'Séjour Sérénité & Pèlerinage',
    travelDate: '',
    travelersCount: 2,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="bg-white/95 backdrop-blur-md border border-[#EADBCE] rounded-2xl p-7 sm:p-9 shadow-[0_20px_50px_rgba(28,25,23,0.08)] max-w-xl w-full">
      <div className="flex items-start justify-between mb-6 pb-5 border-b border-stone-100">
        <div>
          <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-amber-800 font-semibold block mb-1">
            Service Conciergerie Privée
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900 tracking-tight">
            Esquissez Votre Voyage
          </h2>
        </div>
        <div className="w-10 h-10 rounded-full border border-stone-200 bg-[#FBF9F5] flex items-center justify-center text-amber-800 shrink-0">
          <Compass className="w-4 h-4" />
        </div>
      </div>

      {submitted ? (
        <div className="py-8 text-center space-y-4">
          <div className="w-14 h-14 bg-amber-50 text-amber-800 border border-amber-200 rounded-full flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7" />
          </div>
          <h3 className="font-serif text-2xl text-stone-900">Votre demande a été transmise</h3>
          <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
            Merci <strong className="text-stone-900">{formData.fullName}</strong>. Votre conseiller privé <strong>Al-Buraq Voyages</strong> étudie votre itinéraire pour{' '}
            <span className="text-stone-900 font-medium">{formData.destination}</span> et vous contactera à <span className="font-mono text-stone-700">{formData.email}</span> dans les meilleurs délais.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="mt-4 px-6 py-2 rounded-full border border-stone-300 text-xs font-serif text-stone-800 hover:bg-stone-50 transition-colors"
          >
            Formuler une autre demande
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">Nom & Prénom</label>
              <input
                type="text"
                required
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="Ex. Sarah Benali"
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5">Adresse E-mail</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="sarah@domaine.fr"
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 placeholder-stone-400 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-amber-800" /> Destination
              </label>
              <select
                value={formData.destination}
                onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              >
                <option value="Médine & La Mecque, Arabie Saoudite">Médine & La Mecque (Séjour 5★)</option>
                <option value="Istanbul & Bosphore, Turquie">Istanbul & Bosphore (Palais Privés)</option>
                <option value="Andalousie & Grenade, Espagne">Andalousie & Jardins de l&apos;Alhambra</option>
                <option value="Dubaï & Oasis d'Orient">Dubaï & Désert Majestueux</option>
                <option value="Santorin & Cyclades, Grèce">Santorin & Retraite Égéenne</option>
                <option value="Séoul & Gyeongju, Corée">Séoul & Palais Traditionnels</option>
              </select>
            </div>
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Compass className="w-3 h-3 text-amber-800" /> Expérience
              </label>
              <select
                value={formData.activity}
                onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              >
                <option value="Séjour Sérénité & Pèlerinage">Pèlerinage & Recueillement</option>
                <option value="Circuit Culture & Patrimoine">Histoire & Patrimoine Privé</option>
                <option value="Détente Balnéaire & Évasion">Retraite & Douceur de Vivre</option>
                <option value="Voyage d'Exception & VIP">Haute Couture & VIP 24/7</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Calendar className="w-3 h-3 text-amber-800" /> Période Souhaitée
              </label>
              <input
                type="date"
                required
                value={formData.travelDate}
                onChange={(e) => setFormData({ ...formData, travelDate: e.target.value })}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium uppercase tracking-wider text-stone-600 mb-1.5 flex items-center gap-1">
                <Users className="w-3 h-3 text-amber-800" /> Hôtes
              </label>
              <input
                type="number"
                min={1}
                max={18}
                value={formData.travelersCount}
                onChange={(e) => setFormData({ ...formData, travelersCount: parseInt(e.target.value) || 1 })}
                className="w-full bg-[#FAF8F5] border border-stone-200 rounded-lg px-3.5 py-2.5 text-xs text-stone-900 focus:outline-none focus:border-stone-900 transition-colors"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-3.5 rounded-full bg-stone-900 hover:bg-stone-800 text-[#FBF9F5] font-serif text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2 group active:scale-[0.98]"
          >
            <span>Confier Mon Projet de Voyage</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </form>
      )}
    </div>
  );
}
