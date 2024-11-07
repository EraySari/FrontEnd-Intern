import Image from "next/image";

function ContactImage({ image }) {
  return (
    <div className="md:w-1/2 hidden md:flex h-full md:items-center md:justify-center relative">
      <Image
        src={image}
        alt="contact-image"
        fill
        className="lg:object-contain lg:h-full lg:w-auto "
      />
    </div>
  );
}

export default ContactImage;
