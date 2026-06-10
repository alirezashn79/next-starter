export interface ApiResponse<T> {
    status: boolean;
    data: T;
    message: string;
}

export interface ApiResponseReturn {
    message: string;
}
