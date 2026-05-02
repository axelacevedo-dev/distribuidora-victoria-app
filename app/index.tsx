import AppTitle from '@/components/AppTitle'
import PrimaryButton from '@/components/PrimaryButton'
import { StyleSheet, View } from 'react-native'

export default function HomeScreen() {
    return (
            <View style={styles.container}>
                <AppTitle title="Distribuidora Victoria"/>
                <PrimaryButton label= "Empezar diseño"/>
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
