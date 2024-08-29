import { useQuery } from 'react-query';
import { getProductById, getProducts } from '../services/product-api';

export const useGetProducts = () => {
    return useQuery('products', getProducts);
};

export const useGetProductById = (id) => {
    return useQuery(['product', id], () => getProductById(id));
};
