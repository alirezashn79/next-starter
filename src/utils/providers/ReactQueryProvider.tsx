'use client';
import {
    MutationCache,
    QueryCache,
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { FC, PropsWithChildren, useState } from 'react';

const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                queryCache: new QueryCache({
                    onError: (error) => {
                        console.error(error);
                    },
                }),
                mutationCache: new MutationCache({
                    onError: (error) => {
                        console.error(error);
                    },
                }),
                defaultOptions: {
                    queries: {
                        retry: false,
                        refetchOnWindowFocus: false,
                        throwOnError: false,
                        gcTime: 1000 * 60 * 15,
                        staleTime: 1000 * 60 * 5,
                    },
                },
            }),
    );
    return (
        <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    );
};

export default ReactQueryProvider;
