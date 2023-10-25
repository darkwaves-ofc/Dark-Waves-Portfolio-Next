import { useState } from "react";
import "./Contact.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: { value: "", isFocused: false },
    email: { value: "", isFocused: false },
    message: { value: "", isFocused: false },
  });

  const handleInputChange = (e, inputField) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [inputField]: { ...prevData[inputField], value: value },
    }));
  };

  const handleFocus = (inputField) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputField]: { ...prevData[inputField], isFocused: true },
    }));
  };

  const handleBlur = (inputField) => {
    setFormData((prevData) => ({
      ...prevData,
      [inputField]: { ...prevData[inputField], isFocused: false },
    }));
  };

  const getInputClassName = (inputField) => {
    const { isFocused, value } = formData[inputField];
    return isFocused || value ? "active" : "nonactive";
  };

  return (
    <div className="contact w-full m-t-8">
      <div className="title_container">
        <div className="title font-xl font-weight-700">Contact Us</div>
      </div>
      <div className="form_container flex-col-center-start g-5 m-t-5">
        <div
          className={`input_container position-relative w-50 ${getInputClassName(
            "name"
          )} flex-row-eve`}
        >
          <input
            type="text"
            className={"input font-weight-600 font-md w-80 me-auto"}
            value={formData.name.value}
            onChange={(e) => handleInputChange(e, "name")}
            onFocus={() => handleFocus("name")}
            onBlur={() => handleBlur("name")}
            id="name"
          />
          <label
            htmlFor="name"
            className="position-absolute font-md font-weight-600"
          >
            Name
          </label>
          <FontAwesomeIcon icon="fa-solid fa-user" />
        </div>
        <div
          className={`input_container position-relative w-50 ${getInputClassName(
            "email"
          )} flex-row-eve`}
        >
          <input
            type="email"
            className={"input font-weight-600 font-md w-80 me-auto"}
            value={formData.email.value}
            onChange={(e) => handleInputChange(e, "email")}
            onFocus={() => handleFocus("email")}
            onBlur={() => handleBlur("email")}
            id="email"
          />
          <label
            htmlFor="email"
            className="position-absolute font-md font-weight-600"
          >
            Email
          </label>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </div>
        <div
          className={`input_container position-relative w-50 ${getInputClassName(
            "message"
          )} flex-row-eve`}
        >
          <textarea
            className={"input font-weight-600 font-md w-80 me-auto"}
            value={formData.message.value}
            onChange={(e) => handleInputChange(e, "message")}
            onFocus={() => handleFocus("message")}
            onBlur={() => handleBlur("message")}
            id="message"
          />
          <label
            htmlFor="message"
            className="position-absolute font-md font-weight-600"
          >
            Message
          </label>
          <FontAwesomeIcon icon="fa-solid fa-envelope" />
        </div>
      </div>
    </div>
  );
}
