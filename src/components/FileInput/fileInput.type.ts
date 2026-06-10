import { ComponentBase } from '@/utils/types/components/component-base.type';
import { InputHTMLAttributes } from 'react';

export type FileInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> &
    ComponentBase;

