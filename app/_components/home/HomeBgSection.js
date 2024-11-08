import Image from "next/image";
import HeroSectionBG from "../hero/HeroSectionBG";
import HeroText from "./HeroText";
import HeroImage from "../hero/HeroImage";

import BG from "@/public/BG.png";
import BgShape from "@/public/BgShape.png";

function HomeBgSection() {
  return (
    <>
      <HeroSectionBG>
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
