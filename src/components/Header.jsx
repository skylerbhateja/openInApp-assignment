import React from "react";
import { Typography } from "@material-tailwind/react";
import BellIcon from "../assets/bell-outlined.svg";
import UserPng from "../assets/user.png";

const Header = ({ title, profile }) => {
  return (
    <div className="w-full flex flex-row justify-between mt-10 lg:mt-5 py-11 px-7">
      <Typography className="text-black font-semibold text-2xl">
        {title}
      </Typography>
      <div className="hidden flex-row  lg:flex">
        <img src={BellIcon} alt="bell-icon" />
        <img
          src={profile ?? UserPng}
          className="w-8 h-8 rounded-2xl ml-5"
          alt="bell-icon"
          referrerpolicy="no-referrer"
        />
      </div>
    </div>
  );
};

export default Header;
