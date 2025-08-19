import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { PlusButton } from "./PlusButton";
import { useRouter } from "expo-router";
import { useProducts } from "@/hooks/useProducts";

type ProductCardProps = {
    id: number;
    index: number;
};

export function ProductCard({ id, index }: ProductCardProps) {
    const isLeft = index % 2 === 0;
    const { data } = useProducts();
    const product = data?.find((p) => p.id === Number(id));
    const router = useRouter()

    if (!product) return null;

    return (
        <TouchableOpacity
            onPress={() => {
                router.push(`/detail/${id}`)
            }}>
            <View style={[
                styles.card,
                isLeft ? styles.leftCard : styles.rightCard
            ]}>
                <Text style={styles.name}>{product.brand}</Text>

                {product.image && (
                    <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />
                )}
                <Text style={styles.price}>${product.skus[0].price}</Text>
                <View style={styles.buttonContainer}>
                    <PlusButton onPress={() => console.log(JSON.stringify(product))} />
                </View>
            </View>
        </TouchableOpacity>
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
