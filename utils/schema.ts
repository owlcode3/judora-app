import { z } from "zod";

const phoneRegex = new RegExp(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/);

export const messageSchema = z.object({
   name: z.string().min(2, { message: "Name must be up to two characters or more." }).trim(),

   surName: z.string().min(2, { message: "sur-name must be up to two characters or more." }).trim(),

   email: z.string().trim().email({ message: "Enter a valid email." }),

   phoneNumber: z.string().regex(phoneRegex, "Invalid Number!"),

   companyName: z
      .string()
      .min(1, { message: "company name must be up to one character or more." })
      .trim(),

   scheduledDate: z.instanceof(Date, { message: "The Date field is required." }).refine(date => {
      const currentDate = new Date();
      return date >= currentDate;
   }, "The date can not be today or before today."),

   message: z.string().min(1, { message: "message can not be blank." }).trim()
});
