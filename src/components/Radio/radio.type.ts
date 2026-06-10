import {
    ComponentBase,
    Size,
    Theme,
} from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';

export type RadioProps = ComponentBase &
    Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> & {
        theme?: Theme;
        size?: Size;
        name: string;
        label?: string;
    };
