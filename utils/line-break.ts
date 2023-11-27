import { KeyTextField } from "@prismicio/client";

export default function addLineBreakToSubstring(
   originalString: KeyTextField | undefined,
   substring: string
) {
   if (!originalString) return;
   // Find the index of the substring in the original string

   const index = originalString.indexOf(substring);

   // Check if the substring is found
   if (index !== -1) {
      // Add a line break at the end of the substring
      const modifiedString =
         originalString.slice(0, index + substring.length) +
         `<br />` +
         originalString.slice(index + substring.length);
      console.log(modifiedString);
      return modifiedString;
   } else {
      // Substring not found, return the original string
      return originalString;
   }
}
