const clients = [
  'Hotel Skipper ★★★★',
  'Kadyny Folwark & SPA',
  'Hotel Arłamów',
  'Nosalowy Dwór Resort',
  'Hotel Mercure',
  'Restauracja Bulaj',
  'Aqua Hotel',
  'Villa Nova',
]

export function LogosBar() {
  return (
    <div className="bg-white border-b border-gray1">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex items-center gap-6 flex-wrap md:flex-nowrap">
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-gray3 whitespace-nowrap flex-shrink-0">
          Pracowali z nami
        </span>
        <div className="w-px h-5 bg-gray1 hidden md:block flex-shrink-0" />
        <div className="ticker-wrap flex-1 overflow-hidden">
          <div className="ticker-track">
            {[...clients, ...clients].map((name, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-3 px-6 text-[13px] font-semibold text-gray3 hover:text-text-main transition-colors whitespace-nowrap cursor-default"
              >
                {name}
                <span className="text-gray2">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
