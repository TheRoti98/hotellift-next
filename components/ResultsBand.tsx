import { Reveal } from './Reveal'

const results = [
  { num: '4.2×', label: 'średni wzrost ROI kampanii u naszych klientów' },
  { num: '−60%', label: 'koszt pozyskania gościa po wdrożeniu naszego systemu' },
  { num: '30 dni', label: 'do pierwszych widocznych wyników od startu kampanii' },
]

export function ResultsBand() {
  return (
    <div className="bg-brand-gradient py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 md:divide-x divide-midnight/20">
            {results.map((r) => (
              <div key={r.label} className="md:px-10 first:pl-0 last:pr-0">
                <div className="font-black text-midnight mb-2 leading-none tracking-tight" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>
                  {r.num}
                </div>
                <p className="text-midnight/65 text-[14px] font-medium leading-snug max-w-[220px]">{r.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  )
}
