import React from "react";
import { Container, Divider, Button } from "../index";
import { Link } from "react-router-dom";

const CheckUps = () => {
  return (
    <section>
      <Container>
        <div className="flex flex-col gap-y-5">
          <div className="mx-3 flex flex-col gap-y-10 sm:mx-16 md:mx-20 lg:mx-48 xl:mx-60">
            <div className="flex flex-col items-center gap-y-5">
              <h3 className="text-center text-3xl font-bold md:text-4xl">
                Health Checkup Plans
              </h3>
              <p className="text-center text-xs font-medium sm:text-sm md:text-xl">
                They live in Bookmarks grove right at the coast of the
                Semantics, a large language ocean named flows.
              </p>
            </div>
            <div className="grid grid-cols-1 place-items-center gap-y-5 sm:grid-cols-3">
              <Link className="text-xs font-bold sm:sm:order-2 sm:text-sm md:text-xl">
                Cancer Screening
              </Link>
              <Link className="text-xs font-bold sm:order-3 sm:text-sm md:text-xl">
                Kids Vaccines
              </Link>
              <Button
                text="Woman Health"
                buttonStyle="w-full sm:w-auto sm:px-5 sm:order-1"
              />
            </div>
          </div>
          <div>
            <div>
              <div>
                <img
                  src="/images/whitehealthcare.svg"
                  alt="healthcare"
                  className="bg-primary"
                />
              </div>
              <div>
                <h5>Women Health Checkup</h5>
                <p>
                  A wonderful serenity has taken possession of my entire soul,
                  like these sweet mornings of spring.
                </p>
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <Divider verticalPadding="py-20" />
      </Container>
    </section>
  );
};

export default CheckUps;
