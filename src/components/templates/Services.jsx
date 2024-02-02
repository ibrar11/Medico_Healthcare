import React from "react";
import { Container, Button, Divider, ServiceCard } from "../index";
import { serviceData } from "../../data/serviceCardData";

const Services = () => {
  return (
    <section>
      <Container>
        <Divider verticalPadding="py-5 sm:py-10" />
        <div className="flex flex-col gap-y-10">
          <div className="xl:gap-x-98.5 flex flex-col gap-y-7 px-2 sm:flex-row sm:gap-x-32 md:gap-x-48 lg:gap-x-80">
            <div className="flex flex-col gap-y-3 sm:w-1/2 sm:gap-y-5">
              <h5 className="w-max text-base font-bold text-primary">
                SERVICES & TREATMENTS
              </h5>
              <h2 className="sm:text-4.5xl text-3xl font-bold leading-normal">
                More than 40 specialty and health care services
              </h2>
            </div>
            <Button
              text="See All Services"
              buttonStyle="w-full sm:w-auto sm:self-start sm:p-5 sm:self-end"
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
        <Divider verticalPadding="py-5 sm:py-10" />
      </Container>
    </section>
  );
};

export default Services;
