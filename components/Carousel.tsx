"use client"
import { SettingsDocument } from "@/prismicio-types";
import { PrismicNextImage } from "@prismicio/next";
import { clsx } from "clsx";
import { useEffect, useRef, useState } from "react";

type Props = {
  settings: SettingsDocument<string>
}
function Carousel({ settings }: Props) {

  const carouselRef = useRef(null);
  const [slideX, setSlideX] = useState(0);

  useEffect(() => {
    const slide = setInterval(() => setSlideX(prev => (prev === 4 ? 0 : prev + 1)), 4000);
    return () => clearInterval(slide);
  }, []);

  return (
    <ul ref={carouselRef} className="list-none absolute top-0 bottom-0 w-full h-full overflow-hidden z-[-1]">
      <li style={{ transform: `translateX(${100 * (0 - slideX)}%)` }} className="absolute w-full h-full">
        <PrismicNextImage className="w-full h-full" field={settings.data.hero_background_image1} />
      </li>
      <li style={{ transform: `translateX(${100 * (1 - slideX)}%)` }} className="absolute w-full h-full">
        <PrismicNextImage className="w-full h-full" field={settings.data.hero_background_image2} />
      </li>
      <li style={{ transform: `translateX(${100 * (2 - slideX)}%)` }} className="absolute w-full h-full">
        <PrismicNextImage className="w-full h-full" field={settings.data.hero_background_image3} />
      </li>
      <li style={{ transform: `translateX(${100 * (3 - slideX)}%)` }} className="absolute w-full h-full">
        <PrismicNextImage className="w-full h-full" field={settings.data.hero_background_image4} />
      </li>
      <li style={{ transform: `translateX(${100 * (4 - slideX)}%)` }} className="absolute w-full h-full">
        <PrismicNextImage className="w-full h-full" field={settings.data.hero_background_image5} />
      </li>
    </ul>
  );
}

export default Carousel;
