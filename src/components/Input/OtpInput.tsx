'use client';
import React, { useRef, useEffect } from 'react';
import Input from '.';
import type { Size, Theme } from '@/utils/types/components/component-base.type';

export type OtpInputProps = {
    value: string[];
    onChange: (val: string[]) => void;
    length?: number;
    size?: Size;
    theme?: Theme;
    className?: string;
};

const OtpInput: React.FC<OtpInputProps> = ({
    value,
    onChange,
    length = 6,
    size = 'md',
    theme = 'primary',
    className,
}) => {
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    useEffect(() => {
        if (value.length !== length) onChange(Array(length).fill(''));
    }, [length]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>,
        index: number,
    ) => {
        const val = e.target.value
            .replace(/[^0-9\u06F0-\u06F9]/g, '')
            .replace(/[\u06F0-\u06F9]/g, (char) =>
                String.fromCharCode(char.charCodeAt(0) - 1728),
            )
            .slice(0, 1);

        const newCode = [...value];
        newCode[index] = val;
        onChange(newCode);

        if (val && index < length - 1) {
            inputsRef.current[index + 1]?.focus();
        }
    };

    const handleKeyDown = (
        e: React.KeyboardEvent<HTMLInputElement>,
        index: number,
    ) => {
        if (e.key === 'Backspace' && !value[index] && index > 0) {
            inputsRef.current[index - 1]?.focus();
        }
    };

    const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pasted = e.clipboardData
            .getData('Text')
            .replace(/[^0-9\u06F0-\u06F9]/g, '')
            .replace(/[\u06F0-\u06F9]/g, (char) =>
                String.fromCharCode(char.charCodeAt(0) - 1728),
            )
            .slice(0, length);

        const newCode = Array(length).fill('');
        for (let i = 0; i < pasted.length; i++) newCode[i] = pasted[i];
        onChange(newCode);

        if (pasted.length > 0) {
            const last = Math.min(pasted.length - 1, length - 1);
            inputsRef.current[last]?.focus();
        }
    };

    // Chrome Web OTP
    useEffect(() => {
        const ac = new AbortController();
        if ('OTPCredential' in window) {
            (navigator.credentials.get as any)({
                otp: { transport: ['sms'] },
                signal: ac.signal,
            })
                .then((otp: any) => {
                    const arr = otp.code.slice(0, length).split('');
                    onChange(arr);
                    const last = Math.min(arr.length - 1, length - 1);
                    inputsRef.current[last]?.focus();
                })
                .catch(() => {});
        }
        return () => ac.abort();
    }, [length, onChange]);

    return (
        <div dir='ltr' className='flex flex-col gap-3 justify-center pt-4'>
            <div className='flex gap-2 sm:gap-5 justify-center'>
                {value.map((digit, i) => (
                    <Input
                        key={i}
                        ref={(el) => (inputsRef.current[i] = el)}
                        type='text'
                        inputMode='numeric'
                        maxLength={1}
                        size={size}
                        theme={theme}
                        className={`w-10! p-0! [&>input]:text-center ${className}`}
                        value={digit}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleKeyDown(e, i)}
                        onPaste={handlePaste}
                    />
                ))}
            </div>
        </div>
    );
};

export default OtpInput;
