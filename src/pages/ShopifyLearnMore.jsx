import React from "react";
import { Hero } from "../components/sections/Hero";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";

export const ShopifyLearnMore = () => {
  return (
    <>
      <Hero
        header="Grow your business with us"
        subheader="Whatever your business needs, we've got you covered!"
        bullet1Text="Enhancing Your Shopify Store"
        bullet2Text="Strategic Partnerships"
        bullet3Text="& Much much more!"
        alignContent="left"
        heroImage="themeEditor"
        sectionId="shopify-hero"
      />
      <Pricing />
      <ContactUs />
    </>
  );
};
