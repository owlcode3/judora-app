import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import { createClient, repositoryName } from '@/prismicio'
import Head from '@/components/Head'
import Footer from '@/components/Footer'
import { PrismicPreview } from '@prismicio/next'

const poppins = Poppins({ subsets: ['latin'], weight: ["300", "400", "500", "600", "700", "800"] })



export async function generateMetadata(): Promise<Metadata> {

  const client = createClient()

  const settings = await client.getSingle("settings")


  return {
    title: settings.data.site_title || "Judora",
    description: settings.data.meta_description || "Judora integrated services",
    openGraph: {
      images: [settings.data.og_image.url || ""],
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
      <body>
        <Head />
        {children}
        <Footer />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html >
  )
}
