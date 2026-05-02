import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string
}

export default function PrimaryButton({ label }: Props) {
    return (
        <Pressable style={styles.button}>
            <Text style={styles.text}>
                { label }
            </Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 12,
        padding: 10,
        backgroundColor: "#f48634",
        shadowColor: "white",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        marginTop: 20,
        elevation: 6,
    },
    text: {

        fontWeight: "600",
        fontSize: 20
    }
})