import Link from "next/link";
import { createClient } from '@/prismicio'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";


async function Header() {

  const client = createClient()

  const settings = await client.getSingle("settings")


  return (
    <div className="flex items-center w-[49.8rem]">
      <Link href='/' scroll={false}>
        <PrismicNextImage className="w-40 h-14" field={settings.data.site_logo} />
      </Link>

      <nav className="flex justify-between ml-auto w-[28rem] text-white text-lg font-semibold">
        {
          settings.data.navigation.map(({ label, link }) => (
            <PrismicNextLink key={label} field={link} className="linkstyle capitalize">{label}</PrismicNextLink>))
        }
      </nav>
    </div>
  )
}

export default Header