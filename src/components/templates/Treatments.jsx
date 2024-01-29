import React from "react";
import { Container, Divider, TreatmentItem } from "../index";

const Treatments = () => {
  const images = [
    {
      key: 0,
      src: "/images/PediatricianDoctor.png",
      alt: "PediatricianDoctor",
      text2: "Pediatrician",
      styles: ""
    },
    {
      key: 1,
      src: "/images/CardiologistDoctor.png",
      alt: "CardiologistDoctor",
      text2: "Cardiologist",
      styles: "md:place-self-end lg:place-self-center"
    },
    {
      key: 3,
      src: "/images/DermatologistDoctor.png",
      alt: "DermatologistDoctor",
      text2: "Dermatologist",
      styles: "lg:place-self-end"
    },
  ];

  return (
    <div>
      <Divider />
      <Container>
        <div className="flex flex-col items-center gap-y-24">
          <div className="flex flex-col gap-y-11">
            <h2 className="text-2xl font-bold sm:text-4xl md:text-5xl">
              Dedicated to provide best treatment.
            </h2>
            <p className="font-medium text-lg sm:text-xl leading-normal lg:w-5/6">
              A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.
              I am alone, and feel the charm of existence in this spot, which
              was created for the bliss of souls like mine.
            </p>
          </div>
          <div className="flex flex-col items-center gap-y-11 w-full h-full md:grid md:grid-cols-2 lg:grid-cols-3">
            {images.map((image) => {
              return (
                <TreatmentItem
                  key={image.key}
                  image={image.src}
                  alt={image.alt}
                  text2={image.text2}
                  styles={image.styles}
                />
              );
            })}
          </div>
        </div>
      </Container>
      <Divider
        verticalPadding="py-48"
      />
    </div>
  );
};

export default Treatments;
