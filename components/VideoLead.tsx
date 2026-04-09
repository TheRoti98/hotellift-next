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
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-30" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{ background: 'radial-gradient(ellipse 60% 60% at 50% 100%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-green/25 bg-brand-green/8 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-brand-green/80">
              Bezpłatne wideo
            </span>
          </div>

          <h2
            className="font-black text-white leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Dowiedz się co dokładnie<br />
            <span className="gradient-text">nie działa w Twoim hotelu</span><br />
            i jak to zmienić.
          </h2>

          <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
            12 minut. Bez teorii — konkretna lista rzeczy, które większość hoteli robi źle i dlaczego te same błędy kosztują Cię dziesiątki tysięcy złotych rocznie.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Twój e-mail"
              className="flex-1 bg-white/[0.07] border border-white/12 rounded-xl text-white placeholder:text-white/25 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/50 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="gradient-btn font-bold text-[15px] px-7 py-4 rounded-xl shadow-lg shadow-brand-green/10 whitespace-nowrap disabled:opacity-60 transition-opacity"
            >
              {loading ? 'Chwila...' : 'Obejrzyj za darmo →'}
            </button>
          </form>

          <p className="text-white/20 text-[12px] mt-4">
            Jeden mail z linkiem. Zero spamu.
          </p>

        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
