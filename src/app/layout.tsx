import Footer from '@/components/_ui/Footer';
import Header from '@/components/_ui/Header';
import ToastContainer from '@/components/Toast/ToastContainer';
import ReactQueryProvider from '@/utils/providers/ReactQueryProvider';
import { estedad, lato } from 'fonts';
import type { Metadata } from 'next';
import NextTopLoader from 'nextjs-toploader';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
    title: 'Next Starter',
    description: 'Next Starter',
    robots: 'noindex, nofollow',
};

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang='fa'
            dir='rtl'
            className={`antialiased overflow-x-hidden ${estedad.variable} ${lato.variable}`}
        >
            <body>
                <ReactQueryProvider>
                    <NextTopLoader
                        color='#4FB8E8'
                        shadow='0 0 10px #4FB8E8,0 0 5px #4FB8E8'
                        showSpinner={false}
                    />
                    <NuqsAdapter>
                        <Suspense>
                            <ToastContainer />
                        </Suspense>
                        <main className='min-h-screen flex flex-col'>
                            <Header />
                            {children}
                            <Footer />
                        </main>
                    </NuqsAdapter>
                </ReactQueryProvider>
            </body>
        </html>
    );
}
