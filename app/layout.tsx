import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { createClient, repositoryName } from '@/prismicio'
import { PrismicPreview } from '@prismicio/next'
import ToastProvider from '@/providers/toast-provider'
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import SplittingTextClientOnlyComponent from '@/utils/load-splitting-text'
import ScrollPageToTop from '@/utils/scroll-page-to-top'


const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"] })

export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const settings = await client.getSingle("settings")


  return {
    metadataBase: new URL('http://localhost:3000'),
    title: settings.data.site_title || "Judora",
    description: settings.data.meta_description || "Judora integrated services",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    },
    icons: {
      icon: '/icon.svg',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html className={poppins.className} lang="en">
      <ScrollPageToTop />
      <body>
        <ToastProvider />
        <SplittingTextClientOnlyComponent>
          <Head />
          {children}
          <Footer />
        </SplittingTextClientOnlyComponent>
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html >
  )
}
