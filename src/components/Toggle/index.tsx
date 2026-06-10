import React, { FC } from 'react';
import { ToggleProps } from './toggle.type';
import { Size, Theme } from '@/utils/types/components/component-base.type';
import classNames from 'classnames';

const sizeClasses: Record<Size, string> = {
    xs: 'toggle-xs',
    sm: 'toggle-sm',
    md: 'toggle-md',
    lg: 'toggle-lg',
    xl: 'toggle-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'toggle-accent',
    error: 'toggle-error',
    info: 'toggle-info',
    neutral: 'toggle-neutral',
    primary: 'toggle-primary',
    secondary: 'toggle-secondary',
    success: 'toggle-success',
    warning: 'toggle-warning',
    default: '',
};

const Toggle: FC<ToggleProps> = ({
    fieldsetText,
    labelText,
    size = 'md',
    theme = 'primary',
    classname,
    iconOn,
    iconOff,
    ...rest
}) => {
    const classes = classNames(
        {
            toggle: !iconOn && !iconOff,
        },
        size && sizeClasses[size],
        theme && themeClasses[theme],
        classname,
    );

    return (
        <fieldset className='fieldset w-fit'>
            <legend className='fieldset-legend'>{fieldsetText}</legend>
            <label className='label'>
                {iconOn && iconOff ? (
                    <div className='flex items-center gap-x-2 justify-between'>
                        <label className='toggle'>
                            <input type='checkbox' className={classes} />
                            {iconOff}
                            {iconOn}
                        </label>
                        {labelText && <p className='lael'>{labelText}</p>}
                    </div>
                ) : (
                    <>
                        <input type='checkbox' className={classes} {...rest} />
                        {labelText}
                    </>
                )}
            </label>
        </fieldset>
    );
};

export default Toggle;
