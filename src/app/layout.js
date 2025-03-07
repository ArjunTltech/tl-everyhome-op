import { Poppins, Ubuntu, Teko, Noto_Sans,Libre_Baskerville,Kaushan_Script } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/scss/style.scss'
import './assets/css/materialdesignicons.min.css'
import Script from 'next/script'
// import Preloader from './components/Pre-loader/preloader'
// import { Providers } from './Providers'

const poppins = Poppins({ 
  subsets: ['latin'],
  weight:['100','200','300','400','500','600','700','800','900'],
  variable: '--font-poppins',
})
const ubuntu = Ubuntu({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-ubuntu',
})
const teko = Teko({ 
  subsets: ['latin'],
  weight:['300','400','500','700'],
  variable: '--font-teko',
})
const noto = Noto_Sans({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-noto',
})
const libre = Libre_Baskerville({ 
  subsets: ['latin'],
  weight:['400','700'],
  variable: '--font-libre',
})
const kaushan = Kaushan_Script({ 
  subsets: ['latin'],
  weight:['400'],
  variable: '--font-kaushan',
})

export const metadata = {
  title: 'EveryHome | Your All-in-One Service Platform',
  description: 'EveryHome connects service providers and customers in one seamless platform. Book services, manage appointments, and streamline your life.',
  keywords: 'service booking, appointment management, home services, business solutions',
  openGraph: {
    title: 'EveryHome | Your All-in-One Service Platform',
    description: 'Your all-in-one platform for service booking and management',
    url: 'https://everyhome.tltechnologies.net',
    siteName: 'EveryHome',
    images: [{
      url: '/images/eh-logo.png',
      width: 1200,
      height: 630,
    }],
    type: 'website',
  },

}

const GA_TRACKING_ID ='G-LPTV55JYFJ'

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
        <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}');
          `}
        </Script>
      </head>
      <body className={`${poppins.variable} ${ubuntu.variable} ${teko.variable} ${noto.variable} ${libre.variable} ${kaushan.variable}`}>
  {/* <Providers> */}
        {children}
  {/* </Providers> */}
      </body>
    </html>
  )
}
