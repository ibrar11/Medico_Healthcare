import React from "react";
import { Container, Button, ListItem, Divider } from "../index";

const HeroSection = () => {
  return (
    <section>
      <Divider verticalPadding="py-5" />
      <Container>
        <div className=" flex flex-col items-center gap-y-4 sm:flex-row sm:gap-x-20 md:justify-between">
          <div className="relative flex max-h-[440px] max-w-md items-end justify-center overflow-visible rounded-lg bg-secondary sm:w-1/2">
            <img
              src="/images/firstImage.png"
              alt="hero-person"
              className="w-full sm:h-auto sm:w-auto"
            />
            <ListItem
              icon="/images/heartSkull.png"
              text="More than 10K Patients treated!"
              styles="absolute bg-white flex rounded-lg  bottom-6 right-10 lg:bottom-80 lg:right-80"
              textStyle="text-xs font-medium sm:ml-0"
              iconStyle="max-w-7 min-w-7 self-center "
              alt="heartSkull"
            />
          </div>
          <div className="sm:flex sm:w-1/2 sm:items-center">
            <div className="flex flex-col items-center gap-y-3 sm:h-4/5 sm:items-start  sm:justify-between">
              <h5 className="w-max text-base font-bold text-primary">
                Welcome to Medico Healthcare
              </h5>
              <h1 className="text-center text-3xl font-bold sm:text-left sm:leading-snug md:text-5xl md:leading-snug lg:text-6xl xl:text-7xl lg:leading-normal">
                Your Journey to Better Health Starts Here
              </h1>
              <Button
                text="Discover More"
                buttonStyle="w-full sm:w-auto sm:self-start sm:px-5 sm:py-3"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
