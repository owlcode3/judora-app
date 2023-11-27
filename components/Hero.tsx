import { createClient } from "@/prismicio"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { PrismicRichText } from "@prismicio/react"

async function Hero() {

  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <div className="mt-[10.7rem]">
      <div className="text-white font-medium uppercase text-[2.3rem] max-w-[39rem] leading-[3rem] overflow-hidden">
        <PrismicRichText field={settings.data.hero_heading} />
      </div>

      <PrismicNextLink
        className="w-40 h-14 mt-8 flex items-center justify-center bg-[#0065E7] rounded-[10px] text-white text-base"
        field={settings.data.hero_link[0]?.link}
      >
        {settings.data.hero_link[0]?.label}
      </PrismicNextLink>

      <div className="flex justify-between mt-20 max-w-[25rem]">
        {settings.data.hero_image.map(({ text, image }) => (
          <div key={text} className="flex flex-col items-center justify-center gap-3">
            <div className="w-16 h-16">
              <PrismicNextImage field={image} />
            </div>
            <div className="text-white w-24 text-center leading-[1.4]">
              <span>{text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero