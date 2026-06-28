import { ApiError } from '@/utils/types/DTO/http-errors.interface';
import { errorHandler, networkErrorStrategy } from '../http-error-strategies';
import { ApiResponse } from '@/utils/types/DTO/api-response.type';

class HttpClient {
    private baseURL: string;

    constructor(baseURL: string) {
        this.baseURL = baseURL;
    }

    private async request<T = any>(
        path: string,
        options: RequestInit = {},
    ): Promise<ApiResponse<T>> {
        const url = `${this.baseURL}${path}`;

        const headers: Record<string, string> = {
            Accept: 'application/json',
            ...(options.headers as Record<string, string>),
        };

        const config: RequestInit = {
            ...options,
            headers,
        };

        if (options.body) {
            if (options.body instanceof FormData) {
                config.body = options.body;
            } else if (typeof options.body === 'object') {
                config.body = JSON.stringify(options.body);
                headers['Content-Type'] = 'application/json';
            }
        }

        try {
            const response = await fetch(url, config);

            const contentType = response.headers.get('content-type') || '';
            let data: any = null;

            if (contentType.includes('application/json')) {
                data = await response.json().catch(() => null);
            } else {
                data = await response.text().catch(() => null);
            }

            if (!response.ok) {
                this.handleError({ status: response.status, data });
                return Promise.reject({ status: response.status, data });
            }

            return data as ApiResponse<T>;
        } catch (error) {
            return Promise.reject(error);
        }
    }

    private handleError(errorResponse: { status: number; data: any }) {
        const statusCode = errorResponse.status;
        const errorData: ApiError = errorResponse.data;

        if (errorHandler[statusCode]) {
            errorHandler[statusCode](errorData);
        } else {
            networkErrorStrategy();
        }
    }

    get<T = any>(
        path: string,
        options?: Omit<RequestInit, 'body'>,
    ): Promise<ApiResponse<T>> {
        return this.request<T>(path, { ...options, method: 'GET' });
    }

    post<T = any>(
        path: string,
        body: any,
        options?: Omit<RequestInit, 'body'>,
    ): Promise<ApiResponse<T>> {
        return this.request<T>(path, { ...options, method: 'POST', body });
    }

    put<T = any>(
        path: string,
        body: any,
        options?: Omit<RequestInit, 'body'>,
    ): Promise<ApiResponse<T>> {
        return this.request<T>(path, { ...options, method: 'PUT', body });
    }

    patch<T = any>(
        path: string,
        body: any,
        options?: Omit<RequestInit, 'body'>,
    ): Promise<ApiResponse<T>> {
        return this.request<T>(path, { ...options, method: 'PATCH', body });
    }

    delete<T = any>(
        path: string,
        options?: Omit<RequestInit, 'body'>,
    ): Promise<ApiResponse<T>> {
        return this.request<T>(path, { ...options, method: 'DELETE' });
    }
}

export const httpClient = new HttpClient('/api/proxy');
