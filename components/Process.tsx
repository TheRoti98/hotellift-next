import { Reveal } from './Reveal'

const steps = [
  {
    period: 'Miesiąc 1',
    title: 'Fundament',
    items: ['Warsztat strategiczny (pełny dzień)', 'Audyt techniczny strony i kampanii', 'Setup kampanii Google Ads + Meta', 'Plan działań i KPI na 3 miesiące'],
    result: 'Pierwsze wyniki w ciągu 30 dni',
  },
  {
    period: 'Co miesiąc',
    title: 'Wzrost',
    items: ['Cotygodniowa optymalizacja kampanii', 'Konsultacje i planowanie strategiczne', 'Praca z contentem i social media', 'Optymalizacja procesów wewnętrznych'],
    result: 'Systematyczny wzrost rezerwacji bezpośrednich',
  },
  {
    period: 'Co kwartał',
    badge: 'PRO',
    title: 'Rozwój',
    items: ['Dedykowany dzień pracy u Ciebie', 'Nagrywanie contentu wideo na miejscu', 'Szkolenia zespołu z AI i narzędzi', 'Strategia na kolejne 3 miesiące'],
    result: 'Niezależny, kompetentny zespół',
  },
]

export function Process() {
  return (
    <section className="bg-offwhite py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Proces</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Jak wygląda<br />współpraca w praktyce?
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Trzy etapy, każdy z mierzalnym efektem. Pierwsze wyniki w ciągu 30 dni.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-violet/8 rounded-2xl overflow-hidden border border-violet/10">
          {steps.map((s, i) => (
            <Reveal key={s.period} delay={i * 100}>
              <div className="bg-white p-8 h-full hover:bg-violet-pale/50 transition-colors group">
                <div className="flex items-center gap-2 mb-6">
                  <span className="inline-block text-[11px] font-bold uppercase tracking-[0.12em] text-violet bg-violet/8 border border-violet/15 px-3 py-1 rounded-full">
                    {s.period}
                  </span>
                  {s.badge && (
                    <span className="inline-block text-[10px] font-black uppercase tracking-[0.1em] gradient-text">
                      {s.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-black text-midnight text-[22px] mb-5 tracking-tight">{s.title}</h3>

                <ul className="space-y-0 mb-6">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2.5 py-2.5 border-b border-gray1 last:border-0 text-[14px] text-text-main/70">
                      <span className="w-1 h-1 rounded-full bg-brand-green flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-2 text-[13px] font-semibold text-violet group-hover:gap-3 transition-all">
                  <span className="text-brand-green">→</span>
                  {s.result}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
