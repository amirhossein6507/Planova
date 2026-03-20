import { useState } from "react";

function Input({
  type = "text",
  lable = "",
  htmlFor,
  className = "",
  value = "",
  onChange,
  onGetInput,
  required = false,
}) {
  // const [inputValue, setInputValue] = useState(value);
  let styleContainer;
  let styleInput;
  let styleLable;

  switch (type) {
    case "text":
      {
        styleContainer = `relative group transition-all duration-300 bg-violet-300 overflow-hidden rounded-2xl pt-0 hover:pt-4.5 hover:bg-violet-500 ${value !== "" ? "pt-4.5 bg-violet-500" : ""}`;
        styleInput =
          "w-full py-1.5 px-3 outline-none text-[14px] text-violet-900 bg-white/70 focus:bg-white";
        styleLable = `absolute  right-3  transition-all duration-300  group-hover:top-0.5 group-hover:text-[10px] group-hover:translate-0  group-hover:text-violet-100 ${value !== "" ? "top-0.5 text-[10px] translate-0 text-violet-100" : "translate-y-[-50%] top-[50%] text-violet-900"}`;
      }
      break;
    case "textarea":
      {
        styleContainer = `relative group transition-all duration-300 bg-violet-300 overflow-hidden rounded-2xl pt-0 pb-0 hover:pt-4.5 hover:bg-violet-500 ${value !== "" ? "pt-4.5 bg-violet-500 " : ""}`;
        styleInput = `w-full py-1.5 px-3 outline-none text-[14px] text-violet-900 bg-white/70 focus:bg-white transition-all duration-300 mb-0 group-hover:h-20  ${value ? "h-20" : "h-9"}`;
        styleLable = `absolute  right-3  transition-all duration-300  group-hover:top-0.5 group-hover:text-[10px] group-hover:translate-0  group-hover:text-violet-100 ${value !== "" ? "top-0.5 text-[10px] translate-0 text-violet-100" : "translate-y-[-50%] top-[50%] text-violet-900"}`;
      }
      break;
    case "checkbox":
      styleContainer = "flex flex-row-reverse justify-end gap-1 items-center";
      styleInput = "accent-violet-600";
      break;
  }

  const handleChange = (e) => {
    if (type === "text" || type === "textarea") onGetInput(e.target.value);
    // bug : update state
    if (type === "checkbox") onGetInput(e.target.checked);
    // if (onGetInput) onGetInput(inputValue);
    if (onChange) onChange();
  };

  return (
    <>
      <div className={`${styleContainer} ${className}`}>
        <label htmlFor={htmlFor} className={styleLable}>
          {lable}
        </label>
        {type != "textarea" && (
          <input
            id={htmlFor}
            className={styleInput}
            type={type}
            value={value}
            onChange={handleChange}
            required={required}
          />
        )}
        {type == "textarea" && (
          <textarea
            className={styleInput}
            style={{ resize: "none" }}
            onChange={handleChange}
          ></textarea>
        )}
      </div>
    </>
  );
}

export default Input;
