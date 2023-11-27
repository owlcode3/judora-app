import { createClient } from "@/prismicio"
import addLineBreakToSubstring from "@/utils/line-break"
import { PrismicNextImage } from "@prismicio/next"
import clsx from "clsx"

async function Footer() {

  const client = createClient()
  const settings = await client.getSingle("settings")

  return (
    <div className="bg-[url('/background.webp')] bg-cover bg-no-repeat pt-8 pb-[1.7rem]">

      <div className="flex items-center bg-white w-full h-14">
        <div className="flex justify-around items-center bg-[#0464E8] h-[92%] w-full px-5">
          {Array.from({ length: 12 }, (num, i) => i).map((num) => (
            <span key={num} className="font-semibold text-white text-[1.2rem] uppercase">{settings.data.site_title}</span>
          ))}
        </div>
      </div>

      <div className="h-24 relative flex justify-center items-center pb-1">
        <div className="flex justify-between font-semibold text-black text-sm px-28 w-full">
          <span>&copy; {new Date().getFullYear()} {settings.data.site_title}.com</span>
          <span className="capitalize">{settings.data.footer_all_right_reserved}</span>
          <span>{settings.data.footer_designed_by}</span>
        </div>
        <span className="w-full h-2 rounded-none border block bg-[#D9D9D9] absolute bottom-0"></span>
      </div>

      <div className="py-7 pb-10 px-8 flex gap-10 font-medium text-[.9rem] leading-6">
        <PrismicNextImage className="w-[13rem] h-[10.5rem] mt-1" field={settings.data.footer_logo_image} />

        <div className="flex flex-col gap-[1.8rem]">
          {
            settings.data.navigation.map(({ label, link }, index) => (
              <span className={clsx(index == 0 ? "text-[#0A57CA]" : "")} key={label}>{label}</span>
            ))
          }
        </div>

        <div className="flex flex-col max-w-[17.5rem] gap-[.4rem]">
          {
            settings.data.footer_our_services.map((item, index) => (
              <span className={clsx("leading-[1.4]", index == 0 ? "text-[#0A57CA]" : "", item.label?.includes("(E-waste)") ? "max-w-[14rem]" : "")} key={index}>{item.label}</span>
            ))
          }
        </div>

        <div className="text-black flex flex-col gap-[.1rem] mt-2">
          <span>{settings.data.footer_contact_details[0]?.label}</span>
          <div className="flex gap-1">
            <span>{settings.data.footer_contact_details[1]?.label} </span>
            <div className="flex flex-col items-start">
              <span>
                {settings.data.footer_contact_details[2]?.label}
              </span>
              <span>
                {settings.data.footer_contact_details[3]?.label}
              </span>
            </div>
          </div>
          <p className="max-w-[16rem]">
            {settings.data.footer_contact_details[4]?.label}
          </p>
          <p className="max-w-[19.5rem]"
            dangerouslySetInnerHTML={{ __html: settings.data.footer_contact_details[5]!.label!.replace("Crescent,", "Crescent," + `<br />`) }}
          />
        </div>

        <div className="flex flex-col gap-[.8rem] mt-2">
          {
            settings.data.footer_social_media_links.map(({ label, image }) => (
              <a key={label} href='/' className="flex gap-2 items-center">
                <PrismicNextImage className="w-[2rem] h-[2rem]" field={image} />
                <span>
                  {label}
                </span>
              </a>
            ))
          }
        </div>
      </div>

    </div>
  )
}
;

export default Footer

