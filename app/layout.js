import "@/app/_styles/globals.css";
import { Manrope } from "next/font/google";
import HeroSectionBG from "./HeroSectionBG";
import BG from "@/public/BG.png";
import BgShape from "@/public/BgShape.png";
import HeroText from "./HeroText";
import Image from "next/image";
import HeroImage from "./HeroImage";

export const metadata = {
  title: "Frontend Intern", //web sayfasi title
};

const manrope = Manrope({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} bg-primary min-h-screen`}>
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
        <main>sdfsdfkjdsnfkjsdfn</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
