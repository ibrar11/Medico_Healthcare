import React, { useState } from "react";
import { Container, Divider, Features, Button } from "../index";
import { checkUpFeatures } from "../../data/featuresData";
import { Link } from "react-router-dom";

const CheckUps = () => {
  const [tab, setTab] = useState("first");

  const handleTab = (selectTab) => {
    setTab(selectTab);
  };

  return (
    <section>
      <Container>
        <Divider verticalPadding="py-5 sm:py-10" />
        <div className="flex flex-col gap-y-10 sm:px-5 md:px-9 lg:px-16 xl:px-20">
          <div className="flex flex-col gap-y-5  md:gap-y-7  lg:gap-y-10">
            <div className="flex flex-col items-center gap-y-5 sm:mx-6 md:mx-14 md:gap-y-7 lg:mx-36 xl:mx-48">
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Health Checkup Plans
              </h3>
              <p className="text-center text-base font-medium leading-normal md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean named flows.
              </p>
            </div>
            <div className="flex w-full max-w-xl flex-col place-self-center rounded-lg bg-white p-5 sm:flex-row sm:justify-between">
              <p
                onClick={() => handleTab("first")}
                className={`cursor-pointer rounded-lg p-4  text-center text-base font-bold leading-normal sm:text-lg md:text-xl ${tab === "first" ? "bg-primary text-white" : ""}`}
              >
                Woman Health
              </p>
              <p
                onClick={() => handleTab("second")}
                className={`cursor-pointer rounded-lg p-4 text-center text-base font-bold leading-normal sm:text-lg md:text-xl ${tab === "second" ? "bg-primary text-white" : ""}`}
              >
                Cancer Screening
              </p>
              <p
                onClick={() => handleTab("third")}
                className={`cursor-pointer rounded-lg p-4 text-center text-base font-bold leading-normal sm:text-lg md:text-xl ${tab === "third" ? "bg-primary text-white" : ""}`}
              >
                Kids Vaccines
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-10 sm:flex-row sm:items-end sm:gap-x-2 md:gap-x-5 lg:gap-x-10">
            <div className="flex flex-col gap-y-5 sm:w-1/2">
              <div className="w-max rounded-full bg-primary">
                <img
                  src="/images/whitehealthcare.svg"
                  alt="healthcare"
                  className="p-2"
                />
              </div>
              <div className="flex flex-col gap-y-7 lg:gap-y-12">
                <div className="flex flex-col gap-y-3 lg:gap-y-5">
                  <h3 className="lg:text-3.5xl text-xl font-bold sm:text-2xl">
                    {tab === "first"
                      ? "Woman Health Checkup"
                      : tab === "second"
                        ? "Cancer Screening"
                        : "Kids Vaccines"}
                  </h3>
                  <p className="text-base font-medium sm:text-lg">
                    A wonderful serenity has taken possession of my entire soul,
                    like these sweet mornings of spring.
                  </p>
                </div>
                <div className="flex flex-col gap-x-1 gap-y-3">
                  {checkUpFeatures.map((feature, index) => {
                    return (
                      <Features
                        key={index}
                        svgPath="/images/blackCircularCheck.svg"
                        alt="circularCheck"
                        feature={feature}
                      />
                    );
                  })}
                </div>
                <Link className="hidden sm:block">
                  <Button
                    text="Take An Appointment"
                    buttonStyle="w-full sm:w-auto sm:self-start sm:px-5 sm:py-3"
                  />
                </Link>
              </div>
            </div>
            <div className="w-max-96 relative flex items-end justify-center rounded-xl after:absolute  after:bottom-0 after:left-0 after:z-10 after:h-32 after:w-full after:rounded-lg after:bg-secondary sm:w-1/2">
              <img
                className="z-20 h-auto w-auto rounded-lg"
                src="/images/girlWithLaptop.png"
                alt="girlWithLaptop"
              />
            </div>
            <Link className="sm:hidden">
              <Button
                text="Take An Appointment"
                buttonStyle="w-full sm:w-auto sm:self-start sm:px-5 sm:py-3"
              />
            </Link>
          </div>
        </div>
        <Divider verticalPadding="py-5 sm:py-10" />
      </Container>
    </section>
  );
};

export default CheckUps;
