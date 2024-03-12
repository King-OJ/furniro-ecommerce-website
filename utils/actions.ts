import cloudinary from "./cloudinary";
import { prisma } from "./db/prisma";

export const relatedProducts = [
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "syltherine",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product1.png",
    discount: 30,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "leviosa",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product2.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "lolito",
    title: "luxury big sofa",
    price: 7000,
    imageUrl: "/product3.png",
    discount: 50,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "respira",
    title: "outdoor bar table and stool",
    price: 50000,
    imageUrl: "/product4.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
];
export const allProducts = [
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "syltherine",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product1.png",
    discount: 30,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "leviosa",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product2.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "lolito",
    title: "luxury big sofa",
    price: 7000,
    imageUrl: "/product3.png",
    discount: 50,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "respira",
    title: "outdoor bar table and stool",
    price: 50000,
    imageUrl: "/product4.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "syltherine",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product1.png",
    discount: 30,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "leviosa",
    title: "stylish cafe chair",
    price: 2500,
    imageUrl: "/product2.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "lolito",
    title: "luxury big sofa",
    price: 7000,
    imageUrl: "/product3.png",
    discount: 50,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
  {
    id: "12345",
    description: "Hello this is the best product",
    name: "respira",
    title: "outdoor bar table and stool",
    price: 50000,
    imageUrl: "/product4.png",
    discount: null,
    updatedAt: new Date(Date.now()),
    createdAt: new Date(Date.now()),
  },
];

export const products = [
  {
    title: "syltherine",
    subtitle: "stylish cafe chair",
    newPrice: "2500.00",
    oldPrice: "3500.00",
    productImg: "/product1.png",
    discount: 30,
    newProduct: false,
  },
  {
    title: "leviosa",
    subtitle: "stylish cafe chair",
    newPrice: "2500.00",
    oldPrice: "",
    productImg: "/product2.png",
    discount: null,
    newProduct: false,
  },
  {
    title: "lolito",
    subtitle: "luxury big sofa",
    newPrice: "7000.00",
    oldPrice: "14000.00",
    productImg: "/product3.png",
    discount: 50,
    newProduct: false,
  },
  {
    title: "respira",
    subtitle: "outdoor bar table and stool",
    newPrice: "50000.00",
    oldPrice: "",
    productImg: "/product4.png",
    discount: null,
    newProduct: true,
  },
  {
    title: "grifo",
    subtitle: "night lamp",
    newPrice: "1500.00",
    oldPrice: "",
    productImg: "/product5.png",
    discount: null,
    newProduct: false,
  },
  {
    title: "muggo",
    subtitle: "small mug",
    newPrice: "2500.00",
    oldPrice: "",
    productImg: "/product6.png",
    discount: null,
    newProduct: true,
  },
  {
    title: "pingky",
    subtitle: "cute bed set",
    newPrice: "7000.00",
    oldPrice: "14000.00",
    productImg: "/product7.png",
    discount: 50,
    newProduct: false,
  },
  {
    title: "potty",
    subtitle: "minimalist flower pot",
    newPrice: "5000.00",
    oldPrice: "",
    productImg: "/product8.png",
    discount: null,
    newProduct: true,
  },
];

export async function uploadImgToCloudinary() {
  const timestamp = Math.round(new Date().getTime() / 1000);

  // return { timestamp, signature };
}

export async function getProducts() {
  return prisma.product.findMany({
    orderBy: { id: "desc" },
  });
}

export async function getSingleProduct(id: string) {
  return prisma.product.findUnique({
    where: { id: id },
  });
}
