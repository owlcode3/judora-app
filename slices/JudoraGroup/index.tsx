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
      className="min-h-[52rem] max-h-[52rem] flex flex-col items-center justify-center gap-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} components={{
        heading3: ({ children }) => (
          <h3 className="text-black font-medium max-w-[52rem] text-center text-sm">{children}</h3>
        )
      }} />
      <div className="w-[62rem] grid grid-cols-3 gap-3">
        {slice.items.map(({ image, text }) => (
          <div key={text} className="relative">
            <div className="max-h-[20rem]">
              <PrismicNextImage field={image} />
            </div>

            <div className="absolute bottom-0 w-full h-28 bg-[rgba(13,12,12,0.7)] shadow-2xl  flex flex-col items-center justify-center text-white font-medium">
              <div className="max-w-[15rem] text-center">
                {text}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JudoraGroup;
