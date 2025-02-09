import { Product } from "@/api/product.type";
import { atom } from "recoil";

export const recommendState = atom<Product[]>({
  key: 'recommendState',
  default: [],
});