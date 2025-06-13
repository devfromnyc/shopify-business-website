export const desktopLayoutOptions = [
  {
    id: "four-per-row",
    title: "4 Per Row",
    description: "Maximum density layout for showcasing many items at once",
    gridClasses: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
  },
  {
    id: "two-per-row",
    title: "2 Per Row",
    description:
      "Balanced layout providing more detail while maintaining grid structure",
    gridClasses: "grid-cols-1 lg:grid-cols-2",
  },
  {
    id: "stacked",
    title: "Stacked",
    description: "Single column layout for maximum focus on individual content",
    gridClasses: "grid-cols-1",
  },
];

export const mobileLayoutOptions = [
  {
    id: "stacked",
    title: "Stacked",
    description: "Single column layout for maximum focus on individual content",
    gridClasses: "grid-cols-1",
  },
  {
    id: "mobile-carousel",
    title: "Mobile Carousel",
    description: "Touch-friendly carousel layout optimized for mobile devices",
    gridClasses: "grid-cols-1",
  },
];

export const contentCards = [
  {
    id: 1,
    image: "/src/assets/store-opening.png",
    title: "Premium Store Setup",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
  },
  {
    id: 2,
    image: "/src/assets/theme-editor.png",
    title: "Custom Theme Development",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
  },
  {
    id: 3,
    image: "/src/assets/shopping-bold.png",
    title: "App Integration Services",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 4,
    image: "/src/assets/rocket.avif",
    title: "Performance Optimization",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
  },
];
