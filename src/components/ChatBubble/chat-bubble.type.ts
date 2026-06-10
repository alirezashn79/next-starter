import { ComponentBase } from '@/utils/types/components/component-base.type';
import React from 'react';

export type ChatBubbleProps = Omit<ComponentBase, 'isDisabled' | 'size'> & {
    children: React.ReactNode;
    position?: ChatBubblePosition;
};

export type ChatBubblePosition = 'start' | 'end';
