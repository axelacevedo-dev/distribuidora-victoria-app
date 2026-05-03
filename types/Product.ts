import { ImageSourcePropType } from "react-native";

export interface Product {
  id: number;
  name: string;
  description: string;
  category: string;
  price: number;
  image: ImageSourcePropType
}
