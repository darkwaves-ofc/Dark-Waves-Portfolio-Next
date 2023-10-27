import { useEffect } from "react";

export default function InputElement({
  id,
  value,
  handleInputChange,
  rows = 1,
  name,
  children,
}) {
  useEffect(
    function () {
      const element = document.querySelector(`#${id}-input-wrap`);
      const inputElement = document.querySelector(`#${id}-input-wrap-input`);
      if (value) element.classList.add("not-empty");
      if (!(document.activeElement === inputElement) && !value)
        element.classList.remove("not-empty");
    },
    [value, id]
  );
  return (
    <div id={`${id}-input-wrap`} className="input-wrap">
      {rows === 1 && (
        <input
          id={`${id}-input-wrap-input`}
          type="text"
          className="contact-input"
          rows={rows}
          value={value}
          onChange={(e) => handleInputChange(id, e.target.value)}
          onFocus={(e) => {
            e.target.parentNode.classList.add("focus");
            e.target.parentNode.classList.add("not-empty");
          }}
          onBlur={(e) => {
            e.target.parentNode.classList.remove("focus");
            if (!value) e.target.parentNode.classList.remove("not-empty");
          }}
        />
      )}
      {rows !== 1 && (
        <textarea
          id={`${id}-input-wrap`}
          type="text"
          className="contact-input"
          rows={rows}
          value={value}
          onChange={(e) => handleInputChange(id, e.target.value)}
          onFocus={(e) => {
            e.target.parentNode.classList.add("focus");
            e.target.parentNode.classList.add("not-empty");
          }}
          onBlur={(e) => {
            e.target.parentNode.classList.remove("focus");
            if (!value) e.target.parentNode.classList.remove("not-empty");
          }}
        />
      )}
      <label>{name}</label>
      {children}
    </div>
  );
}
