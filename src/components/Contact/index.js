import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(String(email).toLowerCase());
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMsg, setErrorMsg] = useState("");
  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errorMsg) {
      console.log("Submit Form", formState);
    }

    emailjs
      .sendForm("service_xm0oxww", "template_a18b0nw", form.current, {
        publicKey: "NS1YR5Ns2es5HiSnm",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
    e.target.reset();
  };

  const handleChange = (e) => {
    if (e.target.name === "email") {
      const isValid = validateEmail(e.target.value);
      if (!isValid) {
        setErrorMsg("Your email is invalid.");
      } else {
        setErrorMsg("");
      }
    } else {
      if (!e.target.value.length) {
        setErrorMsg(`${e.target.name} is required.`);
      } else {
        setErrorMsg("");
      }
    }
    if (!errorMsg) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
      console.log("Handle Form", formState);
    }
  };

  const form = useRef();

  return (
    <div className="contact-page-wrapper ">
      <h2 className="header-md ">Contact</h2>
      <div className="contact container ">
        <form id="contact-form" onSubmit={handleSubmit} ref={form}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              defaultValue={name}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              defaultValue={email}
              onBlur={handleChange}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              rows="5"
              cols="10"
              defaultValue={message}
              onBlur={handleChange}
            />
          </div>
          {errorMsg && (
            <div>
              <p className="error-text">{errorMsg}</p>
            </div>
          )}
          <span className="btn-wrapper">
            <button type="submit">Submit</button>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
