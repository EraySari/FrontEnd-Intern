import image1 from "@/public/image1.png";
import image2 from "@/public/image2.png";
import image3 from "@/public/image3.png";
import image4 from "@/public/image4.png";
import image5 from "@/public/image5.png";
import image6 from "@/public/image6.png";

import HeroHand from "./HeroHand";

function HeroImage() {
  return (
    <div className="flex justify-center items-end space-x-2 sm:space-x-4 absolute bottom-0 w-full text-center">
      <HeroHand image={image1} />
      <HeroHand image={image2} />
      <HeroHand image={image3} />
      <HeroHand image={image4} />
      <HeroHand image={image5} />
      <HeroHand image={image6} />
    </div>
  );
}

export default HeroImage;
