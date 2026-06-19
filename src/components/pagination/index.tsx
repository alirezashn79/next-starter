'use client';

import Link from 'next/link';
import { useQueryState } from 'nuqs';
import React, { useMemo } from 'react';

interface MediaPaginationProps {
    totalPages: number;
}

const Pagination: React.FC<MediaPaginationProps> = ({ totalPages }) => {
    const [page, setPage] = useQueryState('page', {
        parse: (value) => parseInt(value) || 1,
        serialize: (value) => value.toString(),
        defaultValue: 1,
    });

    const currentPage = page;

    const getPageNumbers = () => {
        const pageRange = [];
        const numPagesToShow = 5;
        const startPage = Math.max(
            1,
            currentPage - Math.floor(numPagesToShow / 2),
        );
        const endPage = Math.min(totalPages, startPage + numPagesToShow - 1);

        if (startPage > 1) {
            pageRange.push(1);
            if (startPage > 2) pageRange.push('...');
        }

        for (let i = startPage; i <= endPage; i++) {
            pageRange.push(i);
        }

        if (endPage < totalPages) {
            if (endPage < totalPages - 1) pageRange.push('...');
            pageRange.push(totalPages);
        }

        return pageRange;
    };

    const displayPageNumbers = useMemo(getPageNumbers, [
        currentPage,
        totalPages,
    ]);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setPage(newPage);
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        }
    };

    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;

    const baseClass =
        'size-9 flex items-center justify-center text-sm text-primary-500 border border-[#EAECF0] rounded-[8px] mx-1.5';
    const activeClass = '!bg-secondary !text-white';
    const disabledClass = 'pointer-events-none opacity-50';

    return (
        <nav className='flex justify-center items-center -space-x-px' dir='rtl'>
            <Link
                href={`?page=${currentPage - 1}`}
                onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage - 1);
                }}
                className={`font-medium text-sm p-2 py-2 px-3 ${
                    isPrevDisabled ? disabledClass : 'cursor-pointer'
                }`}
                aria-disabled={isPrevDisabled}
                tabIndex={isPrevDisabled ? -1 : 0}
            >
                قبلی
            </Link>

            {displayPageNumbers.map((p, index) =>
                p === '...' ? (
                    <span
                        key={`ellipsis-${index}`}
                        className={`${baseClass} cursor-default hover:bg-white`}
                    >
                        ...
                    </span>
                ) : (
                    <Link
                        key={p}
                        href={`?page=${p}`}
                        onClick={(e) => {
                            e.preventDefault();
                            handlePageChange(Number(p));
                        }}
                        className={`${baseClass} ${
                            Number(p) === currentPage ? activeClass : ''
                        } hover:bg-gray-50 transition-colors`}
                        aria-current={
                            Number(p) === currentPage ? 'page' : undefined
                        }
                    >
                        {p}
                    </Link>
                ),
            )}

            <Link
                href={`?page=${currentPage + 1}`}
                onClick={(e) => {
                    e.preventDefault();
                    handlePageChange(currentPage + 1);
                }}
                className={`font-medium text-sm py-2 px-3 ${
                    isNextDisabled ? disabledClass : 'cursor-pointer'
                }`}
                aria-disabled={isNextDisabled}
                tabIndex={isNextDisabled ? -1 : 0}
            >
                بعدی
            </Link>
        </nav>
    );
};

export default Pagination;
