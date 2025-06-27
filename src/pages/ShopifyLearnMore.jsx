import React from "react";
import { Hero } from "../components/sections/Hero";
import LayoutTabbedContent from "../components/sections/LayoutTabbedContent";
import Stats from "../components/sections/Stats";
import ImageWithText from "../components/sections/ImageWithText";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";
import storeOpeningImg from "../assets/store-opening.png";
import shopifyThemeImg from "../assets/shopify-theme.png";

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
      <Stats
        title="Storefront Optimizations"
        subtitle="We take a practical approach to storefront optimizations. We focus on what is most important to your business and what will help you grow. Below are some important metrics on the importance of an optimized Shopify storefront."
      />
      <ImageWithText
        image={storeOpeningImg}
        title="Effortless Store Setup"
        description="Get your Shopify store up and running in no time. Our streamlined setup process guides you through every step, from choosing a theme to adding your first products. With intuitive tools and expert support, you can launch your online business with confidence and ease. Focus on what matters most—growing your brand—while we handle the technical details."
        imageAlt="Shopify store setup illustration"
      />
      <ImageWithText
        image={shopifyThemeImg}
        title="A True Partnership"
        description="We believe in building lasting partnerships with our clients. Our team is dedicated to supporting your business at every stage, offering personalized guidance and proactive solutions. Whether you need help with custom features, ongoing maintenance, or strategic advice, we're here to ensure your Shopify store thrives. Experience the difference of working with a partner who truly cares about your success."
        imageAlt="Shopify partnership illustration"
        reverse={true}
      />
      <Pricing />
      <ContactUs />
    </>
  );
};

export default ShopifyLearnMore;
