import Link from 'next/link';
import type { FC } from 'react';
import { SidebarLinkProps } from './sidebar-link.type';

const SidebarLink: FC<SidebarLinkProps> = ({ href, icon, title, children }) => {
    return (
        <li className='w-full'>
            {children && children.length > 0 ? (
                <details className='w-full'>
                    <summary className='flex w-full duration-150 hover:bg-primary/20 py-1.5 px-2 items-center gap-x-2 text-secondary hover:text-primary cursor-pointer after:ml-auto group rounded-xl'>
                        {icon}
                        <p className='text-sm'>{title}</p>
                    </summary>

                    <ul className='menu pl-4 mt-1 w-full'>
                        {children.map((child, i) => (
                            <SidebarLink
                                {...child}
                                key={`sidebar-child-${i}`}
                            />
                        ))}
                    </ul>
                </details>
            ) : href ? (
                <Link
                    href={href}
                    className='flex duration-150 hover:bg-primary/20 py-1.5 px-2 rounded-xl items-center gap-x-2 text-secondary hover:text-primary group'
                >
                    {icon}
                    <p className='text-sm'>{title}</p>
                </Link>
            ) : (
                <div className='flex duration-150 hover:bg-primary/20 py-1.5 px-2 rounded-xl items-center gap-x-2 text-secondary hover:text-primary cursor-pointer group'>
                    {icon}
                    <p className='text-sm'>{title}</p>
                </div>
            )}
        </li>
    );
};

export default SidebarLink;
