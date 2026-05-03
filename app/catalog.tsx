import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { View } from "react-native";

export default function Catalog () {
    return (
        <View>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </View>
    )
}