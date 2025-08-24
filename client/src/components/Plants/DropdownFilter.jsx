// components/DropdownFilter.js
import React from "react";

const DropdownFilter = ({ value, onChange, options }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      style={{
        padding: "8px 12px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
      }}
    >
       <option value="">All</option>{" "}
      {options.map((opt) => (
        <option key={opt} value={opt}>
         {opt}{" "}
        </option>
      ))}
      {" "}
    </select>
  );
};

export default React.memo(DropdownFilter);
