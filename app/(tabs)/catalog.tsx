import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { StyleSheet, View } from "react-native";

export default function Catalog () {
    return (
        <View style={styles.container}>
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
container:
{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
}
})