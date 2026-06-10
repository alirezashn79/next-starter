import { ComponentBase } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes, ReactNode } from 'react';

export type ToggleProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    ComponentBase & {
        labelText?: string;
        fieldsetText?: string;
        iconOn?: ReactNode;
        iconOff?: ReactNode;
    };
