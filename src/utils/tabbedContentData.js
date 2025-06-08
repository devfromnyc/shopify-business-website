import themeEditor from "../assets/theme-editor.png";
import inventory from "../assets/inventory.png";
import programmer from "../assets/programmer.png";
import storeopening from "../assets/store-opening.png";

export const contentSections = [
  {
    id: "business",
    title: "Theme Customizations",
    image: themeEditor,
    heading: "Customize your theme",
    description:
      "Not quite satisfied with your theme? Wish it was more flexible? See sections from other themes or websites that you'd like on your site? We can help!",
    ctaText: "Learn More",
  },
  {
    id: "consulting",
    title: "Extending Shopify",
    image: programmer,
    heading: "Extend your Shopify store",
    description:
      "Looking to optimize your store's performance? From site speed and code-base improvements to strengthening your site's web accessibility (WCAG), we've got you covered.",
    ctaText: "Learn More",
  },
  {
    id: "support",
    title: "Store Setup",
    image: storeopening,
    heading: "Looking to get started with a Shopify Store?",
    description:
      "We can help you with any part of the setup process. From choosing the right theme to adding products and setting up your store, you've come to the right place.",
    ctaText: "Learn More",
  },
  {
    id: "digital",
    title: "Partnership",
    image: inventory,
    heading: "Looking for a strategic partner?",
    description:
      "Need development help part time, full time, any time? we are open to contract and project-based assignments. Let's Partner Up!",
    ctaText: "Learn More",
  },
];
