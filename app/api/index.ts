import products from "@/assets/mocks/products";
import { stockPrice } from "@/assets/mocks/stock-price"
import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:3000/api",
});

export async function getAllProducts() {
    try {
        const { data } = await api.get("/products");
        if (!data || data.length === 0) {
            console.log("using mock products");
            return products;
        }
        return data;
    } catch (err) {
        console.log("error getAllProducts -> fallback to mocks", err);
        return products;
    }
}

export async function getProductDetails(sku: number) {
    try {
        const { data } = await api.get(`/stock-price/${sku}`);
        if (!data || Object.keys(data).length === 0) {
            console.log("using mock detail for", sku);
            return stockPrice[sku];
        }
        return data;
    } catch (err) {
        console.log("error getProductDetails -> fallback", err);
        return stockPrice[sku];
    }
}

export default api