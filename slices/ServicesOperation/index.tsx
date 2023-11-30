import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-black max-w-[45rem] font-semibold text-[1.70rem] mb-3 leading-[1]"
    >{children}</h2>
  ),

  paragraph: ({ children }) => (
    <p className="text-black max-w-[48rem] font-normal text-[0.9rem] mb-4">{children}</p>
  )
}

/**
 * Props for `ServicesOperation`.
 */
export type ServicesOperationProps =
  SliceComponentProps<Content.ServicesOperationSlice>;

/**
 * Component for "ServicesOperation" Slices.
 */
const ServicesOperation = ({ slice }: ServicesOperationProps): JSX.Element => {
  return (
    <section
      className="mt-14 mb-2"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="py-7">
        <div className="w-fit px-20">
          <div className="flex gap-[2rem]">
            <div className="h-[100%] w-[30rem]">
              <PrismicNextImage className="object-cover w-full h-full" field={slice.primary.image} />
            </div>

            <div className="flex flex-col justify-between">
              {slice.items.map(({ paragraph, heading }, index) => (
                <div key={index}>
                  <PrismicRichText field={paragraph} components={components} />
                  <PrismicRichText field={heading} components={components} />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <div className="text-black font-normal max-w-[73.8rem]">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOperation;
