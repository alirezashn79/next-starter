import { httpClient } from '../config/fetch-client';

export function getAllHotelsClient() {
    return httpClient.get('/blogs?limit=9');
}
