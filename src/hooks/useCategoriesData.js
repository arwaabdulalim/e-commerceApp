import { useQuery } from 'react-query';
import { getCategoriesFromProducts } from '../services/categories-api';

export const useGetCategories = () => {
    return useQuery('categories', getCategoriesFromProducts);
};
