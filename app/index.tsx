import { StyleSheet, View } from 'react-native'
import Catalog from './catalog'

export default function HomeScreen() {
    return (
            <View style={styles.container}>
                <Catalog />
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
