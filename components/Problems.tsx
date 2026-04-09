import Image from 'next/image'
import { Reveal } from './Reveal'

const problems = [
  {
    num: '01',
    title: 'Prowizje OTA',
    bullets: [
      '15-20% prowizji od każdej rezerwacji dla Booking.com',
      'Twoja strona pozyskuje gościa 4x taniej',
      'Gość wróci przez OTA, nie bezpośrednio do Ciebie',
    ],
    photo: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '02',
    title: 'Puste pokoje poza sezonem',
    bullets: [
      'Różnica 40% vs 65% obłożenia to kwestia strategii, nie lokalizacji',
      'Brak kampanii i pakietów celowanych w martwe terminy',
      'Daty stoją puste, bo nikt ich aktywnie nie sprzedaje',
    ],
    photo: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    title: 'Brak grup i eventów',
    bullets: [
      'Grupy firmowe i konferencje to najlepsza marża w hotelarstwie',
      'Większość obiektów nie ma żadnego systemu B2B',
      'Sale konferencyjne i pokoje grupowe stoją nietkięte',
    ],
    photo: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    title: 'Przepalony budżet reklamowy',
    bullets: [
      'Nie wiesz które reklamy faktycznie przynoszą rezerwacje',
      'CTR który powinien być 3x wyższy niż jest teraz',
      'Połowa konwersji ucieka przez źle zoptymalizowaną stronę',
    ],
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
  },
]

export function Problems() {
  return (
    <section id="problemy" className="bg-violet-pale py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Diagnoza</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Gdzie konkretnie<br />tracisz pieniądze?
          </h2>
          <p className="text-text-main/60 max-w-lg text-[15px] leading-relaxed mb-14">
            Nie w jednym miejscu. W czterech. I każde z nich da się zatrzymać.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-violet/10 rounded-2xl overflow-hidden border border-violet/10">
          {problems.map((p, i) => (
            <Reveal key={p.num} delay={i * 80}>
              <div className="group relative bg-white overflow-hidden h-full min-h-[320px]">

                {/* Photo */}
                <div className="absolute inset-0">
                  <Image
                    src={p.photo}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/80 to-midnight/25" />
                  <div className="absolute inset-0 bg-violet/20 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  <span className="font-black text-[3rem] leading-none text-white/10 group-hover:text-brand-green/30 transition-colors duration-500 mb-2 block">
                    {p.num}
                  </span>
                  <h3 className="font-bold text-white text-xl mb-4 leading-tight">{p.title}</h3>

                  {/* Bullet points */}
                  <ul className="flex flex-col gap-2">
                    {p.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <span
                          className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-[0.45em]"
                          style={{ background: 'linear-gradient(135deg, #03ef23, #00bbf5)' }}
                        />
                        <span className="text-white/75 text-[13.5px] leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
