import { PropsWithChildren } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { ProductCard } from "./ProductCard";
import { Product } from "@/models/product";

type ProductsListProps = PropsWithChildren<{
    data: Product[];
}>;

export default function ProductsList({ data }: ProductsListProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Our Products</Text>
            <FlatList
                data={data}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item, index }) => (
                    <ProductCard id={item.id} index={index} />
                )}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 12,
    },
    list: {
        justifyContent: "center",
    },
    row: {
        justifyContent: "space-between",
        marginBottom: 12,
    },
});
