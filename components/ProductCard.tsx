import { View, Text, StyleSheet, Image } from "react-native";
import { Product } from "@/models/product";
import { PlusButton } from "./PlusButton";

type ProductCardProps = {
    product: Product;
    index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
    const isLeft = index % 2 === 0;

    return (
        <View style={[
            styles.card,
            isLeft ? styles.leftCard : styles.rightCard
        ]}>
            <Text style={styles.name}>{product.brand}</Text>

            {product.image && (
                <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
            )}
            <Text style={styles.price}>$1000</Text>
            <View style={styles.buttonContainer}>
                <PlusButton onPress={() => console.log(product.id)} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        width: 155,
        height: 195,
        backgroundColor: "#fff",
        shadowColor: "#aca6a6ff",
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.01,
        shadowRadius: 4,
        elevation: 4,
        marginBottom: 16,
        marginHorizontal: 4,
        padding: 12,
        justifyContent: "flex-start",
        alignItems: "center",
        borderRadius: 12,
    },
    leftCard: {
        borderTopRightRadius: 32,
    },
    rightCard: {
        borderTopLeftRadius: 32,
    },
    name: {
        fontSize: 14,
        fontWeight: "600",
        marginBottom: 8,
        textAlign: "center",
    },
    image: {
        width: 80,
        height: 120,
        marginBottom: 8,
    },
    price: {
        fontSize: 14,
        fontWeight: "bold",
        marginBottom: 8,
    },
    buttonContainer: {
        position: "absolute",
        bottom: 8,
        right: 8, // siempre en la esquina inferior derecha
    },
});
