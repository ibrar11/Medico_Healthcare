import React from "react";
import { Container, Features, Divider, Button } from "../index";
import { featuresList } from "../data/featuresData";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-16">
          <div className=" flex min-h-96 flex-col items-center justify-center gap-y-72 sm:flex-row-reverse sm:items-end sm:justify-between md:gap-x-20 lg:gap-x-36">
            <div className="flex w-full flex-col items-center gap-y-7 sm:w-1/2 sm:pb-4 md:pb-0">
              <h3 className="w-full text-3xl font-bold sm:w-auto md:text-4xl">
                Why Choose Us?
              </h3>
              <div className="flex w-full flex-row flex-wrap gap-x-1 gap-y-3 sm:w-auto sm:flex-col sm:gap-y-4">
                {featuresList.map((feature, index) => {
                  return (
                    <Features
                      key={index}
                      svgPath="/images/circularCheck.svg"
                      alt="circularCheck"
                      feature={feature}
                    />
                  );
                })}
              </div>
            </div>
            <div className="sm:w-max-96 flex max-h-32 w-full items-end justify-center overflow-visible rounded-xl bg-secondary sm:w-auto md:w-1/2">
              <img
                className="h-auto w-auto"
                src="/images/girlOnPhone.png"
                alt="girlOnPhone"
              />
            </div>
          </div>
          <div className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-7">
              <h3 className="w-full text-3xl font-bold leading-normal sm:w-auto md:text-4xl">
                Wellness, Compassion, Quality
              </h3>
              <p className="text-xs font-medium leading-normal sm:text-sm md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean. A small river named Duden
                flows by their place and supplies it.
              </p>
            </div>
            <Button
              text="Take An Appointment"
              buttonStyle="w-full sm:w-auto sm:self-start sm:px-5 sm:py-3"
            />
          </div>
        </div>
        <Divider verticalPadding="py-10" />
      </Container>
    </section>
  );
};

export default AboutUs;
