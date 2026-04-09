import { Reveal } from './Reveal'

const basicFeatures = [
  'Kampanie Google Ads + Meta Ads',
  'Skupienie na rezerwacjach bezpośrednich',
  'Redukcja prowizji OTA',
  'Analityka i monitoring w czasie rzeczywistym',
  'Miesięczny raport z konkretnymi danymi',
]

const proFeatures = [
  'Wszystko z pakietu Basic',
  'Zaawansowane lejki sprzedażowe',
  'Retargeting niezdecydowanych gości',
  'Audyt konwersji strony (UX)',
  'Consulting strategiczny i revenue management',
  'Szkolenia zespołu z AI i narzędzi',
  'Content creation - wideo, zdjęcia, social media',
  'Dedykowany dzień pracy u Ciebie co kwartał',
  'Optymalizacja procesów operacyjnych',
]

export function Packages() {
  return (
    <section id="pakiety" className="bg-violet-pale py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <p className="section-tag">Pakiety</p>
          <h2 className="font-black text-violet leading-tight tracking-tight mb-4" style={{ fontSize: 'clamp(2rem, 4vw, 3.25rem)' }}>
            Wybierz poziom wsparcia
          </h2>
          <p className="text-text-main/60 text-[15px] leading-relaxed mb-14 max-w-lg">
            Dwa warianty dopasowane do skali obiektu. Bez umowy rocznej. Bez ukrytych kosztów.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic */}
          <Reveal>
            <div className="bg-white border border-gray1 rounded-2xl overflow-hidden hover:border-violet/20 transition-all hover:-translate-y-1 duration-300 h-full flex flex-col">
              <div className="p-7 border-b border-gray1">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray3 mb-2">Pakiet</div>
                <h3 className="font-black text-midnight text-[2rem] tracking-tight mb-3">Basic</h3>
                <p className="text-text-main/60 text-[14px] leading-relaxed">
                  Dla pensjonatów, aparthoteli i mniejszych obiektów HORECA, które chcą przestać przepalać budżet i zacząć mieć system.
                </p>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {basicFeatures.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-text-main/70">
                      <span className="w-4 h-4 rounded-full bg-violet/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#3c0080" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#konsultacja"
                  className="block text-center border border-violet/30 text-violet font-bold text-[14px] py-3.5 rounded-xl hover:bg-violet hover:text-white transition-all"
                >
                  Sprawdź czy Basic jest dla mnie
                </a>
              </div>
            </div>
          </Reveal>

          {/* Pro */}
          <Reveal delay={100}>
            <div className="bg-midnight border border-violet/30 rounded-2xl overflow-hidden hover:border-violet/60 transition-all hover:-translate-y-1 duration-300 h-full flex flex-col relative">
              <div className="absolute top-5 right-5">
                <span className="text-[10px] font-black uppercase tracking-[0.1em] gradient-btn px-3 py-1 rounded-full">
                  Popularne
                </span>
              </div>
              <div className="p-7 border-b border-white/[0.08]">
                <div className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/30 mb-2">Pakiet</div>
                <h3 className="font-black text-white text-[2rem] tracking-tight mb-3">Pro</h3>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  Dla hoteli, SPA i obiektów konferencyjnych, które traktują marketing jako kluczowy element biznesu i chcą dominować w regionie.
                </p>
              </div>
              <div className="p-7 flex flex-col flex-1">
                <ul className="space-y-3 mb-8 flex-1">
                  {proFeatures.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-[14px] text-white/65">
                      <span className="w-4 h-4 rounded-full bg-brand-green/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l1.8 1.8L6.5 2" stroke="#03ef23" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#konsultacja"
                  className="block text-center gradient-btn font-bold text-[14px] py-3.5 rounded-xl shadow-lg shadow-brand-green/10"
                >
                  Sprawdź czy Pro jest dla mnie
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <p className="text-center text-[13px] text-text-main/40 mt-6">
            Nie wiesz który wybrać? Na bezpłatnej konsultacji powiemy Ci wprost, co ma sens dla Twojego obiektu.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
