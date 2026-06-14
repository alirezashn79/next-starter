import { ProductsResponse } from '@/utils/types/DTO/test.type';
import { httpServer } from '../config/fetch-server';

export async function getAllProductsServer(
    queries?: Record<string, string>,
): Promise<ProductsResponse> {
    const params = new URLSearchParams(queries).toString();
    return httpServer(`/products?${params}`);
}
