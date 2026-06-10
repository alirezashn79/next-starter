import { ApiResponse } from '@/utils/types/DTO/api-response.type';
import { httpServer } from '../config/fetch-server';

export async function getAllBlogsServer(): Promise<ApiResponse<any>> {
    return httpServer('/blogs?limit=9');
}
