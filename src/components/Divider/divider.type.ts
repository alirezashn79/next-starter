import { ComponentBase } from '@/utils/types/components/component-base.type';
import React from 'react';

export type DividerProps = Omit<ComponentBase, 'isDisabled' | 'size'> & {
    position?: DividerPosition;
    orientation?: DividerOrientation;
    children: React.ReactNode;
};

export type DividerPosition = 'start' | 'center' | 'end';
export type DividerOrientation = 'horizontal' | 'vertical';

