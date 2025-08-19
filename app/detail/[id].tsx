import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, ActivityIndicator, Button, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { useLocalSearchParams } from "expo-router";
import { useProducts } from "@/hooks/UseProducts";
import { useState } from "react";
import { Product, Sku } from "@/models/product";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError } = useProducts();
  const [selectedSku, setSelectedSku] = useState<number>(0);

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.container}>
        <Text>Error cargando producto</Text>
      </View>
    );
  }

  const product = data.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <View style={styles.container}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.paragraph}>
        <View style={styles.topBar}>
          <Text style={styles.title}>{product.brand}</Text>
          <Text>Origin: {product.origin} | Stock: {product.skus[selectedSku].stock}</Text>
        </View>
        <View style={styles.paragraph}>
          <Text>${product.skus[selectedSku].price}</Text>
        </View>
      </View>

      <View>
        <Text>Description</Text>
        <Text>{product.information}</Text>
      </View>
      <View>
        <Text>Size</Text>
        <View style={styles.paragraph}>
          {product.skus.map((sku: Sku) =>
            <TouchableOpacity><Text>{sku.name}</Text></TouchableOpacity>)}
        </View>
      </View>
      <View style={styles.paragraph}>
        <TouchableOpacity><Text>bolso</Text></TouchableOpacity>
        <TouchableOpacity><Text>Add to cart</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
  topBar: {
    display: 'flex',
    width: 300,
    flexDirection: 'column',
    alignItems: "center",
    justifyContent: "space-around",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  paragraph: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: "center",
  },

});
