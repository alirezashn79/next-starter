import React, { FC } from 'react';
import { AlertProps, AlertThemes, AlertVariants } from './alert.type';
import classNames from 'classnames';
import {
    CircleCheck,
    CircleQuestionMark,
    CircleX,
    Info,
    TriangleAlert,
} from '@/components/_icons';

const Alert: FC<AlertProps> = ({
    children,
    icon,
    theme = 'default',
    variant = 'default',
    isResponsive = true,
    classname,
}) => {
    const themeClasses: Record<AlertThemes, string> = {
        default: '',
        error: 'alert-error',
        info: 'alert-info',
        success: 'alert-success',
        warning: 'alert-warning',
    };
    const variantClasses: Record<AlertVariants, string> = {
        default: '',
        dash: 'alert-dash',
        outline: 'alert-outline',
        soft: 'alert-soft',
    };
    const iconProps = { width: 20, height: 20 };

    const variantDefaultIcons: Record<AlertThemes, React.ReactNode> = {
        default: <CircleQuestionMark {...iconProps} />,
        error: <CircleX {...iconProps} />,
        info: <Info {...iconProps} />,
        success: <CircleCheck {...iconProps} />,
        warning: <TriangleAlert {...iconProps} />,
    };
    const classes = classNames(
        'alert',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${variantClasses[variant]}`]: variant,
        },
        {
            'alert-vertical  sm:alert-horizontal': isResponsive,
        },
        classname,
    );
    return (
        <div role='alert' className={classes}>
            {icon || variantDefaultIcons[theme]}
            {children}
        </div>
    );
};

export default Alert;
