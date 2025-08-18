import Greetings from "@/components/Greetings";
import ProductsList from "@/components/ProductsList";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import products from '../assets/mocks/products'

export default function ProductListingPage() {
    const user = 'Michael'

    return <View style={styles.container}>
        <Greetings
            header={`Hi Mr ${user}`}
            subheader={"Welcome Back!"}
            paragraph={""} />
        <ProductsList data={products} />
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
});