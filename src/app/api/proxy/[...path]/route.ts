import { baseURL } from '@/utils/constants/global';
import { NextRequest, NextResponse } from 'next/server';

const isDev = process.env.NODE_ENV === 'development';

async function proxyHandler(req: NextRequest) {
    try {
        const path = req.nextUrl.pathname.replace('/api/proxy', '');
        const searchParams = req.nextUrl.search;
        const token = req.cookies.get('token')?.value;
        const targetUrl = `${baseURL}${path}${searchParams}`;

        const headers = new Headers();
        headers.set('accept', 'application/json');

        if (token) {
            headers.set('Authorization', `Bearer ${token}`);
        }

        const clientContentType = req.headers.get('content-type');
        if (clientContentType) {
            headers.set('content-type', clientContentType);
        }

        const fetchOptions: RequestInit = {
            method: req.method,
            headers,
        };

        if (req.method !== 'GET' && req.method !== 'HEAD') {
            fetchOptions.body = req.body;
            // @ts-ignore
            fetchOptions.duplex = 'half';
        }

        const response = await fetch(targetUrl, fetchOptions);
        const errorContentType = response.headers.get('content-type') || '';
        let responseData: any = null;

        if (errorContentType.includes('application/json')) {
            responseData = await response.json().catch(() => null);
        }

        if (!responseData) {
            responseData = {
                message: await response.text().catch(() => 'Unknown Response'),
            };
        }

        const nextResponse = NextResponse.json(responseData, {
            status: response.status,
        });

        if (isDev) {
            nextResponse.headers.set('X-Debug-Target-Url', targetUrl);
            nextResponse.headers.set('X-Debug-Method', req.method);
            nextResponse.headers.set(
                'X-Debug-Token-Attached',
                token ? 'Yes' : 'No',
            );
        }

        return nextResponse;
    } catch (error: any) {
        console.error('Proxy Error:', error);
        const errorResponse = NextResponse.json(
            { message: error?.message || 'Internal Proxy Error' },
            { status: 500 },
        );

        if (isDev) {
            const path = req.nextUrl.pathname.replace('/api/proxy', '');
            const targetUrl = `${baseURL}${path}${req.nextUrl.search}`;
            errorResponse.headers.set('X-Debug-Target-Url', targetUrl);
            errorResponse.headers.set('X-Debug-Method', req.method);
        }

        return errorResponse;
    }
}

export {
    proxyHandler as DELETE,
    proxyHandler as GET,
    proxyHandler as PATCH,
    proxyHandler as POST,
    proxyHandler as PUT,
};
