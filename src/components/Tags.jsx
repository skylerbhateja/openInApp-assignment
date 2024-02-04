import { Typography } from "@material-tailwind/react";
import CrossIcon from "../assets/cross.svg";
import React from "react";

const Tags = ({ id, label, onClick, classes }) => {
  return (
    <div
      className={`flex flex-row justify-between items-center rounded-[4px] bg-[#605BFF] w-[60px] pt-1 pr-1 pb-1 pl-2 ${classes}`}
    >
      <Typography className="text-[10px] text-white font-semibold line-clamp-1">
        {label}
      </Typography>
      <img
        onClick={() => onClick(id,label)}
        src={CrossIcon}
        alt="cross-icon"
        className="cursor-pointer"
      />
    </div>
  );
};

export default Tags;
