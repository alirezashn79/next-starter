'use client';
import { Toaster } from 'sonner';
const ToastContainer = () => {

    return (
        <Toaster
            toastOptions={{
                style: {
                    fontFamily: 'var(--font-estedad)',
                },
            }}
            position='top-center'
            richColors
        />
    );
};

export default ToastContainer;

