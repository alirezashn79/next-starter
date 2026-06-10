import { ComponentBase } from '@/utils/types/components/component-base.type';
import { AnchorHTMLAttributes } from 'react';

export type AnchorProps = Omit<ComponentBase, 'isDisabled' | 'size'> &
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        children: React.ReactNode;
        href: string;
        showUnderlineOnlyOnHover?: boolean;
    };

