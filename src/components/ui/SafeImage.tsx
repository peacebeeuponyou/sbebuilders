 "use client";
 
 import Image, { ImageProps } from "next/image";
 import { useState } from "react";
 
 type Props = Omit<ImageProps, "alt"> & {
   alt: string;
   fallbackClassName?: string;
   fallbackText?: string;
 };
 
 export function SafeImage({
   alt,
   className,
   fallbackClassName,
   fallbackText,
   ...props
 }: Props) {
   const [error, setError] = useState(false);
 
   if (error) {
     return (
       <div
         className={
           fallbackClassName ||
           "w-full h-full flex items-center justify-center bg-muted text-muted-foreground"
         }
       >
         {fallbackText || alt}
       </div>
     );
   }
 
   return (
     <Image
       {...props}
       alt={alt}
       className={className}
       unoptimized
       onError={() => setError(true)}
     />
   );
 }
