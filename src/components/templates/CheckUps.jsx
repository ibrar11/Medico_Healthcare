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
        <div className="flex flex-col gap-y-10">
          <div className="mx-3 flex flex-col gap-y-5 sm:mx-16 md:mx-20 lg:mx-48 xl:mx-60">
            <div className="flex flex-col items-center gap-y-5">
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Health Checkup Plans
              </h3>
              <p className="text-center text-xs font-medium sm:text-sm md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean named flows.
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-start gap-y-5 sm:grid-cols-2">
              <p
                onClick={() => handleTab("first")}
                className={`cursor-pointer rounded-lg p-5 text-base font-medium leading-normal sm:text-lg md:text-xl ${tab === "first" ? "bg-primary text-white" : ""}`}
              >
                Woman Health
              </p>
              <p
                onClick={() => handleTab("second")}
                className={`cursor-pointer rounded-lg p-5 text-base font-medium leading-normal sm:text-lg md:text-xl ${tab === "second" ? "bg-primary text-white" : ""}`}
              >
                Cancer Screening
              </p>
              <p
                onClick={() => handleTab("third")}
                className={`cursor-pointer rounded-lg p-5 text-base font-medium leading-normal sm:text-lg md:text-xl ${tab === "third" ? "bg-primary text-white" : ""}`}
              >
                Kids Vaccines
              </p>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-y-5">
              <div>
                <img
                  src="/images/whitehealthcare.svg"
                  alt="healthcare"
                  className="bg-primary"
                />
              </div>
              <div className="flex flex-col gap-y-5 ">
                <div className="flex flex-col gap-y-3">
                  <h3 className="lg:text-3.5xl text-base font-bold sm:text-lg">
                    Women Health Checkup
                  </h3>
                  <p className="pr-20 text-base font-medium sm:pr-14 sm:text-sm lg:text-lg">
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
            <div>
              <img src="/images/girlWithLaptop.png" alt="girlWithLaptop" />
            </div>
          </div>
        </div>
        <Divider verticalPadding="py-10" />
      </Container>
    </section>
  );
};

export default CheckUps;
