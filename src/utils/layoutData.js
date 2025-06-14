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
    title: "Lorem Ipsum Dolor",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.8,
    reviewCount: 120,
    inStock: true,
  },
  {
    id: 2,
    image: "/src/assets/theme-editor.png",
    title: "Sit Amet Consectetur",
    description:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.5,
    reviewCount: 85,
    inStock: true,
  },
  {
    id: 3,
    image: "/src/assets/shopping-bold.png",
    title: "Adipiscing Elit Sed",
    description:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.9,
    reviewCount: 210,
    inStock: false,
  },
  {
    id: 4,
    image: "/src/assets/rocket.avif",
    title: "Eiusmod Tempor",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis.",
    price: 199.99,
    originalPrice: 249.99,
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
  },
];
