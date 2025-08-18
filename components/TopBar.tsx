import { View, Text, StyleSheet, Image } from "react-native";

export default function TopBar() {
    return <View style={styles.container}>
        <Image source={{ uri: '../assets/images/icons/Sin título-1.jpg' }} style={styles.image} resizeMode="contain" />
        <Text>HOLA</Text>

    </View>
}

const styles = StyleSheet.create({
    container: {
        height: 85
    },
    image: {

    }
});
