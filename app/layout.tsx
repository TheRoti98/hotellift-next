import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

// STOLZL: Adobe Font - uncomment and add your kit ID in <head> to use Stolzl
// In tailwind.config.js, change fontFamily.sans to: ["'stolzl'", 'Poppins', 'system-ui', 'sans-serif']
// Then add this in the <head> section: <link rel="stylesheet" href="https://use.typekit.net/YOUR_KIT_ID.css" />

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: '4WebZones HORECA | Marketing dla hoteli który przynosi rezerwacje',
  description: 'Specjaliści od marketingu w hotelarstwie. Google Ads, Meta Ads, revenue management, AI dla Twojego zespołu. 24+ lata doświadczenia, 50+ obiektów HORECA.',
  openGraph: {
    title: '4WebZones HORECA | Marketing dla hoteli',
    description: 'Twój gość się zmienił. Twój marketing jeszcze nie. Bezpłatna analiza strat.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={poppins.variable}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','654130105386471');fbq('track','PageView');`,
          }}
        />
      </head>
      <body className="font-sans">{children}</body>
    </html>
  )
}
