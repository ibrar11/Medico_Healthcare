import React from "react";
import { Container, Divider, TreatmentCard } from "../index";
import { treatmentCards } from "../../data/treatmentCardData";

const Treatments = () => {
  return (
    <section>
      <Divider verticalPadding="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col items-center gap-y-5 sm:gap-y-14 xl:gap-y-20">
          <div className="flex flex-col gap-y-6">
            <h2 className="md:text-46px text-3xl font-bold sm:text-4xl">
              Dedicated to provide best treatment.
            </h2>
            <p className="text-lg font-medium leading-normal sm:text-xl lg:w-5/6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
          </div>
          <div className="grid h-full w-full gap-y-20 sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3">
            {treatmentCards.map((card) => {
              return (
                <TreatmentCard
                  key={card.id}
                  image={card.imagePath}
                  alt={card.alt}
                  profession={card.profession}
                  title={card.title}
                />
              );
            })}
          </div>
        </div>
      </Container>
      <Divider verticalPadding="py-10" />
    </section>
  );
};

export default Treatments;
