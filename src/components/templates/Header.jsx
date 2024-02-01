import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseCircleOutline } from "react-icons/io5";
import { Container, ListItem, Button, Divider } from "../index";
import { links } from "../data/navLinksData";

const Header = () => {
  const [dropDown, setDropDown] = useState(false);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

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

  return (
    <header>
      <Divider verticalPadding="py-1 sm:py-5" />
      <Container>
        <div className="relative flex flex-col gap-y-2 bg-white px-7 py-5 lg:flex-row">
          <div className="flex flex-wrap items-center justify-between">
            <ListItem
              icon="/images/healthcare.svg"
              text="Medico"
              styles="w-max"
              textStyle="text-black font-bold sm:text-lg text-base"
              alt="healthcare"
            />
            <span>
              {dropDown ? (
                <IoCloseCircleOutline
                  onClick={handleDropDown}
                  className="text-md hover:cursor-pointer"
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
                ? "delay-5000 absolute left-0 right-0 top-14 z-10 flex w-full flex-col gap-y-3 rounded-lg bg-white transition-transform duration-300 ease-in-out"
                : "h-0 w-0 overflow-hidden lg:ml-auto lg:flex lg:h-auto lg:w-max  xl:gap-x-16"
            }
          >
            <nav className="text-sm lg:flex lg:items-center">
              <ul className="flex flex-col pl-4 lg:flex-row lg:items-center">
                {links.map((link) => {
                  return (
                    <li className="px-2 py-2">
                      <NavLink
                        key={link.key}
                        to={link.to}
                        className={({ isActive }) =>
                          `p-2 decoration-primary underline-offset-2 hover:text-primary ${isActive ? "text-primary" : ""} `
                        }
                      >
                        {link.name}
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <ListItem
              icon="/images/phoneReciever.svg"
              text="1005-346-272"
              textStyle="text-black"
              styles="px-8"
            />
            <Button text="Appointment" buttonStyle="lg:px-5 lg:py-3" />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
