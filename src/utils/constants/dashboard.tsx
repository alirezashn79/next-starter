import { Info, Trash } from '@/components/_icons';

const iconsClasses =
    'size-4.5 duration-150';

export const sidebarLinks = [
    {
        title: 'dashboard',
        href: '/',
        icon: <Info className={iconsClasses} />,
    },
    {
        title: 'users',
        href: '/users',
        icon: <Trash className={iconsClasses} />,
        children: [
            { title: 'info', href: '/users/info' },

        ],
    },
];
