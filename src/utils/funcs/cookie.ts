'use server';

import { cookies } from 'next/headers';

export async function setCookieAction(
    name: string,
    value: string,
    options?: any,
) {
    const cookieStore = await cookies();

    cookieStore.set({
        name,
        value,
        httpOnly: true,
        secure: true,
        path: '/',
        ...options,
    });

    return { success: true };
}

export async function getCookieAction(name: string) {
    const cookieStore = await cookies();
    const cookie = cookieStore.get(name);

    if (!cookie) {
        return { value: null };
    }

    return {
        value: decodeURIComponent(cookie.value),
    };
}

export async function deleteCookieAction(name: string) {
    const cookieStore = await cookies();

    cookieStore.delete({
        name,
        path: '/',
    });

    return { success: true };
}
