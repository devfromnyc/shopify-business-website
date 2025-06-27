import React, { useState } from "react";
import { Hero } from "../components/sections/Hero";
import TextBlock from "../components/sections/TextBlock";
import Faq from "../components/sections/Faq";
import TabbedContent from "../components/sections/TabbedContent";
import ServicesPills from "../components/sections/ServicesPills";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";
import { faqData } from "../utils/faqData";

export const Home = () => {
  return (
    <>
      <Hero
        header="Grow your business with us"
        subheader="Whatever your business needs, we've got you covered!"
        bullet1Text="Enhancing Your Shopify Store"
        bullet2Text="Strategic Partnerships"
        bullet3Text="Store setup & much much more!"
        alignContent="left"
      />
      <TextBlock
        header="Who We Are"
        text="We are a team of Shopify Experts who are passionate about helping businesses reach their full potential."
        secondaryText="Whatever your business needs, we've got you covered! We provide services for all business regardless of size."
        alignContent="left"
      />
      <TabbedContent />
      <ServicesPills direction="column" />
      <Pricing />
      <Faq
        questions={faqData}
        layout="column"
        header="Frequently Asked Questions"
        paragraphText="Find answers to common questions about our services and how we can help your business grow."
      />
      <ContactUs />
    </>
  );
};
