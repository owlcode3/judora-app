"use client"

import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, JSXMapSerializer, SliceComponentProps } from "@prismicio/react";

import { useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import { messageSchema } from "@/utils/schema";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from "zod";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";




const components: JSXMapSerializer = {
  heading2: ({ children }) => (
    <h2 className="text-black font-medium text-4xl mb-10 text-center">{children}</h2>
  )
}


/**
 * Props for `GetInTouch`.
 */
export type GetInTouchProps = SliceComponentProps<Content.GetInTouchSlice>;


/**
 * Component for "GetInTouch" Slices.
 * 
 */



type MessageFormValue = z.infer<typeof messageSchema>

const GetInTouch = ({ slice }: GetInTouchProps): JSX.Element => {
  const [loading, setLoading] = useState(false)

  const form = useForm<MessageFormValue>({
    resolver: zodResolver(messageSchema),
    defaultValues: {
      name: "", surName: "", email: "", phoneNumber: "", companyName: "", scheduledDate: undefined, message: ""

    }
  })

  const onSubmit = async (data: MessageFormValue) => {
    try {
      setLoading(true)

      await axios.post(`/api/message`, data)
      toast.success("message sent successfully")
      form.reset()
    } catch (error) {
      toast.error("Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      className="w-full pt-8"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {slice.primary.blank_form ? "" :
        <>
          <PrismicRichText field={slice.primary.text} components={components} />

          <div className="flex gap-10 w-full pl-9 pr-14 py-7 h-[60rem]">
            <div className="h-full w-[56%]">
              <PrismicNextImage className="object-cover w-full h-[100%]" field={slice.primary.image} priority={true} />
            </div>

            <div className=" w-[46%] h-[100%] relative">
              {/* {slice.primary.blank_form && <div className=" w-full h-[100%] absolute z-30 top-0 bottom-0 bg-white"></div>} */}
              <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col justify-between w-full h-[100%] font-medium text-[0.93rem]">

                <div className="flex justify-between w-full">
                  <div className="w-[47%] flex flex-col gap-1">
                    <input
                      aria-label="name"
                      className="p-[1rem] rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] w-[100%]"
                      type="text"
                      placeholder={slice.primary.name as string}
                      autoFocus
                      {...form.register('name')}
                    />

                    {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.name?.message}</p>}
                  </div>

                  <div className="w-[47%] flex flex-col gap-1">
                    <input
                      aria-label="surname"
                      className="p-[1rem] rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] w-[100%]"
                      type="text"
                      placeholder={slice.primary.surname as string}
                      autoFocus
                      {...form.register('surName')}
                    />

                    {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.surName?.message}</p>}
                  </div>
                </div>

                <div className=" flex flex-col gap-1">
                  <input
                    aria-label="email"
                    className="p-[1rem] rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] w-full"
                    type="email"
                    placeholder={slice.primary.email as string}
                    {...form.register('email')}
                  />

                  {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.email?.message}</p>}
                </div>

                <div className=" flex flex-col gap-1">
                  <input
                    aria-label="phone-number"
                    className="p-[1rem] rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] w-full"
                    type='tel'
                    placeholder={slice.primary.phone_number as string}
                    {...form.register('phoneNumber')}
                  />

                  {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.phoneNumber?.message}</p>}
                </div>

                <div className=" flex flex-col gap-1">
                  <input
                    aria-label="company_name"
                    className="p-[1rem] rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] w-full"
                    type='text'
                    placeholder={slice.primary.company_name as string}
                    {...form.register('companyName')}
                  />

                  {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.companyName?.message}</p>}
                </div>

                <div className=" flex flex-col gap-1">
                  <Controller
                    control={form.control}
                    name='scheduledDate'
                    render={({ field }) => (
                      <DatePicker
                        // showIcon
                        className="rounded-xl text-black focus:outline-none placeholder-[#000000] placeholder-opacity-70 bg-[#D9D9D9] py-[1.5rem] p-[1rem] w-full"
                        wrapperClassName={"w-full py-[1.5rem] p-[1rem]"}

                        placeholderText={`${slice.primary.select_date}`}
                        onChange={(date) => field.onChange(date)}
                        selected={field.value}

                      />
                    )}
                  />
                  {<p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.scheduledDate?.message}</p>}
                </div>

                <div className=" flex flex-col gap-1">
                  <textarea
                    aria-label="message"
                    className="p-[1.3rem] resize-none overflow-auto rounded-xl text-black focus:outline-none bg-[#D9D9D9] w-full h-[20rem] placeholder-[#000000] placeholder-opacity-70"
                    placeholder={slice.primary.pre_order as string}
                    rows={5}
                    cols={33}
                    {...form.register('message')}
                  />

                  {
                    <p className='text-[.8rem] ml-[.3rem] text-[red] leading-[1.1]'>{form.formState.errors?.message?.message}
                    </p>
                  }
                </div>

                <div className="flex justify-between">

                  <div className="w-[48%] h-[4.5rem]">
                    <button className='text-white font-medium self-center w-full h-full text-xl bg-[#0935DE] rounded-xl' type="submit" disabled={loading}>
                      {slice.primary.send}
                    </button>
                  </div>

                  <div className="w-[48%] h-[4.5rem]">
                    <a href={`tel:${slice.primary.phone_number_to_call}`} className='text-white flex justify-center items-center font-medium self-center w-full h-full text-xl bg-[#0935DE] rounded-xl'>
                      {slice.primary.call_us}
                    </a>
                  </div>

                </div>

              </form>

            </div>

          </div>
        </>
      }
    </section>
  );
};

export default GetInTouch;

