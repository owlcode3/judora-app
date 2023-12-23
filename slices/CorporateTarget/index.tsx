"use client"

import { useEffect } from "react";
import { AppendSpanElement, IO } from "@/lib/utils";
import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";
import { gsap } from "gsap";
import Splitting from "splitting"
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 id='animate-heading' className="text-[#0A57CA] font-bold text-5xl mb-1">{children}</h2>
  )
}

/**
 * Props for `CorporateTarget`.
 */
export type CorporateTargetProps =
  SliceComponentProps<Content.CorporateTargetSlice>;

/**
 * Component for "CorporateTarget" Slices.
 */
const CorporateTarget = ({ slice }: CorporateTargetProps): JSX.Element => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      import('splitting').then(({ default: Splitting }) => {

        const heading = document.querySelectorAll("#animate-heading")!;
        const paragraph = document.querySelectorAll("#animate-paragraph")!

        heading.forEach(item => {
          const lines = Splitting({ target: item, by: "lines" });

          AppendSpanElement(lines);

          gsap.set(item.querySelectorAll(".word"), {
            yPercent: 205,
            opacity: 0,
            rotateX: 50,
            transformStyle: "preserve-3d"
          });

          IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
              yPercent: 0,
              opacity: 1,
              stagger: elem.length > 100 ? 0.02 : 0.03,
              duration: elem.length > 100 ? 0.65 : 0.75,
              ease: "easeOut"
            });
          });
        });

        paragraph.forEach(item => {
          const lines = Splitting({ target: item, by: "lines" });

          AppendSpanElement(lines);

          gsap.set(item.querySelectorAll(".word"), {
            yPercent: "105",
            opacity: 0,
            transformStyle: "preserve-3d"
          });

          IO(item, { threshold: 0.8 }).then(() => {
            const elem = item.querySelectorAll(".word");
            gsap.to(elem, {
              yPercent: 0,
              opacity: 1,
              stagger: elem.length > 100 ? 0.02 : 0.03,
              duration: elem.length > 100 ? 0.65 : 0.75,
              ease: "easeOut"
            });
          });
        });
      });
    }

  }, [])


  return (
    <section
      className="pt-20"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-14 h-[32rem] w-fit pl-9 pr-1">
        <div className="relative h-[100%] w-[34rem]">
          <PrismicNextImage className="object-cover w-full h-full" field={slice.primary.image_big} />
          <div className="absolute bottom-0 w-full h-[5.6rem] bg-[rgba(13,12,12,0.4)] flex items-center justify-between pl-5 pr-10 text-white font-medium">
            <PrismicNextImage className="w-14" field={slice.primary.image_small} />
          </div>
        </div>

        <div className="flex flex-col justify-between h-[94%]">
          {slice.items.map(({ heading, paragraph }, index) => (
            <div key={index} className="">
              <PrismicRichText field={heading} components={components} />
              <PrismicRichText field={paragraph} components={{
                paragraph: ({ children }) => (
                  <p id='animate-paragraph' className={clsx("text-[#000000] font-medium text-[0.79rem]", index == 0 ? "max-w-[36rem]" : index == 1 ? "max-w-[34rem]" : "max-w-[35rem]")}>{children}
                  </p>

                )
              }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CorporateTarget;
