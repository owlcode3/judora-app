"use client"

import { IO } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import gsap from "gsap";
import { useEffect } from "react";


/**
 * Props for `Images`.
 */
export type ImagesProps = SliceComponentProps<Content.ImagesSlice>;

/**
 * Component for "Images" Slices.
 */
const Images = ({ slice }: ImagesProps): JSX.Element => {

  useEffect(() => {

    const images = document.querySelectorAll("#animate-image")!;

    images.forEach(async image => {
      await IO(image, { threshold: 0.8 });

      gsap.set(image, {
        visibility: "visible",
        autoAlpha: 0,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)"
      });

      gsap.to(image, {
        autoAlpha: 1,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: 1.4,
        ease: "power2.inOut"
      });
    });
  }, [])

  return (
    <section
      className="px-9 pt-10 mb-8 h-[17rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex flex-nowrap justify-between gap-5 w-full h-full">
        {slice.items.map(({ image }, index) => (
          <PrismicNextImage id="animate-image" className="w-[17rem] h-[15rem] invisible" key={index} field={image} />
        ))}
      </div>
    </section>
  );
};

export default Images;
