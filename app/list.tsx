import Greetings from "@/components/Greetings";
import ProductsList from "@/components/ProductsList";
import { View, StyleSheet } from "react-native";
import products from '../assets/mocks/products'
import { useProducts } from "@/hooks/useProducts";
import { useEffect } from "react";

export default function ProductListingPage() {
    const user = 'Michael'
    const { data, isLoading, isError } = useProducts();

    useEffect(() => {
        console.log('caca', data)
    }, [data])

    return <View style={styles.container}>
        <Greetings
            header={`Hi Mr ${user}`}
            subheader={"Welcome Back!"}
            paragraph={""} />
        <ProductsList data={isLoading || !data ? [] : data} />

    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
});