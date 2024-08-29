import { apiService } from "./api";


export const getProducts = async () => {
    const response = await apiService().get('/products');
    return response?.data;
};

export const getProductById = async (id) => {
    const response = await apiService().get(`/products/${id}`);
    return response?.data;
};
