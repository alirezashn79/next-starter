import { ComponentBase } from '@/utils/types/components/component-base.type';
import { TextareaHTMLAttributes } from 'react';

export type TextareaProps = Omit<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    'size'
> &
    ComponentBase & {
        icon?: React.ReactNode;
        iconReverse?: boolean;
        isOutline?: boolean;
        labelText?: string;
    };
