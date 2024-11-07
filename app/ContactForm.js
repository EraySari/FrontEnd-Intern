import FormInputs from "./FormInputs";
import FormText from "./FormText";
import Button from "./Button";

function ContactForm() {
  return (
    <div className="w-1/2 h-full ">
      <div className="flex flex-col justify-between  h-full">
        <FormText />
        <FormInputs />
        <Button>Send Proposal</Button>
      </div>
    </div>
  );
}

export default ContactForm;
