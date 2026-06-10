import React, { FC } from 'react';
import { Position, TooltipProps } from './tooltip.type';
import { Theme } from '@/utils/types/components/component-base.type';
import classNames from 'classnames';

const themeClasses: Record<Theme, string> = {
    accent: 'tooltip-accent',
    error: 'tooltip-error',
    info: 'tooltip-info',
    neutral: 'tooltip-neutral',
    primary: 'tooltip-primary',
    secondary: 'tooltip-secondary',
    success: 'tooltip-success',
    warning: 'tooltip-warning',
    default: '',
};
const positionClasses: Record<Position, string> = {
    right: 'tooltip-right',
    left: 'tooltip-left',
    top: 'tooltip-top',
    bottom: 'tooltip-bottom',
};
const Tooltip: FC<TooltipProps> = ({
    children,
    content,
    classname,
    theme = 'primary',
    position = 'top',
}) => {
    const classes = classNames(
        'tooltip',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${positionClasses[position]}`]: position,
        },
        classname
    );
    return (
        <div>
            <div className={classes}>
                <div className='tooltip-content'>{content}</div>
                {children}
            </div>
        </div>
    );
};

export default Tooltip;

