'use client'

import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reveal } from './Reveal'


const consents = [
  {
    id: 'rodo',
    text: 'Wyrażam zgodę na przetwarzanie moich danych osobowych przez 4WebZones sp. z o.o. w celu kontaktu i przedstawienia oferty, zgodnie z Polityką prywatności.',
  },
  {
    id: 'telecom',
    text: 'Wyrażam zgodę na używanie telekomunikacyjnych urządzeń końcowych (np. telefonu) przez 4WebZones sp. z o.o. w celu marketingu bezpośredniego zgodnie z art. 172 ustawy Prawo telekomunikacyjne.',
  },
  {
    id: 'email',
    text: 'Wyrażam zgodę na otrzymywanie informacji handlowych drogą elektroniczną od 4WebZones sp. z o.o. na podany adres e-mail, zgodnie z ustawą o świadczeniu usług drogą elektroniczną.',
  },
]

export function CTASection() {
  const router = useRouter()
  const [checked, setChecked] = useState({ rodo: false, telecom: false, email: false })
  const allChecked = checked.rodo && checked.telecom && checked.email
  const [fields, setFields] = useState({ imie: '', nazwisko: '', email: '', telefon: '', obiekt: '' })
  const [loading, setLoading] = useState(false)

  const toggle = (id: string) =>
    setChecked(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }))

  const setField = (key: string, val: string) =>
    setFields(prev => ({ ...prev, [key]: val }))

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!allChecked) return
    setLoading(true)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, source: 'formularz-kontaktowy' }),
      })
    } catch {}
    router.push('/dziekujemy')
  }

  return (
    <section id="konsultacja" className="relative overflow-hidden bg-midnight min-h-screen flex flex-col justify-center py-16">
      {/* Background photo */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80"
          alt="Hotel"
          fill
          className="object-cover"
        />
      </div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-midnight via-midnight/95 to-violet/20" />
      {/* Top gradient accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-40" />

      <div className="relative z-10 max-w-2xl mx-auto px-5 md:px-8 text-center w-full">
        <Reveal>
          <p className="section-tag justify-center !text-white/40 before:bg-white/20">Zaczynamy</p>
          <h2 className="font-black text-white leading-tight tracking-tight mb-10" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Sprawdźmy,<br />
            <span className="gradient-text">czy możemy ci pomóc</span>
          </h2>
        </Reveal>

{/* Form */}
        <Reveal delay={200}>
          <form
            onSubmit={handleSubmit}
            className="bg-white/[0.12] border border-white/20 rounded-2xl p-6 md:p-8 text-left"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              {/* Imię */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-1.5">
                  Imię <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Jan"
                  value={fields.imie}
                  onChange={e => setField('imie', e.target.value)}
                  className="w-full bg-white/[0.12] border border-white/25 rounded-lg text-white placeholder:text-white/35 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/60 transition-colors"
                />
              </div>
              {/* Nazwisko */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-1.5">
                  Nazwisko <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Kowalski"
                  value={fields.nazwisko}
                  onChange={e => setField('nazwisko', e.target.value)}
                  className="w-full bg-white/[0.12] border border-white/25 rounded-lg text-white placeholder:text-white/35 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/60 transition-colors"
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="jan@hotel.pl"
                  value={fields.email}
                  onChange={e => setField('email', e.target.value)}
                  className="w-full bg-white/[0.12] border border-white/25 rounded-lg text-white placeholder:text-white/35 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/60 transition-colors"
                />
              </div>
              {/* Telefon */}
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-1.5">
                  Telefon <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+48 000 000 000"
                  value={fields.telefon}
                  onChange={e => setField('telefon', e.target.value)}
                  className="w-full bg-white/[0.12] border border-white/25 rounded-lg text-white placeholder:text-white/35 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/60 transition-colors"
                />
              </div>
              {/* Nazwa obiektu - full width */}
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-white/60 mb-1.5">
                  Nazwa obiektu <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Hotel Górski"
                  value={fields.obiekt}
                  onChange={e => setField('obiekt', e.target.value)}
                  className="w-full bg-white/[0.12] border border-white/25 rounded-lg text-white placeholder:text-white/35 px-4 py-3 text-[14px] focus:outline-none focus:border-violet/60 transition-colors"
                />
              </div>
            </div>

            {/* Checkboxy zgód */}
            <div className="flex flex-col gap-3 mb-6 mt-2">
              {consents.map(({ id, text }) => (
                <label
                  key={id}
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <div className="relative flex-shrink-0 mt-0.5">
                    <input
                      type="checkbox"
                      required
                      checked={checked[id as keyof typeof checked]}
                      onChange={() => toggle(id)}
                      className="sr-only"
                    />
                    <div
                      className={`w-4 h-4 rounded border transition-colors ${
                        checked[id as keyof typeof checked]
                          ? 'bg-violet border-violet'
                          : 'bg-white/[0.12] border-white/30 group-hover:border-white/55'
                      }`}
                    >
                      {checked[id as keyof typeof checked] && (
                        <svg className="w-4 h-4 text-white p-0.5" viewBox="0 0 16 16" fill="none">
                          <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[11px] text-white/55 leading-relaxed group-hover:text-white/75 transition-colors">
                    {text}
                  </span>
                </label>
              ))}
            </div>

            <button
              type="submit"
              disabled={!allChecked}
              className={`w-full gradient-btn py-4 rounded-xl text-[15px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-brand-green/25 transition-opacity ${
                allChecked && !loading ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'
              }`}
            >
              {loading ? 'Chwila...' : 'Umów bezpłatną konsultację'}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
