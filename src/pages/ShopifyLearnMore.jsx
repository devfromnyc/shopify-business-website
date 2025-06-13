import React from "react";
import { Hero } from "../components/sections/Hero";
import LayoutTabbedContent from "../components/sections/LayoutTabbedContent";
import Carousel from "../components/sections/Carousel";
import Pricing from "../components/sections/Pricing";
import ContactUs from "../components/sections/ContactUs";

export const ShopifyLearnMore = () => {
  const carouselItems = [
    {
      image: "/src/assets/store-opening.png",
      title: "Premium Store Setup",
      description:
        "Get your store up and running with our expert setup services. We ensure everything is configured perfectly for your business needs.",
    },
    {
      image: "/src/assets/theme-editor.png",
      title: "Custom Theme Development",
      description:
        "Transform your store with a custom theme that perfectly matches your brand identity and business requirements.",
    },
    {
      image: "/src/assets/shopping-bold.png",
      title: "App Integration Services",
      description:
        "Seamlessly integrate essential apps and tools to enhance your store's functionality and user experience.",
    },
    {
      image: "/src/assets/rocket.avif",
      title: "Performance Optimization",
      description:
        "Boost your store's speed and performance with our expert optimization techniques.",
    },
  ];

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
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of Shopify services
            </p>
          </div>
          <Carousel items={carouselItems} autoPlay={true} interval={4000} />
        </div>
      </div>
      <LayoutTabbedContent />
      <Pricing />
      <ContactUs />
    </>
  );
};
