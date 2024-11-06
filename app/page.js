import HeroSectionBG from "./HeroSectionBG";
import BG from "@/public/BG.png";
import BgShape from "@/public/BgShape.png";
import HeroText from "./HeroText";
import Image from "next/image";
import HeroImage from "./HeroImage";
import Into from "./Into";

function Page() {
  return (
    <>
      <HeroSectionBG className="relative z-0">
        <Image src={BG} alt="Hero Section" className="w-full h-screen" />
        <Image
          src={BgShape}
          alt="shape"
          className="absolute w-full h-screen top-0"
        />
        <HeroText />
        <HeroImage />
      </HeroSectionBG>
      <Into
        baslik={"Who we are"}
        text={
          "We love what we do and create partnerships with our clients to ensure their digital transformation is positioned for long-term success.We believe that the human dimensions essential to start any successful project and that this is where splendid emotional relationships between the company and people are born."
        }
      />
    </>
  );
}

export default Page;
