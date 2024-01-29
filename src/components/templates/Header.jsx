import React, { useEffect, useState } from "react";
import { Container, ListItem, Button } from "../index";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setDropDown(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <header>
      <Container>
        <div className="relative flex flex-col gap-y-2 bg-white px-7 py-5 lg:flex-row">
          <div className="flex flex-wrap items-center justify-between">
            <ListItem
              icon="/images/healthcare.svg"
              text="Medico"
              styles="w-max"
              textStyle="text-black font-bold sm:text-lg text-base"
            />
            <span>
              {dropDown ? (
                <IoCloseCircleOutline
                  onClick={handleDropDown}
                  className="text-md hover:cursor-pointer hover:text-red-500"
                />
              ) : (
                <RxHamburgerMenu
                  onClick={handleDropDown}
                  className="hover:cursor-pointer hover:text-primary lg:hidden"
                />
              )}
            </span>
          </div>
          <div
            className={
              dropDown
                ? "z-10 delay-5000 absolute left-0 right-0 top-14 flex w-full flex-col gap-y-3 rounded-lg bg-white transition-transform duration-300 ease-in-out"
                : "delay-5000 h-0 w-0 overflow-hidden transition-transform duration-300 ease-in-out lg:ml-auto lg:flex lg:h-auto lg:w-max  xl:gap-x-16"
            }
          >
            <nav className="text-sm lg:flex lg:items-center">
              <ul className="flex flex-col pl-4 lg:flex-row lg:items-center">
                <li className="px-2 py-2  lg:px-1.5">
                  <Link className="p-2 decoration-primary underline-offset-2 hover:text-primary focus:underline">
                    Home
                  </Link>
                </li>
                <li className="px-2 py-2  lg:px-1.5">
                  <NavLink
                    to={"/about"}
                    className={({ isActive }) =>
                      `p-2 decoration-primary underline-offset-2 hover:text-primary ${isActive ? "text-primary" : ""} `
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li className="px-2 py-2  lg:px-1.5">
                  <Link className="p-2 decoration-primary underline-offset-2 hover:text-primary focus:underline">
                    Health Checkup
                  </Link>
                </li>
                <li className="px-2 py-2  lg:px-1.5">
                  <Link className="p-2 decoration-primary underline-offset-2 hover:text-primary focus:underline">
                    Doctors
                  </Link>
                </li>
                <li className="px-2 py-2  lg:px-1.5">
                  <Link className="p-2 decoration-primary underline-offset-2 hover:text-primary focus:underline">
                    Departments
                  </Link>
                </li>
              </ul>
            </nav>
            <ListItem
              icon="/images/phoneReciever.svg"
              text="1005-346-272"
              textStyle="text-black"
              styles="w-max px-8"
            />
            <Button
              text="Appointment"
              buttonStyle="bg-primary text-base font-bold text-white p-3 rounded-lg lg:px-5 lg:py-3"
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
