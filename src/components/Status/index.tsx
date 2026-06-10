import { Size, Theme } from '@/utils/types/components/component-base.type';
import React, { FC } from 'react';
import { Animation, StatusProps } from './status.type';
import classNames from 'classnames';

const sizeClasses: Record<Size, string> = {
    xs: 'status-xs',
    sm: 'status-sm',
    md: 'status-md',
    lg: 'status-lg',
    xl: 'status-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'status-accent',
    error: 'status-error',
    info: 'status-info',
    neutral: 'status-neutral',
    primary: 'status-primary',
    secondary: 'status-secondary',
    success: 'status-success',
    warning: 'status-warning',
    default: '',
};
const animationClasses: Record<Animation, string> = {
    bounce: 'animate-bounce',
    ping: 'animate-ping',
    pulse: 'animate-pulse',
    none: 'animate-none',
};
const Status: FC<StatusProps> = ({
    classname,
    animate = 'none',
    size = 'md',
    theme = 'primary',
}) => {
    const classes = classNames(
        'status',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        {
            [`${animationClasses[animate]}`]: animate,
        },
        classname
    );
    return (
        <div>
            <span className={classes}></span>
        </div>
    );
};

export default Status;

