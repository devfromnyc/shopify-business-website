import React from "react";
import { Hero } from "../components/sections/Hero";
import LayoutTabbedContent from "../components/sections/LayoutTabbedContent";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";

export const ShopifyLearnMore = () => {
  return (
    <>
      <Hero
        header="Total Control of Your Shopify Theme"
        subheader="We make sure you have the tools to make your theme work for you."
        bullet1Text="Custom Sections"
        bullet2Text="Scalable components"
        bullet3Text="Theme Optimizations"
        alignContent="left"
        heroImage="themeEditor"
        sectionId="shopify-hero"
      />
      <LayoutTabbedContent />
      <Pricing />
      <ContactUs />
    </>
  );
};
