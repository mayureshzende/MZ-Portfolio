import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_il4yesi", "template_ovzsmpq", form.current, {
        publicKey: "mmV_Trws1_yEw59fh",
      })
      .then(
        () => {
          setEmail("");
          setName("");
          setMessage("");
          setSuccess("Message Sent Succesfully");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyn">{success}</p>
      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg text-wht bg-lbrw px-2"
          value={name}
          onChange={handleName}
        />
        <input
          type="email"
          name="from_email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg  text-wht bg-lbrw px-2"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          type="text"
          name="message"
          rows="9"
          cols="50"
          placeholder="Message"
          required
          className=" rounded-lg  text-wht bg-lbrw p-2"
          value={message}
          onChange={handleMessage}
        />
        <button
          type="submit"
          className="w-full rounded-lg border border-cyn text-white h-12 font-bold text-xl hover:bg-dCyan bg-cyn transition-all duration-500"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
