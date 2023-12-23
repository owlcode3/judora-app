import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
   try {
      const { name, surName, email, phoneNumber, companyName, scheduledDate, message } =
         await req.json();

      if (
         !name &&
         !surName &&
         !email &&
         !phoneNumber &&
         !companyName &&
         !scheduledDate &&
         !message
      ) {
         return NextResponse.json({ message: "Missing required data" });
      }

      const data = await prismadb.sender.create({
         data: {
            name,
            surName,
            email,
            phoneNumber,
            companyName,
            scheduledDate,
            message
         }
      });

      return NextResponse.json(data);
   } catch (error) {
      return new NextResponse("Internal error", { status: 500 });
   }
}
