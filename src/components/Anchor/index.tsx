import React, { FC } from 'react';
import Link from 'next/link';
import classNames from 'classnames';
import { Theme } from '@/utils/types/components/component-base.type';
import { AnchorProps } from './anchor.type';
const Anchor: FC<AnchorProps> = ({
    theme = 'primary',
    children,
    href,
    showUnderlineOnlyOnHover = false,
    className,
    ...rest
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'link-accent',
        error: 'link-error',
        info: 'link-info',
        neutral: 'link-neutral',
        primary: 'link-primary',
        secondary: 'link-secondary',
        success: 'link-success',
        warning: 'link-warning',
        default: '',
    };
    const classes = classNames(
        'link',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            'link-hover': showUnderlineOnlyOnHover,
        },
        className
    );
    return (
        <Link className={classes} href={href} {...rest}>
            {children}
        </Link>
    );
};

export default Anchor;

