import {
    useQuery,
    type QueryKey,
    type UseQueryOptions,
    type UseQueryResult,
    type QueryFunction,
} from '@tanstack/react-query';
import type { ApiError } from '../types/DTO/http-errors.interface';

interface UseCustomQueryOptions<TQueryFnData, TError = ApiError> extends Omit<
    UseQueryOptions<TQueryFnData, TError, TQueryFnData, QueryKey>,
    'queryKey' | 'queryFn'
> {
    queryKey: QueryKey;
    queryFn: QueryFunction<TQueryFnData, QueryKey>;
}

const useCustomQuery = <TQueryFnData, TError = ApiError>({
    queryKey,
    queryFn,
    ...otherConfig
}: UseCustomQueryOptions<TQueryFnData, TError>): UseQueryResult<
    TQueryFnData,
    TError
> => {
    return useQuery<TQueryFnData, TError, TQueryFnData, QueryKey>({
        queryKey,
        queryFn,
        ...otherConfig,
    });
};

export default useCustomQuery;
