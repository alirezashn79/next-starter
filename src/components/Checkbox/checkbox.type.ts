import { ComponentBase, Size, Theme } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';

export type CheckboxProps = ComponentBase &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
        defaultChecked?: boolean;
        theme?: Theme;
        size?: Size;
        label?: string;
        rightLabel?: boolean;
    };

