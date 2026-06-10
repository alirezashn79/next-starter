import { ComponentBase } from '@/utils/types/components/component-base.type';

export type TooltipProps = Omit<ComponentBase, 'isDisabled' | 'size'> & {
    children: React.ReactNode;
    content: React.ReactNode;
    isOpen?: boolean;
    position?: Position;
};

export type Position = 'right' | 'left' | 'bottom' | 'top';

