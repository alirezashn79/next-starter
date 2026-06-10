import { ComponentBase } from '@/utils/types/components/component-base.type';
import { SelectHTMLAttributes } from 'react';

export type SelectProps = Omit<
    SelectHTMLAttributes<HTMLSelectElement>,
    'size'
> &
    ComponentBase & {
        options: OptionsType[];
        labelText?: string;
        state?: 'loading' | 'error' | 'success';
        loadingMessage?: string;
        errorMessage?: string;
        placeholder: string;
    };

export type OptionsType = {
    title: string;
    value: string | number;
};
