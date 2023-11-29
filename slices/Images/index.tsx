import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Images`.
 */
export type ImagesProps = SliceComponentProps<Content.ImagesSlice>;

/**
 * Component for "Images" Slices.
 */
const Images = ({ slice }: ImagesProps): JSX.Element => {
  return (
    <section
      className="px-9 pt-10 mb-8 h-[17rem]"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div id="animate-image" className="flex flex-nowrap justify-between gap-5 w-full h-full">
        {slice.items.map(({ image }, index) => (
          <PrismicNextImage className="w-[17rem]" key={index} field={image} />
        ))}
      </div>
    </section>
  );
};

export default Images;
