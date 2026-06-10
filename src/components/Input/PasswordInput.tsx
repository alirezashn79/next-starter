'use client';
import React, { FC, useState } from 'react';
import Input from '.';
import { InputProps } from './input.type';
import { Eye, EyeClosed } from '@/components/_icons';

const PasswordInput: FC<InputProps> = ({ ...args }) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <Input
            type={showPassword ? 'text' : 'password'}
            icon={
                showPassword ? (
                    <EyeClosed
                        className='cursor-pointer'
                        onClick={() => setShowPassword(false)}
                        tabIndex={-1}
                    />
                ) : (
                    <Eye
                        className='cursor-pointer'
                        onClick={() => setShowPassword(true)}
                        tabIndex={-1}
                    />
                )
            }
            iconReverse
            {...args}
        />
    );
};

export default PasswordInput;
