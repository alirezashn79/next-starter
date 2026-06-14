'use client';

import Loading from '@/components/Loading';
import { getAllProductsClient } from '@/utils/api/services/test.client';
import useCustomQuery from '@/utils/hooks/useCustomQuery';

export default function ClientSideTestPage() {
    const { data, isLoading } = useCustomQuery({
        queryKey: ['ALL_PRODUCTS'],
        queryFn: () => getAllProductsClient(),
    });

    if (isLoading) {
        return (
            <div className='flex h-screen w-screen items-center justify-center'>
                <Loading size='lg' />
            </div>
        );
    }

    const products = data?.products;

    return (
        <div className='container mx-auto p-6'>
            <h1 className='text-center my-4 text-3xl font-bold'>
                Client Side Test Page
            </h1>
            <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {products?.map((product) => (
                    <div
                        key={product.id}
                        className='card bg-base-100 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl'
                    >
                        <figure className='aspect-square overflow-hidden'>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className='h-full w-full object-cover'
                            />
                        </figure>

                        <div className='card-body'>
                            <div className='flex items-start justify-between gap-2'>
                                <h2 className='card-title line-clamp-2 text-base'>
                                    {product.title}
                                </h2>

                                <div className='badge badge-secondary shrink-0'>
                                    ⭐ {product.rating}
                                </div>
                            </div>

                            <p className='line-clamp-3 text-sm text-base-content/70'>
                                {product.description}
                            </p>

                            <div className='mt-2 flex flex-wrap gap-2'>
                                {product.tags.map((tag) => (
                                    <div
                                        key={tag}
                                        className='badge badge-outline'
                                    >
                                        {tag}
                                    </div>
                                ))}
                            </div>

                            <div className='card-actions mt-4 items-center justify-between'>
                                <div>
                                    <p className='text-2xl font-bold'>
                                        ${product.price}
                                    </p>
                                    <p className='text-xs text-success'>
                                        {product.discountPercentage}% OFF
                                    </p>
                                </div>

                                <button className='btn btn-primary'>
                                    View
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
