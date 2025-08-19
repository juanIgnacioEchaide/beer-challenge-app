import { StyleSheet, ActivityIndicator, TouchableOpacity, Image, ScrollView } from "react-native";
import { Text, View } from "@/components/Themed";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useProducts } from "@/hooks/useProducts";
import { useState } from "react";
import { Sku } from "@/models/product";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { IconName, Icons } from "@/assets/images/icons";

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { data, isLoading, isError } = useProducts();
  const [selectedSku, setSelectedSku] = useState<number>(0);
  const router = useRouter()

  if (isLoading) {
    return (
      <View style={styles.centered}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (isError || !data) {
    return (
      <View style={styles.centered}>
        <Text>Error cargando producto</Text>
      </View>
    );
  }

  const product = data.find((p) => String(p.id) === id);

  if (!product) {
    return (
      <View style={styles.centered}>
        <Text>Producto no encontrado</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: "Detail",
          headerTitleAlign: "center",
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity onPress={() => router.back()}>
              <Text><Ionicons name="arrow-back" style={styles.barButton} size={24} color={tintColor ?? "black"} /></Text>
            </TouchableOpacity>
          ),
          headerRight: ({ tintColor }) => (
            <TouchableOpacity onPress={() => window.alert('click on ellipsis')}>
              <Text><Ionicons name="ellipsis-horizontal" style={styles.barButton} size={24} color={tintColor ?? "black"} /></Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={styles.container} contentContainerStyle={{ alignItems: "center" }}>
        {/* Imagen grande */}
        {product.image && (
          <Image source={Icons[product.image as IconName]} style={styles.image} resizeMode="contain" />
        )}

        {/* Card blanca con info */}
        <View style={styles.card}>
          <View style={styles.headerRow}>
            <Text style={styles.productName}>{product.brand}</Text>
            <Text style={styles.price}>${product.skus[selectedSku].price / 100}</Text>
          </View>
          <Text style={styles.meta}>
            Origin: {product.origin} | Stock: {product.skus[selectedSku].stock}
          </Text>

          {/* Descripción */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Description</Text>
            <Text style={styles.description}>{product.information}</Text>
          </View>

          {/* Tamaños */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Size</Text>
            <View style={styles.skuRow}>
              {product.skus.map((sku: Sku, index: number) => (
                <TouchableOpacity
                  key={sku.name}
                  style={[
                    styles.skuButton,
                    selectedSku === index && styles.skuSelected
                  ]}
                  onPress={() => setSelectedSku(index)}
                >
                  <Text style={selectedSku === index ? styles.skuTextSelected : styles.skuText}>
                    {sku.name.split('z')[0]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Botones */}
          <View style={styles.actions}>
            <TouchableOpacity style={styles.bagButton} onPress={() => window.alert("click on navigate o cart")}>
              <Image source={require('@/assets/images/icons/icon-bag.png')} style={{ width: 24, height: 24 }} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.cartButton} onPress={() => window.alert("click on add to cart")}>
              <Text style={styles.cartText}>Add to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  barButton: {
    backgroundColor: "#ffffffff",
    borderRadius: 30,
    color: 'black'
  },
  centered: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 220,
    height: 423,
    marginTop: 20,
  },
  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -20,
    padding: 20,
    height: 490,
    width: "100%",
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#f7931e", // naranja
  },
  meta: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
    marginBottom: 16,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "#555",
    lineHeight: 20,
  },
  skuRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  skuButton: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 14,
    marginRight: 8,
  },
  skuSelected: {
    backgroundColor: "#f7931e",
    borderColor: "#f7931e",
  },
  skuText: {
    fontSize: 14,
    color: "#333",
  },
  skuTextSelected: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#fff",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  bagButton: {
    width: 50,
    height: 50,
    borderRadius: 12,
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#f7931e",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  bagText: {
    fontSize: 18,
  },
  cartButton: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    backgroundColor: "#f7931e",
    alignItems: "center",
    justifyContent: "center",
  },
  cartText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
