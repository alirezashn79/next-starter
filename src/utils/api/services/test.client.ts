import { ProductsResponse } from '@/utils/types/DTO/test.type';
import { httpClient } from '../config/fetch-client';

export function getAllProductsClient(
    queries?: Record<string, string>,
): Promise<ProductsResponse> {
    const params = new URLSearchParams(queries).toString();
    return httpClient.get(`/products?${params}`);
}
