import InputRow from "./InputRow";

function FormInputs() {
  return (
    <form className="text-lg flex gap-6 flex-col">
      <InputRow placeholder="Name*" />
      <InputRow placeholder="Email*" />
      <InputRow placeholder="Website URL*" />
      <textarea
        placeholder="Project Details*"
        className="h-32 border border-metric px-5 py-3"
      />
    </form>
  );
}

export default FormInputs;
