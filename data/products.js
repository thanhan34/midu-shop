export const products = [
  {
    id: 1,
    title: "Doly Dress",
    price: 1500,
    originalPrice: 1900,
    img: "/product01.jpg",
    category: "dresses",
    description:
      "An elegant floral-inspired dress with a flowing silhouette. Crafted from premium breathable fabric, perfect for summer days or special occasions. The delicate cut flatters all body types while keeping you comfortable all day long.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    badge: "New",
    featured: true,
  },
  {
    id: 2,
    title: "Vest Dress",
    price: 1900,
    originalPrice: 2300,
    img: "/product02.jpg",
    category: "dresses",
    description:
      "A sleek modern vest dress with a structured silhouette. This versatile piece transitions seamlessly from day to night, pair it with heels for evening events or sneakers for a casual daytime look.",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.6,
    reviews: 89,
    inStock: true,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 3,
    title: "Leva Dress",
    price: 1300,
    originalPrice: 1600,
    img: "/product03.jpg",
    category: "dresses",
    description:
      "The Leva Dress features a timeless feminine design with soft draping and a flattering cut. Made from lightweight fabric that moves beautifully with every step. A wardrobe essential for every fashion-forward woman.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 67,
    inStock: true,
    badge: null,
    featured: false,
  },
  {
    id: 4,
    title: "Dako Dress",
    price: 1100,
    originalPrice: 1400,
    img: "/product04.jpg",
    category: "dresses",
    description:
      "The Dako Dress offers a casual-chic aesthetic with a comfortable relaxed fit. Perfect for everyday wear, this dress is designed to keep you looking stylish whether you're at brunch or running errands in the city.",
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    rating: 4.4,
    reviews: 102,
    inStock: true,
    badge: "Sale",
    featured: false,
  },
  {
    id: 5,
    title: "Hoda Dress",
    price: 1600,
    originalPrice: 1900,
    img: "/product05.jpg",
    category: "dresses",
    description:
      "Introducing the Hoda Dress — a bold, fashion-forward piece with rich textures and a stunning silhouette. Designed for women who make a statement wherever they go. Features a flattering wrap-style cut and premium lining.",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.9,
    reviews: 56,
    inStock: true,
    badge: "New",
    featured: true,
  },
  {
    id: 6,
    title: "Lola Dress",
    price: 1200,
    originalPrice: 1500,
    img: "/product06.jpg",
    category: "dresses",
    description:
      "The Lola Dress is effortlessly chic with a minimalist design that speaks volumes. Clean lines and premium fabric make this dress a timeless investment piece. Dress it up or down for any occasion.",
    sizes: ["S", "M", "L", "XL"],
    rating: 4.5,
    reviews: 78,
    inStock: true,
    badge: null,
    featured: false,
  },
  {
    id: 7,
    title: "Lily Top",
    price: 1700,
    originalPrice: 2100,
    img: "/product07.jpg",
    category: "tops",
    description:
      "The Lily Top is a standout piece with intricate detailing and a luxurious feel. Designed for the modern woman who values both style and comfort, this top pairs beautifully with wide-leg trousers or tailored skirts.",
    sizes: ["XS", "S", "M", "L", "XL"],
    rating: 4.7,
    reviews: 143,
    inStock: true,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: 8,
    title: "Rose Dress",
    price: 1400,
    originalPrice: 1700,
    img: "/product08.jpg",
    category: "dresses",
    description:
      "The Rose Dress is inspired by romantic aesthetics with soft pastel tones and gentle floral patterns. A dream dress for special occasions like weddings, garden parties, or romantic evenings. Limited edition design.",
    sizes: ["XS", "S", "M", "L"],
    rating: 4.8,
    reviews: 91,
    inStock: false,
    badge: "Limited",
    featured: false,
  },
];

export const getProductById = (id) =>
  products.find((p) => p.id === parseInt(id));

export const getFeaturedProducts = () => products.filter((p) => p.featured);

export const getRelatedProducts = (id, category, limit = 4) =>
  products
    .filter((p) => p.id !== parseInt(id) && p.category === category)
    .slice(0, limit);

export const categories = [
  { label: "All", value: "all" },
  { label: "Dresses", value: "dresses" },
  { label: "Tops", value: "tops" },
];
