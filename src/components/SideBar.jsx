import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import LogoWithCompany from "../assets/base-logo-company.svg";
import DashboardIcon from "../assets/dashboard.svg";
import UploadIcon from "../assets/chart.svg";
import InvoiceIcon from "../assets/invoice.svg";
import ScheduleIcon from "../assets/schedule.svg";
import CalendarIcon from "../assets/calendar.svg";
import NotificationIcon from "../assets/bell.svg";
import SettingIcon from "../assets/setting.svg";
import BurgerIcon from "../assets/burger.svg";
import BellIcon from "../assets/bell-outlined.svg";
import UserPng from "../assets/user.png";
import CrossIcon from "../assets/cross.svg";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export function DefaultSidebar() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      {!isSidebarOpen && (
        <div className="lg:hidden absolute w-full flex flex-row items-center justify-between px-5 py-6 bg-white">
          <div className="flex flex-row ">
            <img onClick={toggleSidebar} src={BurgerIcon} />
            <img
              src={LogoWithCompany}
              className="w-16 ml-4"
              alt="dashboard-icon"
            />
          </div>
          <div className="flex flex-row lg:hidden">
            <img src={BellIcon} alt="bell-icon" />
            <img
              src={UserPng}
              className="w-8 h-8 rounded-2xl object-none ml-5"
              alt="bell-icon"
            />
          </div>
        </div>
      )}
      <div
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      ></div>

      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } lg:block lg:w-full max-w-[20rem] z-[999] inset-0`}
      >
        <div className="bg-white h-screen w-full max-w-[20rem] inset-0 block shadow-xl shadow-blue-gray-900/5">
          <div className=" flex justify-between lg:justify-center py-8 pt-10 ">
            <img src={LogoWithCompany} alt="dashboard-icon" />
            <img
              src={CrossIcon}
              alt="close-icon"
              onClick={toggleSidebar}
              className="w-10 h-10 lg:hidden"
              style={{ filter: "invert(1)" }}
            />
          </div>
          <List className="p-0">
            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={DashboardIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Dashboard
            </ListItem>
            <NavLink to={"/upload"} className="link">
              <ListItem className="listItem">
                <ListItemPrefix>
                  <img src={UploadIcon} alt="dashboard-icon" className="icon" />
                </ListItemPrefix>
                Upload
              </ListItem>
            </NavLink>
            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={InvoiceIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Invoice
            </ListItem>

            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={ScheduleIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Schedule
            </ListItem>

            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={CalendarIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Calendar
            </ListItem>

            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={NotificationIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Notification
            </ListItem>

            <ListItem className="listItem">
              <ListItemPrefix>
                <img src={SettingIcon} alt="dashboard-icon" />
              </ListItemPrefix>
              Setting
            </ListItem>
          </List>
        </div>
      </div>
    </>
  );
}
