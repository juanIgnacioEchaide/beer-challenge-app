import { View, Text, StyleSheet } from "react-native";

export default function Greetings({
    header,
    subheader,
    paragraph }: {
        header: string;
        subheader: string;
        paragraph?: string
    }) {
    return (<View style={styles.container}>
        <Text style={styles.title}>
            {header}
        </Text>
        <Text style={styles.subtitle}>
            {subheader}
        </Text>
    </View>)
}

const styles = StyleSheet.create({
    container: {
        height: 50,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
    },
    title: {
        color: '#504747aa'
    },
    subtitle: {
        fontSize: 30,
        textDecorationColor: 'bold'
    },
    paragraph: {

    }
});