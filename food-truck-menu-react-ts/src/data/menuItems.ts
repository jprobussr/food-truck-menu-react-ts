export type MenuItem = {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  tag: string;
};

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Fire-Grilled Street Tacos",
    description:
      "Three warm corn tortillas loaded with seasoned steak, lime crema, cilantro, and smoky salsa.",
    price: "$11",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=900&q=80",
    tag: "Best Seller",
  },
  {
    id: 2,
    name: "Loaded Night Market Fries",
    description:
      "Crispy fries topped with queso, spicy chicken, pico, jalapeños, and our house sauce.",
    price: "$9",
    image:
      "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=900&q=80",
    tag: "Shareable",
  },
  {
    id: 3,
    name: "Smash Burger Slider Duo",
    description:
      "Two juicy smash sliders with melted cheddar, pickles, onions, and roasted garlic aioli.",
    price: "$12",
    image:
      "https://images.unsplash.com/photo-1550317138-10000687a72b?auto=format&fit=crop&w=900&q=80",
    tag: "New",
  },
];