import React, { FC } from 'react';
import { RadialProps } from './radial.type';
import classNames from 'classnames';
import { Theme } from '@/utils/types/components/component-base.type';

const Radial: FC<RadialProps> = ({
    value,
    theme = 'primary',
    classname,
    size = '5rem',
    thickness = '0.5rem',
    children,
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'text-accent',
        error: 'text-error',
        info: 'text-info',
        neutral: 'text-neutral',
        primary: 'text-primary',
        secondary: 'text-secondary',
        success: 'text-success',
        warning: 'text-warning',
        default: '',
    };
    const classes = classNames(
        'radial-progress',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        classname,
    );
    return (
        <div
            className={classes}
            style={
                {
                    '--value': value,
                    '--size': size,
                    '--thickness': thickness,
                } as React.CSSProperties
            }
            aria-valuenow={value}
            role='progressbar'
        >
            {children}
        </div>
    );
};

export default Radial;
