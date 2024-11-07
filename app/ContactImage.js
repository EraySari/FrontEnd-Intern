import Image from "next/image";

function ContactImage({ image }) {
  return (
    <div className="w-1/2 h-full flex items-center justify-center relative">
      <Image
        src={image}
        alt="contact-image"
        fill
        className="object-contain h-full w-auto "
      />
    </div>
  );
}

export default ContactImage;
