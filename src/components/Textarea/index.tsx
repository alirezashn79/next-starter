import React, { FC } from 'react';
import { TextareaProps } from './textarea.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Textarea: FC<TextareaProps> = ({
    className,
    theme = 'primary',
    size = 'md',
    icon,
    placeholder,
    iconReverse,
    isOutline,
    labelText,
    ...rest
}) => {
    const sizeClasses: Record<Size, string> = {
        xs: 'textarea-xs',
        sm: 'textarea-sm',
        md: 'textarea-md',
        lg: 'textarea-lg',
        xl: 'textarea-xl',
    };
    const themeClasses: Record<Theme, string> = {
        accent: 'textarea-accent',
        error: 'textarea-error',
        info: 'textarea-info',
        neutral: 'textarea-neutral',
        primary: 'textarea-primary',
        secondary: 'textarea-secondary',
        success: 'textarea-success',
        warning: 'textarea-warning',
        default: '',
    };
    const classes = classNames(
        'w-full textarea placeholder:mr-4',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        {
            'ps-10': icon && !iconReverse,
            'pe-8': icon && iconReverse,
        },
        {
            'focus-within:outline-none': !isOutline,
        },
        className,
    );

    return (
        <fieldset className='fieldset'>
            {labelText && (
                <legend className='fieldset-legend'>{labelText}</legend>
            )}
            <div className='relative'>
                <textarea
                    placeholder={placeholder}
                    className={classes}
                    {...rest}
                ></textarea>

                {!iconReverse && (
                    <div className='absolute top-2 start-3'>{icon}</div>
                )}
                {iconReverse && (
                    <div className='absolute top-2 end-3'>{icon}</div>
                )}
            </div>
        </fieldset>
    );
};

export default Textarea;
