import ContactForm from "./ContactForm";
import SideImage from "@/public/SideImage.png";
import ContactImage from "./ContactImage";

function ContactSection() {
  return (
    <div className="flex h-custom xl:gap-24 2xl:px-20 xl:my-16 ">
      <ContactImage image={SideImage} />
      <ContactForm />
    </div>
  );
}

export default ContactSection;
