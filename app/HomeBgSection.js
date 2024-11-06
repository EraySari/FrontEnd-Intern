import Image from "next/image";
import HeroSectionBG from "./HeroSectionBG";
import HeroText from "./HeroText";
import HeroImage from "./HeroImage";

import BG from "@/public/BG.png";
import BgShape from "@/public/BgShape.png";

function HomeBgSection() {
  return (
    <>
      <HeroSectionBG className="relative ">
        <Image src={BG} alt="Hero Section" className="w-full h-screen" />
        <Image
          src={BgShape}
          alt="shape"
          className="absolute w-full h-screen top-0"
        />
        <HeroText />
        <HeroImage />
      </HeroSectionBG>
    </>
  );
}

export default HomeBgSection;
