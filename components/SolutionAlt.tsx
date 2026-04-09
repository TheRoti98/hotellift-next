'use client'

import { useEffect, useRef, useState } from 'react'

function useVisible(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true) }, { threshold })
    if (ref.current) o.observe(ref.current)
    return () => o.disconnect()
  }, [])
  return { ref, visible }
}

const items = [
  {
    from: 'Firma od SEO robi Ci reklamy. Raporty? Nie ma. Budżet? Gdzieś idzie.',
    headline: 'Widzisz każdą złotówkę.',
    body: 'Raport który rozumiesz - co idzie na reklamy, co wraca, dlaczego. Bez 40-stronicowego PDF do szuflady. Pełna transparentność to dla nas standard, nie bonus.',
  },
  {
    from: 'Dostali narzędzia. Zespół i tak dzwoni do agencji po każdą zmianę.',
    headline: 'Twój zespół działa samodzielnie.',
    body: 'Szkolimy go realnie - nie PowerPointem. Procesy, materiały, wiedza przekazana tak żeby po kilku miesiącach Twoi ludzie wiedzieli więcej niż niejeden junior w agencji.',
  },
  {
    from: 'Budżet przepalony. Kampanie ustawione "na oko". Ktoś uczył się na Twoich pieniądzach.',
    headline: 'Reklamy które zarabiają.',
    body: 'Optymalizacja wynikająca z lat wyłącznie w hotellach. Wiemy co działa na Twój typ obiektu, sezon i rynek - nie co działa "ogólnie w reklamie".',
  },
]

function Item({ item, index }: { item: typeof items[0]; index: number }) {
  const { ref, visible } = useVisible()

  return (
    <div
      ref={ref}
      className="relative flex gap-6 md:gap-10"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateX(-12px)',
        transition: `opacity 0.65s ease ${index * 150}ms, transform 0.65s ease ${index * 150}ms`,
      }}
    >
      {/* Left: number + connecting line */}
      <div className="flex flex-col items-center flex-shrink-0 pt-1">
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 z-10"
          style={{ background: 'linear-gradient(135deg, #03ef23, #00bbf5)', boxShadow: '0 0 16px rgba(3,239,35,0.25)' }}
        >
          <span className="font-black text-midnight text-[12px]">{index + 1}</span>
        </div>
        {index < items.length - 1 && (
          <div
            className="w-px flex-1 mt-2"
            style={{ background: 'linear-gradient(to bottom, rgba(3,239,35,0.25), rgba(0,187,245,0.1))', minHeight: '4rem' }}
          />
        )}
      </div>

      {/* Right: content */}
      <div className="pb-12 flex-1">
        {/* Problem - resolved */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-red-500/15 bg-red-500/[0.05]">
            <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="flex-shrink-0">
              <path d="M1.5 1.5l5 5M6.5 1.5l-5 5" stroke="rgb(239 68 68 / 0.45)" strokeWidth="1.4" strokeLinecap="round"/>
            </svg>
            <span className="text-[12px] text-white/25 line-through decoration-white/15 leading-snug">
              {item.from}
            </span>
          </div>
        </div>

        {/* Solution headline */}
        <h3
          className="font-black text-white leading-tight tracking-tight mb-3"
          style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)' }}
        >
          {item.headline}
        </h3>

        {/* Body */}
        <p className="text-white/35 text-[14px] leading-relaxed max-w-2xl">
          {item.body}
        </p>
      </div>
    </div>
  )
}

export function SolutionAlt() {
  const { ref, visible } = useVisible(0.08)

  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 55% at 100% 40%, rgba(60,0,128,0.1), transparent)' }}
      />

      <div className="relative max-w-5xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div
          ref={ref}
          className="mb-14 md:mb-16"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'none' : 'translateY(16px)',
            transition: 'opacity 0.6s ease, transform 0.6s ease',
          }}
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/25 mb-5">Jak działamy</p>
          <h2
            className="font-black text-white leading-tight tracking-tight mb-4"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Odwracamy to<br />
            <span className="gradient-text">czego nienawidzisz w agencjach.</span>
          </h2>
          <p className="text-white/30 text-[15px] leading-relaxed max-w-xl">
            Trzy rzeczy które robią wszyscy. Trzy rzeczy których u nas nie ma.
          </p>
        </div>

        {/* Items */}
        <div>
          {items.map((item, i) => (
            <Item key={i} item={item} index={i} />
          ))}
        </div>

        {/* Closing punch */}
        <div
          className="mt-2 ml-[4.5rem] border-l-2 pl-6 py-1"
          style={{
            borderColor: 'rgba(3,239,35,0.2)',
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.6s ease 1s',
          }}
        >
          <p
            className="font-black text-white leading-snug"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.3rem)' }}
          >
            Transparentność, szkolenie, wyniki.<br />
            <span className="gradient-text">Jednocześnie. Nikt na rynku tego nie robi.</span>
          </p>
        </div>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
