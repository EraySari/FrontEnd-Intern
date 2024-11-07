import Image from "next/image";

function HeroHand({ image }) {
  return (
    <Image
      src={image}
      alt="hero-hand"
      className="translate-y-2 sm:translate-y-5 md:translate-y-7 lg:translate-y-12 w-12 sm:w-24 md:w-28 lg:w-40 xl:w-48"
    />
  );
}

export default HeroHand;
