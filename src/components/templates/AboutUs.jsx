import React from "react";
import { Container, Features, Divider, Button } from "../index";
import { featuresList } from "../../data/featuresData";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <section className="bg-white">
      <Container>
        <Divider verticalPadding="py-5 sm:py-10" />
        <div className="lg:gap-y-16.5 flex flex-col gap-y-8 px-3 sm:px-10 md:px-20">
          <div className="flex flex-col  items-center justify-center gap-y-10 sm:flex-row-reverse sm:items-end sm:justify-between sm:gap-x-5 lg:gap-x-36">
            <div className="flex w-full flex-col items-start gap-y-6 sm:w-1/2 sm:pb-3 md:pb-0">
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Why Choose Us?
              </h3>
              <div className="flex w-full flex-col gap-y-3 sm:w-auto sm:gap-y-4">
                {featuresList.map((feature, index) => {
                  return (
                    <Features
                      key={index}
                      svgPath="/images/circularCheck.svg"
                      alt="circularCheck"
                      feature={feature}
                      textStyle="md:text-xl"
                    />
                  );
                })}
              </div>
            </div>
            <div className="w-max-96 relative flex items-end justify-center rounded-xl after:absolute  after:bottom-0 after:left-0 after:z-10 after:h-32 after:w-full after:rounded-lg after:bg-secondary md:w-1/2">
              <img
                className="z-20 h-auto w-auto rounded-lg"
                src="/images/girlOnPhone.png"
                alt="girlOnPhone"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-5 sm:gap-y-8 md:gap-y-10">
            <div className="lg:gap-y-7.5 flex flex-col gap-y-4">
              <h3 className="lg:text-10 text-2xl font-bold leading-normal md:text-4xl">
                Wellness, Compassion, Quality
              </h3>
              <p className="text-base font-medium leading-normal sm:text-lg md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it.
              </p>
            </div>
            <Link>
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

export default AboutUs;
