import AppTitle from '@/components/AppTitle'
import PrimaryButton from '@/components/PrimaryButton'
import { router } from 'expo-router'
import { StyleSheet, View } from 'react-native'

interface Props {
    onPress?: () => void
}

export default function HomeScreen() {
    return (
            <View style={styles.container}>
                <AppTitle title={"Distribuidora Victoria"}/>
                <PrimaryButton label={"Empezar Diseño"} onPress={() => router.push("./catalog")}/>
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
