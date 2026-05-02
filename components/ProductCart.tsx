import { Text, View } from "react-native";
import PrimaryButton from "./PrimaryButton";
import { products } from "./data/products";
import { Product } from "./types/Product";


interface Props{
    product : Product;
}

export default function ProductCart({ product } :Props) {
    return (
        <View>
            {products.map(p => (
                <View key={p.id}>
                    <Text>{p.name} </Text>
                    <Text> {p.description}</Text>
                    <Text>${p.price}</Text>
                    <Text>{p.category}</Text>
                    <PrimaryButton label="Personalizar" />
                </View>
    ))
}
    </View>
)}