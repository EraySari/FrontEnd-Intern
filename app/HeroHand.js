import Image from "next/image";

function HeroHand({ image }) {
  return (
    <Image
      src={image}
      alt="hero-hand"
      className="translate-y-8 w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48"
    />
  );
}

export default HeroHand;
