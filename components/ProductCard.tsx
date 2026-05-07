import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { products } from "../data/products";
import { Product } from "../types/Product";
import PrimaryButton from "./PrimaryButton";


interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <View style={styles.container}>
            {products.map(p => (
                <View key={p.id}>
                    <Image source={p.image} style={styles.image} />
                    <Text style={styles.title}>{p.name} </Text>
                    <Text style={styles.description}> {p.description}</Text>
                    <Text style={styles.price}>${p.price}</Text>
                    <Text>{p.category}</Text>
                    <PrimaryButton label="Personalizar" />
                </View>
            ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container:
    {
        width:"100%",
        marginBottom:10,
        padding: 15,
        backgroundColor: "white",
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset:{
            width: 0,
            height:2,
        },
        shadowOpacity:1.00,
        shadowRadius: 3,
        elevation: 4,
    },
    image: {
        width: "100%",
        height: 250,
        alignSelf: "center",
        resizeMode: "contain",
        aspectRatio:1,
    },
    title: {
        color:"#111827",
        fontWeight: 700,
        fontSize:15,
        marginTop:15
    },
    description: {
        color: "#6b7280",
        fontWeight:600,
        marginTop:15

    },
    price: {
        color: "#f5822a",
        fontWeight: "bold",
        marginTop:10,
    },
})