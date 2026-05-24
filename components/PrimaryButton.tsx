import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string;
    onPress?: () => void;
}

export default function PrimaryButton({ label, onPress }: Props) {
    return (
        <Pressable style={styles.button} onPress={onPress}>
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
        borderWidth: 2,
        borderColor: "#f48634",
        shadowColor: "#f48634",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 6,
        marginTop: 20,
        elevation: 6,
    },
    text: {

        fontWeight: "600",
        fontSize: 20,
        color: "#f48634"
    }
})