import React from "react";
import style from "./Dropdown.module.scss";

export const Dropdown = ({ options, label, onChange }) => {
  return (
    <div className={style["dropdown-container"]}>
      <label className="dropdown-label">{label}</label>
      <select
        className="dropdown-select"
        onChange={(e) => {
          console.log("dropdown.js", e.target.value);
          onChange("bla", e.target.value, "Valentina");
        }}
      >
        <option value="" disabled hidden selected>
          Select from the list
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};
