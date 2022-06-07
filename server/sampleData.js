const products = [
  {
    id: 1,
    name: "BROCA DE HIERRO 1/2' X 1'",
    brand: "SANDFLEX",
    tag: ["ALBAÑIRERIA"],
    quantity: 10,
    unit: "unidad",
    buyPrice: 2.0,
    sellPrice: 2.5,
    img: "",
  },
  {
    id: 2,
    name: "BALDE DE PINTURA COLOR ROJO",
    brand: "ANIPSA",
    tag: ["PINTURA", "ALBAÑIRERIA", "EXTERIORES"],
    quantity: 4,
    unit: "BALDE",
    buyPrice: 24.0,
    sellPrice: 27.0,
    img: "",
  },
  {
    id: 3,
    name: "ESMALTE DE 1/4 DE GALON COLOR VERDE",
    brand: "LATEX PATO",
    tag: ["ALBAÑIRERIA", "ESMALTE", "PINTURA"],
    quantity: 15,
    unit: "UNIDAD",
    buyPrice: 14.0,
    sellPrice: 16.5,
    img: "",
  },
];

const users = [
  {
    id: 1,
    name: "Josep",
    lastName: "Rojas",
    role: "ADMIN",
    phone: "999112233",
    email: "laconstructora@gmail.com",
  },
  {
    id: 2,
    name: "Dina",
    lastName: "Baca",
    role: "ADMIN",
    phone: "999112233",
    email: "laconstructora2@gmail.com",
  },
  {
    id: 3,
    name: "Edwin",
    lastName: "Rojas",
    role: "ADMIN",
    phone: "999112233",
    email: "laconstructora3@gmail.com",
  },
  {
    id: 4,
    name: "Diego",
    lastName: "Rojas",
    role: "ADMIN",
    phone: "999112233",
    email: "laconstructora4@gmail.com",
  },
];

module.exports = { products, users };
