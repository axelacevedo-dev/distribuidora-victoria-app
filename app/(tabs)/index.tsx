import AppTitle from '@/components/AppTitle'
import PrimaryButton from '@/components/PrimaryButton'
import { router } from 'expo-router'
import { useEffect, useRef } from 'react'
import { Animated, StyleSheet, View } from 'react-native'

interface Props {
    onPress?: () => void
}

export default function HomeScreen() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    
useEffect(() =>{
    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver:true
    }).start();
}, []);

    return (
        <View className="flex-1 items-center bg-background justify-center">
            <Animated.View style={{opacity:fadeAnim,}} className="items-center">
                <AppTitle title={"Distribuidora Victoria"}/>
                <PrimaryButton label={"Empezar Diseño"} onPress={() => router.push("./catalog")}/>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor: "black",
        justifyContent: "center",
        alignItems: "center",
    }
})
