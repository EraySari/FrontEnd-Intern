import ContactForm from "./ContactForm";
import SideImage from "@/public/SideImage.png";
import ContactImage from "./ContactImage";

function ContactSection() {
  return (
    <div className="flex justify-center items-center h-custom sm:gap-10 md:gap-12 lg:gap-16 xl:gap-24 md:px-8 lg:px-12 xl:px-20 my-16 md:my-20 xl:my-24 ">
      <ContactImage image={SideImage} />
      <ContactForm />
    </div>
  );
}

export default ContactSection;
