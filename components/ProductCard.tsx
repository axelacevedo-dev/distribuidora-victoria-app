import { Image } from "expo-image";
import { Text, View } from "react-native";
import { products } from "../data/products";
import { Product } from "../types/Product";
import PrimaryButton from "./PrimaryButton";


interface Props{
    product : Product;
}

export default function ProductCard({ product } :Props) {
    return (
        <View style={{backgroundColor:"white", padding:20,borderRadius:20}}>
            {products.map(p => (
                <View key={p.id}>
                    <Image source={p.image}  style={{width:"100%", height:500, resizeMode:"contain",borderBottomWidth:2, borderColor:"orange", marginBottom:20}}/>
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