import { Content } from "@prismicio/client";
import { createClient } from "@/prismicio"
import { PrismicNextImage } from "@prismicio/next";
import { JSXMapSerializer, PrismicRichText, SliceComponentProps } from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-black max-w-[45rem] font-semibold text-[1.70rem] mb-3 leading-[1]"
    >{children}</h2>
  ),

  heading3: ({ children }) => (
    <p className="text-black font-normal mb-1 mt-10 text-[1rem]"
    >{children}</p>
  ),

  paragraph: ({ children }) => (
    <p className="text-black max-w-[48rem] font-normal text-[0.9rem] mb-4">{children}</p>
  ),

  list: ({ children }) => (
    <ul className="text-black list-outside list-image-none text-[1rem] font-normal">
      {children}
    </ul>),

}

/**
 * Props for `ServicesOperation`.
 */
export type ServicesOperationProps =
  SliceComponentProps<Content.ServicesOperationSlice>;

/**
 * Component for "ServicesOperation" Slices.
 */
const ServicesOperation = async ({ slice }: ServicesOperationProps): Promise<JSX.Element> => {
  const client = createClient()
  const ourServices = await client.getSingle("our_service")

  return (
    <section
      className="py-14"
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
            <div className="text-black font-normal max-w-[73.8rem] text-[1rem]">
              <PrismicRichText field={slice.primary.paragraph} />
            </div>
          </div>

          <div className="flex flex-col justify-between max-w-[38rem]">
            <PrismicRichText field={ourServices.data.title} components={components} />
            <div className="flex flex-col gap-5">
              {ourServices.data.list.map((list, key) => (
                <PrismicRichText key={key} field={list.list_item} components={components} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOperation;