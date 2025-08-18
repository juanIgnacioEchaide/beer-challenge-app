import { getAllProducts, getProductDetails } from "@/app/api";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
    return useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const products = await getAllProducts();
            console.log("products from API", products);

            const enrichedProducts = await Promise.all(
                products.map(async (product: any) => {
                    const enrichedSkus = await Promise.all(
                        product.skus.map(async (sku: any) => {
                            const detail = await getProductDetails(sku.code);
                            return { ...sku, ...detail };
                        })
                    );

                    const enrichedProduct = { ...product, skus: enrichedSkus };
                    console.log("enrichedProduct", enrichedProduct);
                    return enrichedProduct;
                })
            );

            console.log("enrichedProducts", enrichedProducts);
            return enrichedProducts;
        },
    });
};
