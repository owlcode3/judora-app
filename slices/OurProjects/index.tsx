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

        <div className="grid grid-cols-6 gap-1 mt-1">
          {slice.items.map(({ image_round, bg_image, text, logo_image }, index) => (
            <div key={index} className="relative overflow-hidden h-full rounded-t-none border-t-[2px] rounded-l-none border-l-[2px]" >
              <PrismicNextImage className="object-cover w-full h-full" field={bg_image} />
              <div className="flex flex-col justify-between items-center absolute bottom-12 w-full h-[55%]">
                <PrismicNextImage className="w-28" field={logo_image} />
                <span className="font-medium text-white text-base text-center flex items-end h-24 max-w-[5.5rem] leading-5">{text}</span>
              </div>
              <PrismicNextImage className="absolute right-5 top-5 w-7" field={image_round} />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default OurProjects;
