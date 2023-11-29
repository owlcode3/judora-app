import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Operations`.
 */
export type OperationsProps = SliceComponentProps<Content.OperationsSlice>;

/**
 * Component for "Operations" Slices.
 */
const Operations = ({ slice }: OperationsProps): JSX.Element => {
  return (
    <section
      className="bg-[#0065E7] h-24 w-full"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="flex items-center justify-end gap-3 w-[76rem] mx-auto h-full">
        {slice.items.map(item => (
          <div key={item.text} className="flex items-center">
            <PrismicNextImage className="w-6 mr-1" field={item.image} />
            <span className="text-white font-bold text-[1.2rem]">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Operations;
