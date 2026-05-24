import { useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import PrimaryButton from "./PrimaryButton";


export default function BackpackPreview() {
    const [colorLeft, setColorLeft] = useState<string | null>(null);
    const [colorRight, setColorright] = useState<string | null>(null);
    const [colorBase, setColorbase] = useState<string | null>(null);
    const [colorZipper, setColorZipper] = useState<string | null>(null);
    const [colorpipingTop, setColorPipingTop] = useState<string | null>(null);
    const [colorPipingBottom, setColorpipingBottom] = useState<string | null>(null);


    return (

        <View>
            <View style={styles.container}>
                <Image style={styles.image} source={require('@/assets/backpack/base-fixed.png')} />
                <Image style={[styles.image, colorLeft ? { tintColor: colorLeft } : {}]} source={require('@/assets/backpack/front-left-mask.png')} />
                <Image style={[styles.image, colorRight ? { tintColor: colorRight } : {}]} source={require('@/assets/backpack/front-right.png')} />
                <Image style={[styles.image, colorBase ? { tintColor: colorBase } : {}]} source={require('@/assets/backpack/bottom-base.png')} />
                <Image style={[styles.image, colorZipper ? { tintColor: colorZipper } : {}]} source={require('@/assets/backpack/zipper.png')} />
                <Image style={[styles.image, colorpipingTop ? { tintColor: colorpipingTop } : {}]} source={require('@/assets/backpack/piping-top.png')} />
                <Image style={[styles.image, colorPipingBottom ? { tintColor: colorPipingBottom } : {}]} source={require('@/assets/backpack/piping-bottom.png')} />
            </View>

            <PrimaryButton label="Azul" onPress={() => setColorLeft(colorLeft === "blue" ? null : "blue")} />
            <PrimaryButton label="Rojo" onPress={() => setColorright(colorRight === "red" ? null : "red")} />
            <PrimaryButton label="Negro" onPress={() => setColorbase(colorBase === "black" ? null : "black")} />
            <PrimaryButton label="Naranja" onPress={() => setColorZipper(colorZipper === "orange" ? null : "orange")} />
            <PrimaryButton label="Verde" onPress={() => setColorPipingTop(colorpipingTop === "green" ? null : "green")} />
            <PrimaryButton label="Amarillo" onPress={() => setColorpipingBottom(colorPipingBottom === "yellow" ? null : "yellow")} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        position: "relative"
    },
    image: {
        width: 400,
        height: 500,
        position: "absolute",
    }
})
