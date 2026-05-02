import { Image } from 'expo-image';
import { StyleSheet, Text, View } from 'react-native';

interface Props{
    title: string;
}

export default function AppTitle({ title }: Props) {
    return (
        <View style={styles.container}>
            <Image source={require('@/assets/images/distribuidora-victoria-logo.png')}
                style={styles.image} />

            <Text style={styles.text}> { title }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    image: {
        width: 200,
        height: 200,
    },
    text: {
        color: "orange",
        fontSize: 25,
        fontWeight:"500"
    }
})