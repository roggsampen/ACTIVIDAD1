import imagen01 from "./images/imagen01.jpg";
import imagen02 from "./images/imagen02.jpg";
import imagen03 from "./images/imagen03.jpg";

export interface Libro {
  id: number;
  title: string;
  autor: string;
  url: string;
  price: number;
}

export const arrayLibro: Libro[] = [
  {
    id: 1,
    title: "Las aventuras de Conan el bárbaro",
    autor: "Juan del Val",
    url: imagen01,
    price: 59.90
  },
  {
    id: 2,
    title: 'La espada fulgurante ',
    autor: "Megan Maxwell",
    url: imagen02,
    price: 55.90
  },
  {
    id: 3,
    title: 'Harry Potter y el cáliz de fuego',
    autor: "Arturo Pérez, Reverte",
    url: imagen03,
    price: 79.90
  },
  {
    id: 4,
    title: 'La Comunidad del Anillo.',
    autor: "Ángela Banzas",
    url: imagen01,
    price: 99.90
  },
  {
    id: 5,
    title: 'Hasta que caiga la luna',
    autor: "Julia Quinn",
    url: imagen02,
    price: 35.0
  },
  {
    id: 6,
    title: 'Viento y verdad.',
    autor: "Juan Miguel Zunzunegui",
    url: imagen03,
    price: 20.00
  },
  {
    id: 7,
    title: 'Viento y verdad.',
    autor: "Juan Miguel Zunzunegui",
    url: imagen01,
    price: 50.00
  },
  {
    id: 8,
    title: 'Viento y verdad.',
    autor: "Juan Miguel Zunzunegui",
    url: imagen02,
    price: 60.00
  },
  {
    id: 9,
    title: 'Viento y verdad.',
    autor: "Juan Miguel Zunzunegui",
    url: imagen03,
    price: 60.00
  },
  {
    id: 10,
    title: 'Viento y verdad.',
    autor: "Juan Miguel Zunzunegui",
    url: imagen01,
    price: 40.00
  }
];
