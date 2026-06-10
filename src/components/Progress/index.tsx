import classNames from 'classnames';
import React, { FC } from 'react';

import { ProgressProps } from './progress.type';
import { Theme } from '@/utils/types/components/component-base.type';

const themeClasses: Record<Theme, string> = {
    accent: 'progress-accent',
    error: 'progress-error',
    info: 'progress-info',
    neutral: 'progress-neutral',
    primary: 'progress-primary',
    secondary: 'progress-secondary',
    success: 'progress-success',
    warning: 'progress-warning',
    default: '',
};

const Progress: FC<ProgressProps> = ({
    value = 0,
    classname,
    theme = 'primary',
}) => {
    const classes = classNames(
        'progress',
        { [`${themeClasses[theme]}`]: theme },
        classname
    );
    return <progress className={classes} value={value} max='100'></progress>;
};

export default Progress;

