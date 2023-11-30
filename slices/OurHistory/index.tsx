import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 id='animate-heading' className="text-black font-semibold text-4xl mb-5">{children}</h2>
  ),

  list: ({ children }) => (
    <ol className="text-black list-outside list-disc ml-6 text-[.92rem] font-normal">
      {children}
    </ol>
  ),

  paragraph: ({ children }) => (
    <p className="text-black text-[.92rem] font-normal">
      {children}
    </p>
  )
}

/**
 * Props for `OurHistory`.
 */
export type OurHistoryProps = SliceComponentProps<Content.OurHistorySlice>;

/**
 * Component for "OurHistory" Slices.
 */
const OurHistory = ({ slice }: OurHistoryProps): JSX.Element => {
  return (
    <section
      className=""
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex gap-12 w-fit px-10 py-7 h-[50rem]">

        <div className="flex flex-col justify-between max-w-[38rem] h-ful">
          {slice.items.map(({ heading, paragraph }, index) => (
            <div key={index}>
              <PrismicRichText field={heading} components={components} />
              <PrismicRichText field={paragraph} components={components} />
            </div>
          ))}
        </div>

        <div className="h-full w-[40rem]">
          <PrismicNextImage className="object-cover w-full h-[50%]" field={slice.primary.image1} />
          <PrismicNextImage className="object-cover w-full h-[50%]" field={slice.primary.image2} />
        </div>

      </div>
    </section>
  );
};

export default OurHistory;
