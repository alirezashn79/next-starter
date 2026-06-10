import React from 'react';
import { FieldValues } from 'react-hook-form';
import { errorMessageType } from './error-message.type';

const ErrorMessage = <T extends FieldValues>({
    errors,
    field,
}: errorMessageType<T>) => {
    const message = errors?.[field]?.message;
    return (
        <>
            {message && (
                <p className='text-error text-sm mt-1'>{String(message)}</p>
            )}
        </>
    );
};

export default ErrorMessage;
