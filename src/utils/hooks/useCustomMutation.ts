import {
    useMutation,
    type MutationFunction,
    type UseMutationOptions,
    type UseMutationResult,
} from '@tanstack/react-query';
import type { ApiError } from '../types/DTO/http-errors.interface';
import Swal from 'sweetalert2';
import { Alert } from '../funcs/alert';

interface UseCustomMutationOptions<
    TData,
    TVariables,
    TError = ApiError,
> extends Omit<
    UseMutationOptions<TData, TError, TVariables, unknown>,
    'mutationFn'
> {
    mutationFn: MutationFunction<TData, TVariables>;
}

const useCustomMutation = <TData, TVariables, TError = ApiError>({
    mutationFn,
    ...otherConfig
}: UseCustomMutationOptions<TData, TVariables, TError>): UseMutationResult<
    TData,
    TError,
    TVariables,
    unknown
> => {
    return useMutation<TData, TError, TVariables, unknown>({
        mutationFn,
        ...otherConfig,
        onError: (errorResponse: any) => {
            const validationErrors = errorResponse?.errors;
            const message =
                ((validationErrors &&
                    Object.entries(validationErrors)
                        .map(([key, value]) => `${key}: ${value}`)
                        .join('<br/>')) ||
                    errorResponse?.message ||
                    'خطا در انجام عملیات') +
                `<br/> ${errorResponse?.detail || ''}`;

            console.log(message);

            Alert.error('خطا', {
                html: message,
                position: 'top',
                showConfirmButton: false,
                timer: 5000,
            });
        },
    });
};

export default useCustomMutation;
