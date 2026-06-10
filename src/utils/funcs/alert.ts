// alert.ts
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { QueryClient } from '@tanstack/react-query';

export const Alert = {
    success(message: string, options?: SweetAlertOptions) {
        return Swal.fire({
            title: 'موفق',
            text: message,
            icon: 'success',
            toast: true,
            position: 'top',
            showConfirmButton: false,
            timer: 3000,
            ...options,
        });
    },

    error(message: string, options?: SweetAlertOptions) {
        return Swal.fire({
            title: 'خطا',
            text: message,
            icon: 'error',
            confirmButtonText: 'متوجه شدم',
            toast: true,
            position: 'top',
            ...options,
        });
    },

    async confirm(
        message: string,
        onConfirm: () => Promise<void>,
        options?: {
            swalOptions?: SweetAlertOptions;
            invalidateKeys?: string[][];
            queryClient?: QueryClient;
        },
    ) {
        const { swalOptions, invalidateKeys, queryClient } = options || {};

        const wrappedOnConfirm = async () => {
            await onConfirm();

            if (invalidateKeys && queryClient) {
                await Promise.all(
                    invalidateKeys.map((key) =>
                        queryClient.invalidateQueries({ queryKey: key }),
                    ),
                );
            }
        };

        return Swal.fire({
            title: 'تأیید عملیات',
            text: message,
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'بله',
            cancelButtonText: 'خیر',
            reverseButtons: true,
            showLoaderOnConfirm: true,
            toast: true,
            position: 'top',
            preConfirm: wrappedOnConfirm,
            allowOutsideClick: () => !Swal.isLoading(),
            ...swalOptions,
        });
    },

    async delete(
        onConfirm: () => Promise<void>,
        options?: {
            swalOptions?: SweetAlertOptions;
            invalidateKeys?: string[][];
            queryClient?: QueryClient;
        },
    ) {
        const { swalOptions, invalidateKeys, queryClient } = options || {};

        const wrappedOnConfirm = async () => {
            await onConfirm();

            if (invalidateKeys && queryClient) {
                await Promise.all(
                    invalidateKeys.map((key) =>
                        queryClient.invalidateQueries({ queryKey: key }),
                    ),
                );
            }
        };

        return Swal.fire({
            title: 'حذف آیتم',
            text: 'این عملیات قابل بازگشت نیست.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'حذف',
            cancelButtonText: 'انصراف',
            reverseButtons: true,
            showLoaderOnConfirm: true,
            preConfirm: wrappedOnConfirm,
            toast: true,
            position: 'top',
            ...swalOptions,
        });
    },
};
