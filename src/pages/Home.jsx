import React, { useState } from "react";
import { Hero } from "../components/sections/Hero";
import TextBlock from "../components/sections/TextBlock";
import ImageWithText from "../components/sections/ImageWithText";
import shopify from "../assets/shopify.avif";
import ecommerce from "../assets/ecommerce.png";
import FeaturedImages from "../components/sections/FeaturedImages";
import { ServiceIcons } from "../components/sections/ServiceIcons";
import Pricing from "../components/sections/Pricing";
import Faq from "../components/sections/Faq";
import { faqData } from "../utils/faqData";

export const Home = () => {
  return (
    <>
      <Hero header="Build your business with us" alignContent="left" />
      <TextBlock
        header="Who We Are"
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        secondaryText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        alignContent="left"
      />
      <FeaturedImages
        image={shopify}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        alignContent="left"
      />
      <ImageWithText
        image={shopify}
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        alignContent="left"
      />
      <div className="flex flex-col gap-12">
        <ImageWithText
          image={ecommerce}
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
          alignContent="vertical"
        />
      </div>
      <ServiceIcons
        icon1Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        icon2Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        icon3Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        icon4Text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
        header="Our Services"
        paragraphText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos."
      />
      <Pricing
        plan="Basic"
        plan2="Pro"
        plan3="Enterprise"
        planPrice={29}
        plan2Price={79}
        plan3Price={149}
      />
      <Faq
        questions={faqData}
        layout="column"
        header="Frequently Asked Questions"
        paragraphText="Find answers to common questions about our services and how we can help your business grow."
      />
    </>
  );
};
