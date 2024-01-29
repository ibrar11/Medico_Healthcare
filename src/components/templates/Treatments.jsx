import React from "react";
import { Container, Divider, TreatmentCard } from "../index";
import { treatmentCards } from "../data/treatmentCardData";

const Treatments = () => {
  

  return (
    <section>
      <Divider />
      <Container>
        <div className="flex flex-col items-center gap-y-16">
          <div className="flex flex-col gap-y-11">
            <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              Dedicated to provide best treatment.
            </h2>
            <p className="text-lg font-medium leading-normal sm:text-xl lg:w-5/6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
          </div>
          <div className="grid gap-y-16 w-full h-full sm:grid-cols-2 sm:gap-x-8 md:grid-cols-3">
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
      <Divider verticalPadding="py-24" />
    </section>
  );
};

export default Treatments;
