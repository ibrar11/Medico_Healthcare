import React, { useState, useRef, useEffect } from "react";
import { Container, Divider, ListItem, Button } from "../index";
import { listData } from "../data/appointmentListData";

const Appointment = () => {
  const [dropDown, setDropDown] = useState(false);
  const [appointment, setAppointment] = useState("Select appointment Type");

  const dropDownRef = useRef(null);

  const closeDropDown = (e) => {
    if (dropDown && !dropDownRef.current?.contains(e.target)) {
      setDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropDown);
    // eslint-disable-next-line
  }, [dropDown]);

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <section>
      <Divider verticalPadding="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10 sm:flex-row sm:items-center sm:gap-x-10">
          <div className="flex flex-col gap-y-5 sm:w-1/2">
            <div className="flex flex-col gap-y-3">
              <p className="text-xs font-bold leading-normal text-primary">
                APPOINTMENT
              </p>
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Get in touch to book your first appointment
              </h3>
              <p className="text-base font-medium leading-normal md:text-xl xl:text-lg">
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia.
              </p>
            </div>
            <div className="flex flex-col gap-y-4">
              {listData.map((item, index) => {
                return (
                  <ListItem
                    key={index}
                    icon={item.icon}
                    alt={item.alt}
                    iconStyle={`bg-primary rounded-full ${item.padding}`}
                    text={item.text}
                    textStyle="font-medium leading-normal xl:text-lg md:text-xl"
                    styles="gap-x-2"
                  />
                );
              })}
            </div>
          </div>
          <div className="flex justify-center sm:w-1/2 xl:p-8">
            <form className="max-w-118.5 flex w-full flex-col gap-y-4 self-center rounded-lg bg-white">
              <input
                className="border-1 rounded-lg border-solid border-c-grey p-2 text-base font-medium text-light-grey focus:outline-primary sm:px-5 sm:py-3 md:text-lg"
                type="text"
                id="name"
                placeholder="Name"
                autoComplete="false"
              />
              <input
                className="border-1 rounded-lg border-solid border-c-grey p-2 text-base font-medium text-light-grey focus:outline-primary sm:px-5 sm:py-3 md:text-lg"
                type="text"
                id="phone"
                placeholder="Phone"
                autoComplete="false"
              />
              <input
                className="border-1 rounded-lg border-solid border-c-grey p-2 text-base font-medium text-light-grey focus:outline-primary sm:px-5 sm:py-3 md:text-lg"
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="false"
              />

              <div
                ref={dropDownRef}
                className={`relative rounded-lg border-solid p-2 sm:px-5  sm:py-3 ${dropDown ? "border-2 border-primary" : "border-1 border-c-grey"}`}
              >
                <div onClick={handleDropDown} className="relative ">
                  <span className="text-base font-medium text-light-grey md:text-lg">
                    {appointment}
                  </span>
                  <span
                    className={`border-b-1 border-r-1 absolute right-0 top-1.5 ${dropDown ? "rotate-225 top-3" : "rotate-45"} border-light-grey p-1`}
                  ></span>
                </div>
                <div
                  className={`border-1 absolute left-0 right-0 top-full ${dropDown ? "flex flex-col" : "hidden"} rounded-lg border-solid border-c-grey bg-white`}
                >
                  <label
                    htmlFor="option1"
                    className="p-2 text-base font-medium hover:bg-light-grey md:text-lg"
                  >
                    Cardiology
                  </label>
                  <input
                    className="hidden"
                    type="radio"
                    name="where"
                    value="Cardiology"
                    onChange={(e) => {
                      setAppointment(e.target.value);
                      handleDropDown();
                    }}
                    id="option1"
                  />
                  <label
                    className="p-2 text-base font-medium hover:bg-light-grey md:text-lg"
                    htmlFor="option2"
                  >
                    Health Check Up
                  </label>
                  <input
                    className="hidden"
                    type="radio"
                    name="where"
                    value="Health Check Up"
                    onChange={(e) => {
                      setAppointment(e.target.value);
                      handleDropDown();
                    }}
                    id="option2"
                  />
                  <label
                    className="p-2 text-base font-medium hover:bg-light-grey md:text-lg"
                    htmlFor="option3"
                  >
                    Eye Check Up
                  </label>
                  <input
                    className="hidden"
                    type="radio"
                    name="where"
                    value="Eye Check Up"
                    onChange={(e) => {
                      setAppointment(e.target.value);
                      handleDropDown();
                    }}
                    id="option3"
                  />
                </div>
              </div>

              <textarea
                className="border-1 rounded-lg border-solid border-c-grey p-2 text-base font-medium text-light-grey focus:outline-primary sm:px-5 sm:py-4 md:text-lg"
                id="message"
                placeholder="Message"
                rows={"5"}
              />
              <Button text="Submit" buttonStyle="w-full sm:px-5 sm:py-3" />
            </form>
          </div>
        </div>
      </Container>
      <Divider verticalPadding="py-5 sm:py-10" />
    </section>
  );
};

export default Appointment;
