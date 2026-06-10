import { ComponentBase } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';

export type InputType = 'text' | 'number' | 'password' | 'hidden';

export type ErrorMessageType<T extends FieldValues = FieldValues> = {
    errors?: FieldErrors<T>;
};

export type InputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    ComponentBase &
    ErrorMessageType & {
        type?: InputType;
        icon?: React.ReactNode;
        iconReverse?: boolean;
        isAnimated?: boolean;
        animatedText?: string;
        labelText?: string;
        hideError?: boolean;
        isOutline?: boolean;
        ref?: (el: HTMLInputElement | null) => void;
    };
