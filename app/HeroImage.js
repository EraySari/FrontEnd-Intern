import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.png";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";

import Image from "next/image";

function HeroImage() {
  return (
    <div className="flex justify-center items-end space-x-2 sm:space-x-4 absolute bottom-0 w-screen text-center mx-5">
      <Image
        src={image1}
        alt="image1"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
      <Image
        src={image2}
        alt="image2"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
      <Image
        src={image3}
        alt="image3"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
      <Image
        src={image4}
        alt="image1"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
      <Image
        src={image5}
        alt="image2"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
      <Image
        src={image6}
        alt="image3"
        className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
      />
    </div>
  );
}

export default HeroImage;
