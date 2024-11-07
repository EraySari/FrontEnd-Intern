"use client";
import Button from "@/app/ui/Button";
import InputRow from "./InputRow";
import { useState } from "react";

function FormInputs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [url, setUrl] = useState("");
  const [details, setDetails] = useState("");

  function handleChange(e) {
    const { name: targetName, value: newValue } = e.target;

    if (targetName === "name") setName(newValue);
    if (targetName === "email") setEmail(newValue);
    if (targetName === "url") setUrl(newValue);
    if (targetName === "details") setDetails(newValue);
  }
  const newData = { name: name, email: email, url: url, details: details };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          newData,
        }),
      });
      if (response.ok) {
        console.log("Form başarıyla gönderildi!");
      } else {
        console.error("Form gönderilemedi.");
      }
    } catch (error) {
      console.error("Bir hata oluştu:", error);
    }
    setName("");
    setEmail("");
    setUrl("");
  };

  return (
    <form onSubmit={handleSubmit} className="text-lg flex gap-6 flex-col">
      <InputRow
        placeholder="Name*"
        name="name"
        value={name}
        handle={handleChange}
      />
      <InputRow
        placeholder="Email*"
        name="email"
        value={email}
        handle={handleChange}
      />
      <InputRow
        placeholder="Website URL*"
        name="url"
        value={url}
        handle={handleChange}
      />

      <textarea
        placeholder="Project Details*"
        required
        className="h-32 border border-metric px-5 py-3 placeholder-metric"
        name="details"
        value={details}
        onChange={handleChange}
      />
      <Button>Send Purposal</Button>
    </form>
  );
}

export default FormInputs;
