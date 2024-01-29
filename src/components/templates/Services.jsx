import React from "react";
import { Container, Button, Divider, ServiceCard } from "../index";
import { serviceData } from "../data/serviceCardData";

const Services = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-col gap-y-7 sm:flex-row">
            <div className="flex flex-col gap-y-5 sm:w-1/2">
              <h5 className="w-max text-xs font-bold text-primary sm:text-sm md:text-base">
                SERVICES & TREATMENTS
              </h5>
              <h2 className="text-3xl font-bold leading-normal sm:text-4xl">
                More than 40 specialty and health care services
              </h2>
            </div>
            <Button
              text="Discover More"
              buttonStyle="w-full sm:w-auto sm:self-start sm:px-5 sm:py-3 sm:ml-auto sm:self-end"
            />
          </div>
          <div className="grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 sm:px-10">
            {serviceData.map((service) => {
              return (
                <ServiceCard
                  key={service.id}
                  imagePath={service.imagePath}
                  alt={service.alt}
                  serviceTitle={service.serviceTitle}
                  serviceDescription={service.serviceDescription}
                />
              );
            })}
          </div>
        </div>
        <Divider verticalPadding="py-24" />
      </Container>
    </section>
  );
};

export default Services;
