import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import clsx from "clsx";

/**
 * Props for `CorporateTarget`.
 */
export type CorporateTargetProps =
  SliceComponentProps<Content.CorporateTargetSlice>;

/**
 * Component for "CorporateTarget" Slices.
 */
const CorporateTarget = ({ slice }: CorporateTargetProps): JSX.Element => {
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

        <div className="flex flex-col justify-between">
          {slice.items.map(({ heading, paragraph }, index) => (
            <div key={index}>
              <PrismicRichText field={heading} components={{
                heading2: ({ children }) => (
                  <h2 id='animate-heading' className="text-[#0A57CA] font-bold text-4xl mb-5">{children}</h2>

                )
              }} />

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
