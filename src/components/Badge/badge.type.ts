import { ComponentBase } from '@/utils/types/components/component-base.type';

export type BadgeProps = Omit<ComponentBase, 'isDisabled'> & {
    variant?: BadgeVariant;
    children: React.ReactNode;
    showIcon?: boolean;
};

export type BadgeVariant = 'default' | 'soft' | 'outline' | 'dash';
