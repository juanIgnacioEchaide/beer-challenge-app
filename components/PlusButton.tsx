import React from "react";
import { TouchableOpacity, StyleSheet, GestureResponderEvent, Text } from "react-native";

type IconButtonProps = {
    onPress: (event: GestureResponderEvent) => void;
};

export function PlusButton({ onPress }: IconButtonProps) {
    return <TouchableOpacity style={styles.button} onPress={onPress}><Text style={styles.symbol}>+</Text></TouchableOpacity>
}

const styles = StyleSheet.create({
    button: {
        zIndex: 1,
        width: 40,
        height: 40,
        opacity: 1,
        borderTopLeftRadius: 12,
        borderBottomRightRadius: 12,
        bottom: -8,
        right: -8,
        transform: [{ rotate: "0deg" }],
        borderRadius: 1,
        backgroundColor: "#f90",
        alignItems: "center",
        justifyContent: "center",
    },
    symbol: {
        color: "white",
        fontSize: 35,
        bottom: 5,
    }
});
