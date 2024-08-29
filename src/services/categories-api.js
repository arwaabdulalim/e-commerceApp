import { apiService } from "./api";

export const getCategoriesFromProducts = async () => {
    try {
        const { data: products } = await apiService().get('/products');

        const categories = [];

        products.forEach(product => {
            const existingCategory = categories.find(category => category.title === product.category);

            if (!existingCategory) {
                categories.push({
                    id: categories.length.toString(),
                    title: product.category,
                    image: product.image,
                });
            }
        });

        return categories;
    } catch (error) {
        throw error;
    }
};
