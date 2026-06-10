import React, { FC } from 'react';
import { BadgeProps, BadgeVariant } from './badge.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';
import { CircleCheck, CircleX, Info, TriangleAlert } from '@/components/_icons';

const variantClasses: Record<BadgeVariant, string> = {
    dash: 'badge-dash',
    outline: 'badge-outline',
    soft: 'badge-soft',
    default: '',
};
const themeClasses: Record<Theme, string> = {
    accent: 'badge-accent',
    error: 'badge-error',
    info: 'badge-info',
    neutral: 'badge-neutral',
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    default: '',
};
const sizeClasses: Record<Size, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: '',
    lg: 'badge-lg',
    xl: 'badge-xl',
};
const iconProps = { width: 16, height: 16 };

const variantDefaultIcons: Partial<Record<Theme, React.ReactNode>> = {
    error: <CircleX {...iconProps} />,
    info: <Info {...iconProps} />,
    success: <CircleCheck {...iconProps} />,
    warning: <TriangleAlert {...iconProps} />,
};

const Badge: FC<BadgeProps> = ({
    children,
    variant = 'default',
    size = 'md',
    theme = 'primary',
    classname,
    showIcon,
}) => {
    const classes = classNames(
        'badge',
        {
            [`${variantClasses[variant]}`]: variant,
        },
        { [`${sizeClasses[size]}`]: size },
        { [`${themeClasses[theme]}`]: theme },
        classname,
    );
    return (
        <div className={classes}>
            {showIcon && variantDefaultIcons[theme]}
            {children}
        </div>
    );
};

export default Badge;
