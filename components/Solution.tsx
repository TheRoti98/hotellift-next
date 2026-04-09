import { Reveal } from './Reveal'

const contrasts = [
  {
    bad: '"Zrobimy to za Ciebie, nie martw się" - i znikamy na tygodnie',
    good: 'Uczymy Twój zespół robić to samodzielnie. Zostajemy bo widzisz wyniki.',
  },
  {
    bad: 'Uczą się Twojej branży na Twoim budżecie',
    good: '10 lat w HORECA. Revenue management, sezonowość, grupy - rozumiemy to od środka.',
  },
  {
    bad: 'Czarne skrzynki. Brak kontroli. Uzależnienie.',
    good: 'Pełna transparentność. Twoje dane, Twoja kontrola, Twoja niezależność.',
  },
]

export function Solution() {
  return (
    <section className="bg-midnight py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <div className="max-w-3xl mb-16 md:mb-20">
          <Reveal>
            <p className="section-tag !text-white/30 before:bg-white/15">Jak działamy</p>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-black text-white leading-[1.0] tracking-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}
            >
              Nie jesteśmy agencją.<br />
              <span className="gradient-text">Jesteśmy Twoim<br />działem marketingu.</span>
            </h2>
          </Reveal>
        </div>

        {/* Contrast rows */}
        <div className="space-y-0 border-t border-white/[0.07]">
          {contrasts.map((c, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="group grid grid-cols-1 md:grid-cols-2 gap-0 border-b border-white/[0.07] py-8 md:py-10 hover:border-white/[0.12] transition-colors">

                {/* Bad - left, muted */}
                <div className="md:pr-12 mb-4 md:mb-0 flex items-start gap-3">
                  <span className="text-red-500/40 text-[11px] font-bold uppercase tracking-widest mt-1 flex-shrink-0 hidden md:block">
                    Agencja
                  </span>
                  <p className="text-white/25 text-[14px] md:text-[15px] leading-relaxed line-through decoration-white/15">
                    {c.bad}
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:flex items-center absolute left-1/2 -translate-x-1/2 mt-2">
                </div>

                {/* Good - right, prominent */}
                <div className="md:pl-12 md:border-l border-white/[0.07] flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full bg-brand-gradient flex-shrink-0 flex items-center justify-center mt-0.5">
                    <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                      <path d="M1.5 4.5l2 2L7.5 2" stroke="#05000a" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p
                    className="text-white font-semibold leading-relaxed"
                    style={{ fontSize: 'clamp(1rem, 1.5vw, 1.15rem)' }}
                  >
                    {c.good}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom proof bar */}
        <Reveal delay={300}>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-6 py-5">
              <div className="font-black text-white text-[2rem] tracking-tight leading-none mb-1">
                12 lat
              </div>
              <div className="text-white/35 text-[13px]">
                klientów którzy zostają z nami - nie dlatego że muszą
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-6 py-5">
              <div className="font-black text-white text-[2rem] tracking-tight leading-none mb-1">
                0 umów
              </div>
              <div className="text-white/35 text-[13px]">
                żaden pakiet nie wymaga umowy rocznej
              </div>
            </div>
            <div className="bg-white/[0.04] border border-white/[0.07] rounded-xl px-6 py-5">
              <div className="font-black gradient-text text-[2rem] tracking-tight leading-none mb-1">
                2014
              </div>
              <div className="text-white/35 text-[13px]">
                rok założenia - na rynku od ponad 10 lat
              </div>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
