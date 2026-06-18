import { StyleSheet, View } from "react-native";

export default function BackpackPreview(){
    return(
        <View className="relative w-96 h-96">
        </View>
    )
}

const styles = StyleSheet.create({
    layer:{
        position: "absolute",
        resizeMode:"contain",
        width:"auto"
    }
})