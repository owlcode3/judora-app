import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactUs`.
 */
export type ContactUsProps = SliceComponentProps<Content.ContactUsSlice>;

/**
 * Component for "ContactUs" Slices.
 */
const ContactUs = ({ slice }: ContactUsProps): JSX.Element => {
  return (
    <section
      style={{ backgroundImage: `url(${slice.primary.bg_image.url})` }}
      className="flex flex-col h-[37rem] mt-1 p-8 bg-cover bg-no-repeat"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage className="w-full h-full object-cover" field={slice.primary.image} />
    </section>
  );
};

export default ContactUs;
