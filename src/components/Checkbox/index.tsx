import React, { FC } from 'react';
import { CheckboxProps } from './checkbox.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Checkbox: FC<CheckboxProps> = ({
    defaultChecked = false,
    className,
    theme = 'primary',
    size = 'md',
    rightLabel = false,
    label,
    ...rest
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'checkbox-accent',
        error: 'checkbox-error',
        info: 'checkbox-info',
        neutral: 'checkbox-neutral',
        primary: 'checkbox-primary',
        secondary: 'checkbox-secondary',
        success: 'checkbox-success',
        warning: 'checkbox-warning',
        default: '',
    };
    const checkedClasses: Record<Theme, string> = {
        accent: 'checked:border-accent',
        error: 'checked:border-error',
        info: 'checked:border-info',
        neutral: 'checked:border-neutral',
        primary: 'checked:border-primary',
        secondary: 'checked:border-secondary',
        success: 'checked:border-success',
        warning: 'checked:border-warning',
        default: '',
    };
    const sizeClasses: Record<Size, string> = {
        xs: 'checkbox-xs',
        sm: 'checkbox-sm',
        md: 'checkbox-md',
        lg: 'checkbox-lg',
        xl: 'checkbox-xl',
    };
    const classes = classNames(
        'checkbox rounded-sm border-gray-1 mx-2',
        className,
        {
            [`${themeClasses[theme]}`]: theme,
        },
        { [`${sizeClasses[size]}`]: size },
        {
            [`${checkedClasses[theme]}`]: theme,
        }
    );

    return (
        <div>
            <label className='text-gray-1 font-semibold cursor-pointer'>
                {rightLabel && label}
                <input
                    type='checkbox'
                    defaultChecked={defaultChecked}
                    className={classes}
                    {...rest}
                />
                {!rightLabel && label}
            </label>
        </div>
    );
};

export default Checkbox;

