import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import { Container, Divider } from "../index";

const FeedBack = () => {
  return (
    <section>
      <Divider verticalPadding="py-5 sm:py-10" />
      <Container>
        <Swiper
          autoplay={{ delay: "5000" }}
          navigation={true}
          modules={[Navigation, Autoplay]}
        >
          <SwiperSlide>
            <div className="flex flex-col gap-y-8 sm:flex-row sm:items-end sm:gap-x-10 md:px-12 lg:px-24 xl:px-28">
              <div className="w-max-90.5 relative flex items-end justify-center rounded-xl after:absolute  after:bottom-0 after:left-0 after:z-10 after:h-32 after:w-full after:rounded-lg after:bg-secondary sm:w-1/2">
                <img
                  className="z-20 h-auto w-auto rounded-lg"
                  src="/images/feedbackperson.png"
                  alt="feedbackperson"
                />
              </div>
              <div className="flex flex-col gap-y-5 sm:w-1/2 md:gap-y-8">
                <div className="flex flex-col gap-y-4">
                  <div className="max-w-14">
                    <img src="/images/quotesFrame.svg" alt="quotesFrame" />
                  </div>
                  <div className="flex">
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                  </div>
                  <h3 className="lg:text-3.5xl pr-2 text-xl font-bold sm:text-2xl">
                    “A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy”
                  </h3>
                </div>
                <div>
                  <p className="text-base font-medium leading-normal md:text-xl">
                    Mr. Williams
                  </p>
                  <p className="text-sm font-normal leading-normal md:text-base">
                    Diabetes Patient
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col gap-y-8 sm:flex-row sm:items-end sm:gap-x-10 md:px-12 lg:px-24 xl:px-28">
              <div className="w-max-90.5 relative flex items-end justify-center rounded-xl after:absolute  after:bottom-0 after:left-0 after:z-10 after:h-32 after:w-full after:rounded-lg after:bg-secondary sm:w-1/2">
                <img
                  className="z-20 h-auto w-auto rounded-lg"
                  src="/images/feedbackperson.png"
                  alt="feedbackperson"
                />
              </div>
              <div className="flex flex-col gap-y-5 sm:w-1/2 md:gap-y-8">
                <div className="flex flex-col gap-y-4">
                  <div className="max-w-14">
                    <img src="/images/quotesFrame.svg" alt="quotesFrame" />
                  </div>
                  <div className="flex">
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                    <img src="/images/ratingStar.svg" alt="ratingStar" />
                  </div>
                  <h3 className="lg:text-3.5xl  pr-2 text-xl font-bold sm:text-2xl">
                    “A wonderful serenity has taken possession of my entire
                    soul, like these sweet mornings of spring which I enjoy”
                  </h3>
                </div>
                <div>
                  <p className="text-base font-medium leading-normal md:text-xl">
                    Mr. Williams
                  </p>
                  <p className="text-sm font-normal leading-normal md:text-base">
                    Diabetes Patient
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </Container>
      <Divider verticalPadding="py-5 sm:py-10" />
    </section>
  );
};

export default FeedBack;
