import Link from 'next/link';
import React, { Fragment } from 'react';
import { BreadcrumbProps } from './breadcrumb.type';

const Breadcrumb = ({ breadcrumb }: { breadcrumb: BreadcrumbProps[] }) => {
    return (
        <div className='text-primary font-bold text-xl mb-12 flex items-center justify-between'>
            <div className='flex gap-x-1'>
                <Link href='/'>Home</Link>
                <p>/</p>
                {breadcrumb.map((item, index) => (
                    <Fragment key={index}>
                        <Link
                            href={item.link}
                            className={
                                index == breadcrumb.length - 1
                                    ? 'text-secondary'
                                    : ''
                            }
                        >
                            {item.title}
                        </Link>
                        {index !== breadcrumb.length - 1 && <p>/</p>}
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumb;
