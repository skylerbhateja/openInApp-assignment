import React from "react";
import { Select, Option } from "@material-tailwind/react";

const CustomSelect = ({
  id,
  label = "Select",
  options = [],
  className,
  onChange,
  ...props
}) => {
  const handleChange = (value) => {
    onChange && onChange(id, value);
  };
  return (
    <div className={className}>
      <Select label={label} onChange={handleChange} {...props}>
        {options.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default CustomSelect;
