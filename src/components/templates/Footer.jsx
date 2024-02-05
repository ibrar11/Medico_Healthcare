import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  ListItem,
  FooterDetails,
  FooterSocialLinks,
} from "../index";
import { footerDetails } from "../../data/footerData";
import { links } from "../../data/footerSocialLinks";

const Footer = () => {
  return (
    <footer className="bg-primary text-white">
      <Divider verticalPadding="py-5 sm:py-10" />
      <Container>
        <div className="flex flex-col gap-y-10">
          <div className="flex flex-row flex-wrap gap-x-12 gap-y-10 md:gap-x-20">
            <div className="flex flex-col gap-y-8">
              <ListItem
                icon="/images/whitehealthcare.svg"
                text="Medico"
                textStyle="font-bold sm:text-lg leading-normal text-base md:text-xl lg:text-2xl"
                alt="whitehealthcare"
                styles="gap-x-4"
              />
              <div className="flex flex-col gap-y-5">
                <Link>
                  <ListItem
                    icon="/images/arrowCursor.svg"
                    text="Take an Appointment"
                    textStyle="font-bold text-base leading-normal md:text-xl sm:text-lg ml-0"
                    alt="arrowCursor"
                    iconStyle="max-w-4"
                    styles="gap-x-5 border-1px border-solid border-white p-4 rounded-lg ml-0"
                  />
                </Link>
                <Link>
                  <ListItem
                    icon="/images/whatsapp.svg"
                    text="Connect on Whatsapp"
                    textStyle="font-bold text-base leading-normal md:text-xl sm:text-lg ml-0"
                    alt="whatsapp"
                    iconStyle="max-w-5"
                    styles="gap-x-4 border-1px border-solid border-white p-4 rounded-lg"
                  />
                </Link>
              </div>
            </div>
            {footerDetails.map((data, index) => {
              return (
                <FooterDetails
                  key={index}
                  title={data.title}
                  list={data.list}
                />
              );
            })}
          </div>
          <div className="flex justify-center gap-x-4 sm:justify-end">
            {links.map((link) => {
              return <FooterSocialLinks src={link.src} alt={link.alt} />;
            })}
          </div>
        </div>
      </Container>
      <Divider verticalPadding="py-5 sm:py-10" />
    </footer>
  );
};

export default Footer;
