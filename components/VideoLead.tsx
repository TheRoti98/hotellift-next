'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Reveal } from './Reveal'

export function VideoLead() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    // TODO: zapisz email do backendu
    await new Promise(r => setTimeout(r, 600))
    router.push('/dziekujemy')
  }

  return (
    <section className="bg-offwhite py-24 md:py-32 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {/*
          Mobile:  text (order-1) → mockup (order-2) → form (order-3)
          Desktop: left col = text + form | right col = mockup (row-span-2)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[auto_auto] gap-x-16 gap-y-6">

          {/* TEXT - mobile: 1st, desktop: col 1 row 1 */}
          <Reveal className="order-1 md:col-start-1 md:row-start-1">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/20 bg-violet/[0.06] mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
              <span className="text-[11px] font-black uppercase tracking-[0.14em] text-violet/70">
                Bezpłatne wideo
              </span>
            </div>

            <h2
              className="font-black text-midnight leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Dowiedz się co dokładnie<br />
              <span className="gradient-text">nie działa w Twoim hotelu</span><br />
              i jak to zmienić.
            </h2>

            <p className="text-text-main/55 text-[15px] leading-relaxed">
              12 minut. Konkretna lista błędów, które większość hoteli popełnia — i dlaczego kosztują Cię dziesiątki tysięcy złotych rocznie.
            </p>
          </Reveal>

          {/* MOCKUP - mobile: 2nd, desktop: col 2 row 1+2 */}
          <Reveal delay={120} className="order-2 md:col-start-2 md:row-start-1 md:row-span-2">
            <div
              className="relative rounded-2xl overflow-hidden shadow-2xl"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Thumbnail */}
              <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80"
                  alt="Hotel VSL"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0" style={{ background: 'rgba(5,0,10,0.45)' }} />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full flex items-center justify-center shadow-2xl"
                    style={{ background: 'linear-gradient(135deg, #03ef23, #00bbf5)', boxShadow: '0 0 40px rgba(3,239,35,0.35)' }}
                  >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ marginLeft: '3px' }}>
                      <path d="M6 4l14 8-14 8V4z" fill="#05000a"/>
                    </svg>
                  </div>
                </div>

                {/* Duration */}
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold text-white" style={{ background: 'rgba(0,0,0,0.7)' }}>
                  12:00
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 pt-10" style={{ background: 'linear-gradient(to top, rgba(5,0,10,0.9), transparent)' }}>
                  <p className="text-white/40 text-[10px] uppercase tracking-widest mb-1">Łukasz Falba & Hubert Hurban</p>
                  <p className="text-white font-bold text-[13px] leading-snug">
                    Dlaczego marketing w Twoim hotelu ssie?<br />
                    <span className="gradient-text">I jak to naprawić.</span>
                  </p>
                </div>
              </div>

              {/* Bullet points */}
              <div className="bg-midnight px-5 py-4 flex flex-col gap-2.5">
                {[
                  'Dlaczego reklamy nie przynoszą rezerwacji',
                  'Które 3 błędy przepalają budżet',
                  'Co konkretnie zmienić w 30 dni',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span
                      className="w-4 h-4 rounded-full flex-shrink-0 flex items-center justify-center"
                      style={{ background: 'linear-gradient(135deg,#03ef23,#00bbf5)' }}
                    >
                      <svg width="7" height="7" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#05000a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-white/50 text-[12px]">{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* FORM - mobile: 3rd, desktop: col 1 row 2 */}
          <Reveal delay={80} className="order-3 md:col-start-1 md:row-start-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Twój e-mail"
                  className="flex-1 bg-white border border-gray1 rounded-xl text-text-main placeholder:text-gray3 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/40 transition-colors"
                />
                <input
                  type="tel"
                  placeholder="Numer telefonu"
                  className="flex-1 bg-white border border-gray1 rounded-xl text-text-main placeholder:text-gray3 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/40 transition-colors"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="gradient-btn font-bold text-[15px] px-7 py-4 rounded-xl shadow-lg shadow-brand-green/10 disabled:opacity-60 transition-opacity"
              >
                {loading ? 'Chwila...' : 'Obejrzyj za darmo →'}
              </button>
              <p className="text-text-main/30 text-[12px] text-center">
                Jeden mail z linkiem. Zero spamu.
              </p>
            </form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
