import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `JudoraGroup`.
 */
export type JudoraGroupProps = SliceComponentProps<Content.JudoraGroupSlice>;

/**
 * Component for "JudoraGroup" Slices.
 */
const JudoraGroup = ({ slice }: JudoraGroupProps): JSX.Element => {
  return (
    <section
      className="flex flex-col items-center justify-center gap-8 pt-16"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading3: ({ children }) => (
          <h3 className="text-black font-medium max-w-[52rem] text-center text-sm">{children}</h3>
        )
      }} />
      <div className="w-[64rem] grid grid-cols-3 gap-3">
        {slice.items.map(({ image, text }) => (
          <div key={text} className="relative">
            <PrismicNextImage className="w-full h-full object-contain" field={image} />

            <div className="absolute bottom-0 w-full h-[5.2rem] bg-[rgba(13,12,12,0.7)] flex flex-col items-center justify-center text-white font-medium">
              <span className="max-w-[11rem] text-center text-xs leading-[1.7]">
                {text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JudoraGroup;
