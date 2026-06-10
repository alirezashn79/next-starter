import classNames from 'classnames';
import React, { FC } from 'react';
import {
    DividerOrientation,
    DividerPosition,
    DividerProps,
} from './divider.type';
import { Theme } from '@/utils/types/components/component-base.type';

const themeClasses: Record<Theme, string> = {
    accent: 'divider-accent',
    error: 'divider-error',
    info: 'divider-info',
    neutral: 'divider-neutral',
    primary: 'divider-primary',
    secondary: 'divider-secondary',
    success: 'divider-success',
    warning: 'divider-warning',
    default: '',
};
const orientationProps: Record<DividerOrientation, string> = {
    horizontal: 'divider-horizontal',
    vertical: '',
};
const positionProps: Record<DividerPosition, string> = {
    center: '',
    end: 'divider-end',
    start: 'divider-start',
};
const Divider: FC<DividerProps> = ({
    children,
    theme = 'primary',
    orientation = 'vertical',
    position = 'center',
    classname,
}) => {
    const classes = classNames(
        'divider',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${orientationProps[orientation]}`]: orientation,
        },
        {
            [`${positionProps[position]}`]: position,
        },
        classname
    );
    return <div className={classes}>{children}</div>;
};

export default Divider;

