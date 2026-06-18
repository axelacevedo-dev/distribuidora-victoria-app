import { Colors } from "@/constants/colors";
import { Pressable, StyleSheet, Text } from "react-native";

interface Props {
    label: string;
    onPress?: () => void;
    className?: string;
}

export default function PrimaryButton({ label, onPress,className }: Props) {
    return (
        <Pressable onPress={onPress} 
        style={styles.buttonShadow}
        className={`bg-primary rounded-3xl py-3 px-6 mt-4 active:opacity-80 active:scale-95 ${className}`}>
            <Text className="text-white font-semibold ls-1 text-center tracking-wide text-lg">
                {label}
            </Text>
        </Pressable >
    )
}

const styles = StyleSheet.create({
    buttonShadow: {
        shadowColor: Colors.primary,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 10,
        shadowOpacity: 0.8
    }

})