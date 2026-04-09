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

      <div className="relative max-w-3xl mx-auto px-5 md:px-8 text-center">
        <Reveal>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-violet/20 bg-violet/[0.06] mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-violet animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.14em] text-violet/70">
              Bezpłatne wideo
            </span>
          </div>

          <h2
            className="font-black text-midnight leading-tight tracking-tight mb-5"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Dowiedz się co dokładnie<br />
            <span className="gradient-text">nie działa w Twoim hotelu</span><br />
            i jak to zmienić.
          </h2>

          <p className="text-text-main/55 text-[15px] leading-relaxed mb-10 max-w-xl mx-auto">
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
              className="flex-1 bg-white border border-gray1 rounded-xl text-text-main placeholder:text-gray3 px-5 py-4 text-[15px] focus:outline-none focus:border-violet/40 transition-colors"
            />
            <button
              type="submit"
              disabled={loading}
              className="gradient-btn font-bold text-[15px] px-7 py-4 rounded-xl shadow-lg shadow-brand-green/10 whitespace-nowrap disabled:opacity-60 transition-opacity"
            >
              {loading ? 'Chwila...' : 'Obejrzyj za darmo →'}
            </button>
          </form>

          <p className="text-text-main/30 text-[12px] mt-4">
            Jeden mail z linkiem. Zero spamu.
          </p>

        </Reveal>
      </div>

    </section>
  )
}
