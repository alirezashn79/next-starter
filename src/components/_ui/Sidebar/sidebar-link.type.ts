import type React from 'react';

export type SidebarLinkProps = {
    title: string;
    href?: string;
    icon?: React.ReactNode;
    children?: SidebarLinkProps[];
};
