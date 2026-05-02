import { products } from "@/components/data/products";
import ProductCart from "@/components/ProductCart";
import { View } from "react-native";

export default function catalog () {
    return (
        <View>
            {products.map((p) => (
                <ProductCart key={p.id} product={p} />
            ))}
        </View>
    )
}