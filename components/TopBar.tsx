import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export default function TopBar() {
    return <View style={styles.container}>
        <TouchableOpacity style={styles.menu} onPress={() => { window.alert('click on burger icon') }}>
            <Image source={require('@/assets/images/icons/menu-icon.png')} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={require('@/assets/images/icons/profile.jpg')} style={styles.image} resizeMode="contain" />
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f5f1f1ee',
        height: 95,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginTop: 2
    },
    image: {
        height: 60,
        width: 60,
        borderRadius: 30
    },
    menu: {
        backgroundColor: '#fafafa',
        padding: 10,
        borderRadius: 10
    }
});
