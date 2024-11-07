import Image from "next/image";

function MidImage({ image }) {
  return (
    <div className="flex justify-center items-center px-20 sm:px-28 lg:px-40">
      <Image src={image} alt="midImage" />
    </div>
  );
}

export default MidImage;
