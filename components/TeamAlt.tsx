import Image from 'next/image'
import { Reveal } from './Reveal'

const members = [
  {
    name: 'Łukasz Falba',
    photo: '/falba.png',
    role: 'Strategy & Performance',
    bigNum: '100M+',
    bigLabel: 'przychodu dla klientów',
    voice: 'Rozwiązuję problemy, których nie widać gołym okiem.',
    stats: [
      { num: '10 lat', label: 'doświad.' },
      { num: '50+', label: 'obiektów' },
      { num: '2000h+', label: 'szkoleń' },
    ],
    bio: 'Pozyskiwałem leady i budowałem sprzedaż w Hollywood, Poznaniu i Pcimiu Dolnym, ale także w Niemczech, Wielkiej Brytanii, Wybrzeżu Kości Słoniowej, Togo, Senegalu, Brazylii i innych krajach. Budowałem lub pomagałem budować kilka agencji, uratowałem kilka biznesów, a tysiące zoptymalizowałem. Dzięki kilku tysiącom godzin spędzonym na sali szkoleniowej mogę efektywnie przekazywać klientom wiedzę, żeby nasza współpraca nie ograniczała się jedynie do raportów i klikania reklam.',
    tags: ['Google Ads', 'Meta Ads', 'HORECA'],
  },
  {
    name: 'Hubert Hurban',
    photo: '/hubi2.jpg',
    role: 'Content & AI',
    bigNum: '10M+',
    bigLabel: 'zasięgu na Instagramie',
    voice: 'Skupiam się na content marketingu, wykorzystaniu AI i projektowaniu efektywnych procesów.',
    stats: [
      { num: '10 lat', label: 'doświad.' },
      { num: '8 zł', label: 'lead' },
      { num: '100+', label: 'auto AI' },
    ],
    bio: 'Na swoich własnych social mediach generuję miesięcznie ponad 10 mln zasięgu bez dużego konta i wielkiej rozpoznawalności. Moje treści pomogą Ci przede wszystkim sprzedać. To nie bajki o viralowych zasięgach, a realne wyniki, które zobaczysz u siebie na koncie. Projektowałem automatyzacje, które realnie oszczędzają dziennie setki, tysiący, a często nawet dziesiątki tysięcy złotych.',
    tags: ['Content', 'AI', 'Social Media'],
  },
]

export function TeamAlt() {
  return (
    <section id="zespol" className="bg-midnight py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">

        <Reveal>
          <div className="mb-14">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/20 mb-4">Zespół</p>
            <h2 className="font-black text-white leading-tight" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
              My to ogarniamy.
            </h2>
          </div>
        </Reveal>

        <div className="flex flex-col gap-4">
          {members.map((m, idx) => (
            <Reveal key={m.name} delay={idx * 80}>

              {/* Mobile */}
              <div className="flex flex-col gap-3 md:hidden">
                <div className="grid grid-cols-2 gap-3">
                  {/* Photo */}
                  <div className="relative rounded-2xl overflow-hidden" style={{ paddingTop: '120%' }}>
                    <Image src={m.photo} alt={m.name} fill className="object-cover object-top" />
                  </div>
                  {/* Big stat */}
                  <div className="rounded-2xl p-5 flex flex-col justify-end" style={{ background: 'linear-gradient(135deg,rgba(3,239,35,0.07),rgba(0,187,245,0.07))', border: '1px solid rgba(3,239,35,0.12)' }}>
                    <p className="text-white/30 text-[10px] uppercase tracking-wider mb-2">{m.bigLabel}</p>
                    <div className="font-black gradient-text leading-none" style={{ fontSize: '2.2rem' }}>{m.bigNum}</div>
                  </div>
                </div>
                <div className="rounded-2xl p-5" style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <h3 className="font-black text-white text-xl mb-0.5">{m.name}</h3>
                  <p className="text-white/30 text-[11px] uppercase tracking-wider mb-3">{m.role}</p>
                  <p className="text-white/40 text-[13px] leading-relaxed mb-4">{m.bio}</p>
                  <div className="grid grid-cols-3 gap-3">
                    {m.stats.map(s => (
                      <div key={s.label}>
                        <div className="font-black text-white text-base leading-none mb-0.5">{s.num}</div>
                        <div className="text-[10px] text-white/25 uppercase tracking-wider">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Desktop bento */}
              <div className="hidden md:grid gap-3" style={{ gridTemplateColumns: '280px 1fr 1fr 180px', gridTemplateRows: 'auto auto auto' }}>

                {/* Photo — spans all rows */}
                <div className="relative rounded-2xl overflow-hidden" style={{ gridColumn: '1', gridRow: '1 / 4', minHeight: '400px' }}>
                  <Image src={m.photo} alt={m.name} fill className="object-cover object-top" />
                  <div className="absolute inset-x-0 bottom-0 h-28" style={{ background: 'linear-gradient(to top, rgba(5,0,10,0.75), transparent)' }} />
                  <div className="absolute bottom-5 left-5">
                    <div className="text-white/30 text-[10px] uppercase tracking-wider mb-1">{m.role}</div>
                    <div className="font-black text-white text-lg leading-tight">{m.name}</div>
                  </div>
                </div>

                {/* Big stat */}
                <div className="rounded-2xl p-6 flex flex-col justify-between col-span-2" style={{ gridColumn: '2 / 4', gridRow: '1', background: 'linear-gradient(135deg,rgba(3,239,35,0.06),rgba(0,187,245,0.06))', border: '1px solid rgba(3,239,35,0.12)' }}>
                  <p className="text-white/30 text-[11px] font-semibold uppercase tracking-wider">{m.bigLabel}</p>
                  <div className="font-black gradient-text leading-none tabular-nums" style={{ fontSize: 'clamp(2.8rem, 5vw, 4rem)' }}>{m.bigNum}</div>
                </div>

                {/* Stats cluster */}
                <div className="rounded-2xl p-5 flex flex-col justify-around" style={{ gridColumn: '4', gridRow: '1', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {m.stats.map(s => (
                    <div key={s.label}>
                      <div className="font-black text-white leading-none mb-0.5" style={{ fontSize: '1.2rem' }}>{s.num}</div>
                      <div className="text-[9px] text-white/25 uppercase tracking-wider">{s.label}</div>
                    </div>
                  ))}
                </div>

                {/* Voice */}
                <div className="rounded-2xl p-6 flex items-center col-span-2" style={{ gridColumn: '2 / 4', gridRow: '2', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="font-bold text-white italic leading-snug" style={{ fontSize: 'clamp(0.95rem, 1.5vw, 1.1rem)' }}>
                    {m.voice}
                  </p>
                </div>

                {/* Tags */}
                <div className="rounded-2xl p-5 flex flex-col justify-center gap-2" style={{ gridColumn: '4', gridRow: '2', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  {m.tags.map(t => (
                    <span key={t} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full text-white/50 text-center" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>{t}</span>
                  ))}
                </div>

                {/* Bio */}
                <div className="rounded-2xl p-6" style={{ gridColumn: '2 / 5', gridRow: '3', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}>
                  <p className="text-white/40 text-[13px] leading-relaxed">{m.bio}</p>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
