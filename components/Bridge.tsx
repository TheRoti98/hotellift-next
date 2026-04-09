import { Reveal } from './Reveal'

const pillars = [
  {
    num: '01',
    title: 'Kampanie które przynoszą rezerwacje',
    body: 'Google Ads i Meta Ads przez kogoś kto rozumie hotelarstwo. Nie kliknięcia - rzeczywiste rezerwacje bezpośrednie.',
    stats: [
      { value: '6-10×', label: 'ROAS kampanii', sub: 'zwrot z budżetu reklamowego' },
      { value: '-38%', label: 'udział OTA', sub: 'średnio po 6 miesiącach' },
      { value: '3×', label: 'więcej rezerwacji bezpośrednich', sub: 'vs. punkt startowy' },
    ],
  },
  {
    num: '02',
    title: 'AI które automatyzuje Twój hotel',
    body: 'Nie zastępujemy Twojego zespołu - uzupełniamy go. Automatyzujemy powtarzalne procesy w recepcji, marketingu i sprzedaży.',
    stats: [
      { value: '80%', label: 'powtarzalnych zadań', sub: 'można zautomatyzować' },
      { value: '15 min', label: 'zamiast 2 dni', sub: 'oferta grupowa gotowa' },
      { value: '< 5 min', label: 'odpowiedź na zapytanie', sub: 'zamiast kilku godzin' },
    ],
  },
  {
    num: '03',
    title: 'Strategia z 10+ lat w hotelarstwie',
    body: 'Revenue management, sezonowość, grupy, eventy - rozumiemy to od środka, nie z podręcznika.',
    tags: ['Revenue management', 'Sezonowość', 'Grupy & eventy', 'Pricing', 'Procesy recepcji', 'Direct booking'],
  },
]

export function Bridge() {
  return (
    <section className="bg-midnight py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 60% at 50% 0%, #3c0080, transparent)' }}
      />

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">

        {/* Header */}
        <Reveal>
          <div className="max-w-2xl mb-16 md:mb-20">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/30 mb-4">
              Dobra wiadomość
            </p>
            <h2
              className="font-black text-white leading-tight tracking-tight mb-5"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
            >
              Wszystkie te straty<br />
              <span className="gradient-text">da się zatrzymać.</span>
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed max-w-xl">
              Przez połączenie czegoś czego nie znajdziesz w żadnej innej agencji: głębokiej znajomości hotelarstwa i narzędzi które działają już dziś.
            </p>
          </div>
        </Reveal>

        {/* 3 pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => (
            <Reveal key={p.num} delay={i * 100}>
              <div
                className="rounded-2xl p-6 md:p-7 flex flex-col gap-5 h-full"
                style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
              >
                {/* Header */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span
                      className="font-black tabular-nums"
                      style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'rgba(3,239,35,0.5)' }}
                    >
                      {p.num}
                    </span>
                    <div className="flex-1 h-px" style={{ background: 'rgba(3,239,35,0.15)' }} />
                  </div>
                  <h3 className="font-black text-white text-[17px] leading-snug mb-2">{p.title}</h3>
                  <p className="text-white/40 text-[13px] leading-relaxed">{p.body}</p>
                </div>

                {/* Stats grid */}
                {'stats' in p && p.stats && (
                  <div className="grid grid-cols-1 gap-2 mt-auto">
                    {p.stats.map((s, j) => (
                      <div
                        key={j}
                        className="rounded-xl px-4 py-3 flex items-center gap-4"
                        style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <span
                          className="gradient-text font-black tabular-nums leading-none shrink-0 inline-block"
                          style={{ fontSize: 'clamp(1.2rem, 2.5vw, 1.5rem)', minWidth: '3.5rem' }}
                        >
                          {s.value}
                        </span>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-white text-[13px] font-semibold leading-tight">{s.label}</span>
                          {s.sub && <span className="text-white/35 text-[11px] leading-tight">{s.sub}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tags (pillar 03) */}
                {'tags' in p && p.tags && (
                  <div className="mt-auto">
                    <div
                      className="text-center mb-5 font-black"
                      style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', lineHeight: 1 }}
                    >
                      <span className="gradient-text inline-block">10+</span>
                      <p className="text-white/40 text-[13px] font-normal mt-1">lat w branży hotelowej</p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((tag, j) => (
                        <span
                          key={j}
                          className="text-[12px] font-semibold text-white/60 rounded-full px-3 py-1"
                          style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.09)' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </Reveal>
          ))}
        </div>

        {/* Connector */}
        <Reveal delay={400}>
          <div className="text-center mt-14 md:mt-16">
            <a
              href="#wyniki"
              className="inline-flex flex-col items-center gap-2 text-white/25 hover:text-white/50 transition-colors"
            >
              <span className="text-[12px] font-semibold uppercase tracking-[0.12em]">Przekonaj się na wynikach</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="animate-bounce">
                <path d="M10 4v12M4 10l6 6 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </Reveal>

      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-gradient opacity-20" />
    </section>
  )
}
