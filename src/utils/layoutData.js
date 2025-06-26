import sneakers1 from "../assets/sneakers1.avif";
import sneakers2 from "../assets/sneakers2.avif";
import sneakers3 from "../assets/sneakers3.avif";
import sneakers4 from "../assets/sneakers4.avif";

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
    image: sneakers1,
    title: "Premium Sneakers",
    description:
      "High-quality sneakers with superior comfort and style. Perfect for everyday wear.",
    price: 99.99,
    originalPrice: 129.99,
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
  },
  {
    id: 2,
    image: sneakers2,
    title: "Sport Edition",
    description:
      "Designed for performance and durability. Ideal for athletes and sports enthusiasts.",
    price: 89.99,
    originalPrice: 119.99,
    rating: 4.8,
    reviewCount: 95,
    inStock: true,
  },
  {
    id: 3,
    image: sneakers3,
    title: "Casual Collection",
    description:
      "Stylish and comfortable sneakers for casual outings. Versatile design for any occasion.",
    price: 79.99,
    originalPrice: 99.99,
    rating: 4.3,
    reviewCount: 76,
    inStock: true,
  },
  {
    id: 4,
    image: sneakers4,
    title: "Limited Edition",
    description:
      "Exclusive design with premium materials. A must-have for sneaker collectors.",
    price: 149.99,
    originalPrice: 199.99,
    rating: 4.9,
    reviewCount: 42,
    inStock: false,
  },
];
