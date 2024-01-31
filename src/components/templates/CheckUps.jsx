import React, { useState } from "react";
import { Container, Divider, Features, Button } from "../index";
import { checkUpFeatures } from "../data/featuresData";
import { Link } from "react-router-dom";

const CheckUps = () => {
  const [tab, setTab] = useState("first");

  const handleTab = (selectTab) => {
    setTab(selectTab);
  };

  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-10 md:px-5 xl:px-10">
          <div className="mx-3 flex flex-col gap-y-5 sm:mx-16 md:mx-20 md:gap-y-7 lg:mx-48 lg:gap-y-10 xl:mx-60">
            <div className="flex flex-col items-center gap-y-5 md:gap-y-7">
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Health Checkup Plans
              </h3>
              <p className="text-center text-base leading-normal md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean named flows.
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-start  gap-y-5 sm:grid-cols-3">
              <p
                onClick={() => handleTab("first")}
                className={`cursor-pointer rounded-lg px-1 py-3 text-base font- text-center w-full leading-normal sm:text-lg md:text-xl lg:p-3 ${tab === "first" ? "bg-primary text-white  w-full" : ""}`}
              >
                Woman Health
              </p>
              <p
                onClick={() => handleTab("second")}
                className={`cursor-pointer rounded-lg px-1 py-3 text-base font- text-center w-full leading-normal sm:text-lg md:text-xl lg:p-3 ${tab === "second" ? "bg-primary text-white  w-full" : ""}`}
              >
                Cancer Screening
              </p>
              <p
                onClick={() => handleTab("third")}
                className={`cursor-pointer rounded-lg px-1 py-3 text-base font- text-center w-full leading-normal sm:text-lg md:text-xl lg:p-3 ${tab === "third" ? "bg-primary text-white  w-full" : ""}`}
              >
                Kids Vaccines
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-5 sm:flex-row sm:items-end sm:gap-x-2 md:gap-x-5 lg:gap-x-10">
            <div className="flex flex-col gap-y-5 sm:w-1/2">
              <div>
                <img
                  src="/images/whitehealthcare.svg"
                  alt="healthcare"
                  className="bg-primary"
                />
              </div>
              <div className="flex flex-col gap-y-7 lg:gap-y-12">
                <div className="flex flex-col gap-y-3 lg:gap-y-5">
                  <h3 className="lg:text-3.5xl text-base font-bold sm:text-lg">
                  {tab === "first" ? "Woman Health Checkup" : tab === "second" ? "Cancer Screening" : "Kids Vaccines"}
                  </h3>
                  <p className="text-base font-medium lg:text-lg">
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
                <Link>
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
          </div>
        </div>
        <Divider verticalPadding="py-10" />
      </Container>
    </section>
  );
};

export default CheckUps;
