import { ComponentBase } from '@/utils/types/components/component-base.type';

export type RadialProps = Omit<ComponentBase, 'isDisabled' | 'size'> & {
    value: number;
    size?: string;
    thickness?: string;
    children: React.ReactNode;
};

