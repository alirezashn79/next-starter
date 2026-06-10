import React, { FC } from 'react';
import { SelectProps } from './select.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const sizeClasses: Record<Size, string> = {
    xs: 'select-xs',
    sm: 'select-sm',
    md: 'select-md',
    lg: 'select-lg',
    xl: 'select-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'select-accent',
    error: 'select-error',
    info: 'select-info',
    neutral: 'select-neutral',
    primary: 'select-primary',
    secondary: 'select-secondary',
    success: 'select-success',
    warning: 'select-warning',
    default: '',
};

const Select: FC<SelectProps> = ({
    options,
    className,
    theme = 'primary',
    size = 'md',
    labelText,
    isDisabled,
    state,
    loadingMessage = 'Loading...',
    errorMessage = 'Something went wrong!',
    placeholder,
    ...rest
}) => {
    const classes = classNames(
        'select w-full',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        className,
    );

    const stateHandler = () => {
        if (state === 'error') return errorMessage;
        if (state === 'loading') return loadingMessage;
        return placeholder;
    };

    return (
        <fieldset
            className='fieldset'
        >
            {labelText && (
                <legend className='fieldset-legend'>{labelText}</legend>
            )}

            <select
                defaultValue=''
                className={classes}
                disabled={
                    isDisabled || state === 'loading' || state === 'error'
                }
                {...rest}
            >
                <option value='' disabled>
                    {stateHandler()}
                </option>

                {!['error', 'loading'].includes(state ?? '') &&
                    options.map((opt, i) => (
                        <option key={i} value={opt.value}>
                            {opt.title}
                        </option>
                    ))}
            </select>
        </fieldset>
    );
};

export default Select;
