import FormInputs from "./FormInputs";
import FormText from "./FormText";

function ContactForm() {
  return (
    <div className="md:w-1/2 h-full">
      <div className="flex flex-col justify-between h-full">
        <FormText />
        <FormInputs />
      </div>
    </div>
  );
}

export default ContactForm;
