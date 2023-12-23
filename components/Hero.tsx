"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { SettingsDocument } from "@/prismicio-types"
import { AppendSpanElement } from "@/lib/utils"
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next"
import { PrismicRichText, JSXMapSerializer } from "@prismicio/react"
import Splitting from "splitting"

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <h1 id='animate-h1' className="text-white font-medium uppercase text-[2.3rem] max-w-[39rem] leading-[1.1] invisible">{children}</h1>
  )
}

type Props = {
  settings: SettingsDocument<string>
}

function Hero({ settings }: Props) {

  useEffect(() => {

    const el = document.querySelector("#animate-h1")!;
    const result = Splitting({ target: el, by: "lines" });

    AppendSpanElement(result);

    const timeline = gsap.timeline();

    timeline.fromTo(
      el.querySelectorAll(".word"),
      {
        visibility: "visible",
        yPercent: 205,
        opacity: 0,
        rotateX: 50,
        transformStyle: "preserve-3d"
      },
      {
        yPercent: 0,
        opacity: 1,
        rotateX: 0,
        stagger: 0.03,
        duration: 0.75,
        ease: "easeOut"
      }
    );
    timeline.fromTo(
      document.querySelector(".read-more-link"),
      {
        visibility: "visible",
        yPercent: 20,
        opacity: 0,
        transformStyle: "preserve-3d"
      },
      {
        yPercent: 0,
        opacity: 1,
        duration: 0.75,
        ease: "easeOut"
      }
    );
  }, [])

  return (
    <div className="mt-[10.7rem]">
      <PrismicRichText field={settings.data.hero_heading} components={components} />

      <PrismicNextLink
        className="read-more-link w-40 h-14 mt-8 flex items-center justify-center bg-[#0065E7] rounded-[10px] text-white text-base invisible"
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