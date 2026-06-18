import PrimaryButton from "@/components/PrimaryButton";
import { useState } from "react";
import { View } from "react-native";


export default function Profile() {
    const [selectPart, setSelectPart] = useState("vivo")
    const partes = ["cierre", "vivo", "fuelle", "base", "frente"];

    return (

        <View className="flex-1 justify-center items-center">
            {partes.map((parte) =>
                <PrimaryButton 
                label={parte} 
                onPress={() => setSelectPart(parte)} 
                className={selectPart === parte ? "bg-primary" : "bg-zinc-800"}/>)}
        </View>
    )
}