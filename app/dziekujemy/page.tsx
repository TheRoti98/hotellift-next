'use client'

import { useState } from 'react'
import { Footer } from '@/components/Footer'

const packages = [
  {
    id: 'basic',
    name: 'Basic',
    desc: 'Kampanie Google & Meta, rezerwacje bezpośrednie, raporty miesięczne',
  },
  {
    id: 'pro',
    name: 'Pro',
    desc: 'Pełna skala — reklamy, content, AI, szkolenia, dzień pracy u Ciebie',
    popular: true,
  },
  {
    id: 'nie-wiem',
    name: 'Nie wiem jeszcze',
    desc: 'Powiedz nam o swoim obiekcie — doradzimy na konsultacji',
  },
]

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

export default function DziekujemyPage() {
  const [selectedPackage, setSelectedPackage] = useState('pro')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fields, setFields] = useState({
    imieNazwisko: '',
    email: '',
    obiekt: '',
    telefon: '',
    nip: '',
  })
  const [checked, setChecked] = useState({ rodo: false, telecom: false, email: false })
  const allChecked = checked.rodo && checked.telecom && checked.email

  const setField = (key: string, val: string) =>
    setFields(prev => ({ ...prev, [key]: val }))

  const toggle = (id: string) =>
    setChecked(prev => ({ ...prev, [id]: !prev[id as keyof typeof prev] }))

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!allChecked) return
    setLoading(true)
    try {
      await fetch('/api/dziekujemy', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, pakiet: selectedPackage, source: 'formularz-dziekujemy' }),
      })
    } catch {}
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <>
      <main className="bg-offwhite min-h-screen">

        {/* ── HERO z WIDEO ── */}
        <section className="bg-midnight pt-16 pb-20 md:pt-20 md:pb-28 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, #3c0080, transparent)' }}
          />
          <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />

          <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">

            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/25 bg-brand-green/8 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-green/80">
                Dziękujemy za zapis
              </span>
            </div>

            <h1
              className="font-black text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.75rem)' }}
            >
              Dlaczego marketing<br />
              <span className="gradient-text">w Twoim hotelu ssie?</span><br />
              I jak to zmienić?
            </h1>

            <p className="text-white/40 text-[16px] leading-relaxed mb-12 max-w-xl mx-auto">
              Obejrzyj to wideo zanim przejdziesz dalej — odpowie na większość Twoich pytań.
            </p>

            {/* Video embed */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              style={{ paddingTop: '56.25%', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/jNQXAC9IVRw"
                title="Dlaczego marketing w Twoim hotelu ssie?"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <p className="text-white/20 text-[12px] mt-4">
              Czas: ok. 12 minut · Łukasz Falba & Hubert Hurban
            </p>

          </div>
        </section>

        {/* ── FORMULARZ ── */}
        <section className="py-20 md:py-28">
          <div className="max-w-2xl mx-auto px-5 md:px-8">

            <div className="text-center mb-12">
              <p className="section-tag mb-3">Następny krok</p>
              <h2
                className="font-black text-violet leading-tight tracking-tight mb-3"
                style={{ fontSize: 'clamp(1.8rem, 4vw, 2.8rem)' }}
              >
                Umów bezpłatną konsultację
              </h2>
              <p className="text-text-main/55 text-[15px] leading-relaxed max-w-md mx-auto">
                30 minut. Konkretna rozmowa o Twoim obiekcie. Zero sprzedażowego bullshitu.
              </p>
            </div>

            {submitted ? (
              <div className="bg-white border border-gray1 rounded-2xl p-10 text-center">
                <div
                  className="w-14 h-14 rounded-full mx-auto mb-5 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg,#03ef23,#00bbf5)' }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M4 11l5 5L18 6" stroke="#05000a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h3 className="font-black text-midnight text-2xl mb-2">Gotowe!</h3>
                <p className="text-text-main/55 text-[15px]">
                  Odezwiemy się w ciągu 24 godzin roboczych.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white border border-gray1 rounded-2xl p-7 md:p-10 flex flex-col gap-5">

                {/* Imię + Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">Imię i nazwisko</label>
                    <input
                      type="text"
                      required
                      placeholder="Jan Kowalski"
                      value={fields.imieNazwisko}
                      onChange={e => setField('imieNazwisko', e.target.value)}
                      className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">E-mail</label>
                    <input
                      type="email"
                      required
                      placeholder="jan@hotelkowalski.pl"
                      value={fields.email}
                      onChange={e => setField('email', e.target.value)}
                      className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                    />
                  </div>
                </div>

                {/* Nazwa hotelu + telefon */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">Nazwa obiektu</label>
                    <input
                      type="text"
                      required
                      placeholder="Hotel Przykładowy"
                      value={fields.obiekt}
                      onChange={e => setField('obiekt', e.target.value)}
                      className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">Telefon</label>
                    <input
                      type="tel"
                      placeholder="+48 600 000 000"
                      value={fields.telefon}
                      onChange={e => setField('telefon', e.target.value)}
                      className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors"
                    />
                  </div>
                </div>

                {/* NIP */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">
                    NIP <span className="text-text-main/30 normal-case tracking-normal font-normal">(opcjonalnie — potrzebny do wystawienia faktury)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="000-000-00-00"
                    maxLength={13}
                    value={fields.nip}
                    onChange={e => setField('nip', e.target.value)}
                    className="border border-gray1 rounded-xl px-4 py-3 text-[14px] text-text-main placeholder:text-gray3 focus:outline-none focus:border-violet/40 transition-colors md:w-1/2"
                  />
                </div>

                {/* Pakiet */}
                <div className="flex flex-col gap-3">
                  <label className="text-[12px] font-semibold uppercase tracking-wider text-text-main/50">
                    Który pakiet Cię interesuje?
                  </label>
                  <div className="flex flex-col gap-2.5">
                    {packages.map(pkg => (
                      <label
                        key={pkg.id}
                        className="flex items-start gap-4 border rounded-xl px-5 py-4 cursor-pointer transition-all"
                        style={{
                          borderColor: selectedPackage === pkg.id ? '#3c0080' : '#e5e5e5',
                          background: selectedPackage === pkg.id ? 'rgba(60,0,128,0.04)' : 'white',
                        }}
                      >
                        <input
                          type="radio"
                          name="pakiet"
                          value={pkg.id}
                          checked={selectedPackage === pkg.id}
                          onChange={() => setSelectedPackage(pkg.id)}
                          className="mt-0.5 accent-violet flex-shrink-0"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-midnight text-[14px]">{pkg.name}</span>
                            {pkg.popular && (
                              <span className="text-[9px] font-black uppercase tracking-wider gradient-text">Popularne</span>
                            )}
                          </div>
                          <span className="text-text-main/45 text-[12px] leading-snug">{pkg.desc}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Checkboxy zgód */}
                <div className="flex flex-col gap-3 pt-1">
                  {consents.map(({ id, text }) => (
                    <label key={id} className="flex items-start gap-3 cursor-pointer group">
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
                              : 'bg-white border-gray1 group-hover:border-violet/40'
                          }`}
                        >
                          {checked[id as keyof typeof checked] && (
                            <svg className="w-4 h-4 text-white p-0.5" viewBox="0 0 16 16" fill="none">
                              <path d="M3 8l3.5 3.5L13 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          )}
                        </div>
                      </div>
                      <span className="text-[11px] text-text-main/50 leading-relaxed group-hover:text-text-main/70 transition-colors">
                        {text}
                      </span>
                    </label>
                  ))}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading || !allChecked}
                  className={`gradient-btn font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-brand-green/10 mt-2 transition-opacity ${
                    allChecked && !loading ? 'opacity-100 cursor-pointer' : 'opacity-40 cursor-not-allowed'
                  }`}
                >
                  {loading ? 'Wysyłamy...' : 'Umów bezpłatną konsultację →'}
                </button>

                <p className="text-center text-[12px] text-text-main/30">
                  Dane są bezpieczne. Nie sprzedajemy ich ani nie spamujemy.
                </p>

              </form>
            )}

          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
