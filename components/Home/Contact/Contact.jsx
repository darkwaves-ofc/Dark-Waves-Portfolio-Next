import React, { useState } from "react";
import "./Contact.css";
import InputElement from "../common/InputElement";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [contactInputs, setContactInputs] = useState({
    fName: undefined,
    lName: undefined,
    message: undefined,
    email: undefined,
  });
  const handleInputChange = function (id, value) {
    setContactInputs((c) => {
      return { ...c, [id]: value };
    });
  };
  return (
    <section className="contact">
      <div className="container">
        <div className="left">
          <div className="form-wrapper">
            <div className="contact-heading">
              <h1 className="font-xl">
                Let's work together<span>.</span>
              </h1>
            </div>
            <form className="contact-form">
              <InputElement
                id={"fName"}
                value={contactInputs.fName}
                handleInputChange={handleInputChange}
                rows={1}
                name={"First Name"}
              >
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-address-card"
                />
              </InputElement>
              <InputElement
                id={"lName"}
                value={contactInputs.lName}
                handleInputChange={handleInputChange}
                rows={1}
                name={"Last Name"}
              >
                <FontAwesomeIcon
                  className="icon"
                  icon="fa-solid fa-address-card"
                />
              </InputElement>
              <InputElement
                id={"email"}
                value={contactInputs.email}
                handleInputChange={handleInputChange}
                rows={1}
                name={"Email"}
              >
                <FontAwesomeIcon className="icon" icon="fa-solid fa-envelope" />
              </InputElement>
              <InputElement
                id={"message"}
                value={contactInputs.message}
                handleInputChange={handleInputChange}
                rows={4}
                name={"Message"}
              >
                <FontAwesomeIcon className="icon" icon="fa-solid fa-message" />
              </InputElement>

              <div className="contact-buttons">
                <button className="btn upload">
                  <span>
                    <i className="fa-solid fa-paperclip"></i> Add attachement
                  </span>
                  <input type="file" name="attachement" />
                </button>
                <input type="submit" value="Send message" className="btn" />
              </div>
            </form>
          </div>
        </div>
        <div className="rignt"></div>
      </div>
    </section>
  );
}
