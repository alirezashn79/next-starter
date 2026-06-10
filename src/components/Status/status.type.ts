import { ComponentBase } from '@/utils/types/components/component-base.type';

export type StatusProps = Omit<ComponentBase, 'isDisabled'> & {
    animate?: Animation;
};

export type Animation = 'none' | 'bounce' | 'ping' | 'pulse';

