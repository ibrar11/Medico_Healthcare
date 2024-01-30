import React from "react";
import { Container, ListItem } from "../index";

const TopBar = () => {
  return (
    <div className="bg-primary py-3.5 ">
      <Container>
        <div className="align-center flex flex-col gap-y-2 sm:flex-row  sm:flex-wrap sm:gap-x-5">
          <ListItem
            icon="/images/location.svg"
            text="90919 Madie run Apt. 790"
            textStyle="text-white sm:text-lg"
            alt="location"
          />
          <ListItem
            icon="/images/ion-mail-outline.svg"
            text="medico@health.care"
            textStyle="text-white sm:text-lg"
            alt="ion-mail-outline"
          />
          <ListItem
            icon="/images/whatsapp.svg"
            text="Connect on Whatsapp"
            styles="md:ml-auto"
            textStyle="underline underline-offset-4 text-white sm:text-lg"
            alt="whatsapp"
          />
        </div>
      </Container>
    </div>
  );
};

export default TopBar;
