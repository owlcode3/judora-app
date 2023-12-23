import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `OurProjects`.
 */
export type OurProjectsProps = SliceComponentProps<Content.OurProjectsSlice>;

/**
 * Component for "OurProjects" Slices.
 */
const OurProjects = ({ slice }: OurProjectsProps): JSX.Element => {
  return (
    <section
      className="pt-8 pb-12 px-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="relative flex flex-col h-auto border-4 rounded-none border-[#ffff]">
        <span className="absolute font-bold text-white text-5xl right-[21rem] top-[12.7rem]">{slice.primary.text}</span>
        <PrismicNextImage field={slice.primary.image} />

        <div className="grid grid-cols-6 gap-2 mt-[0.4rem]">
          {slice.items.map(({ image_round, bg_image }, index) => (
            <div key={index} className="relative overflow-hidden h-full rounded-t-none rounded-l-none" >
              <PrismicNextImage className="object-cover w-full h-full" field={bg_image} />
              <PrismicNextImage className="absolute right-5 top-5 w-7" field={image_round} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurProjects;
