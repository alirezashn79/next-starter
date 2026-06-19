import { ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { Fragment } from 'react';
import { BreadcrumbProps } from './breadcrumb.type';

const Breadcrumb = ({ breadcrumb }: { breadcrumb: BreadcrumbProps[] }) => {
    return (
        <div className='text-secondary-400 mb-12 text-sm flex items-center justify-between'>
            <div className='flex gap-x-1 items-center'>
                <div className='group flex gap-x-1 items-center'>
                    <Link href='/'>خانه</Link>
                    <ChevronLeft className='size-5 transition-transform duration-300 delay-75 group-hover:rotate-180' />
                </div>
                {breadcrumb.map((item, index) => (
                    <Fragment key={index}>
                        <div className='flex items-center gap-x-1 group'>
                            <Link
                                href={item.link}
                                className={
                                    index == breadcrumb.length - 1
                                        ? 'text-primary'
                                        : 'text-secondary-400 group-hover:text-primary transition-colors'
                                }
                            >
                                {item.title}
                            </Link>
                            {index !== breadcrumb.length - 1 && (
                                <ChevronLeft className='size-5 transition-transform duration-300  delay-75 group-hover:rotate-180' />
                            )}
                        </div>
                    </Fragment>
                ))}
            </div>
        </div>
    );
};

export default Breadcrumb;
