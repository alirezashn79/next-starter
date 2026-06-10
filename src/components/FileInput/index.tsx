import classNames from 'classnames';
import React, { FC } from 'react';
import { FileInputProps } from './fileInput.type';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const sizeClasses: Record<Size, string> = {
    xs: 'file-input-xs',
    sm: 'file-input-sm',
    md: 'file-input-md',
    lg: 'file-input-lg',
    xl: 'file-input-xl',
};
const themeClasses: Record<Theme, string> = {
    accent: 'file-input-accent',
    error: 'file-input-error',
    info: 'file-input-info',
    neutral: 'file-input-neutral',
    primary: 'file-input-primary',
    secondary: 'file-input-secondary',
    success: 'file-input-success',
    warning: 'file-input-warning',
    default: '',
};

const FileInput: FC<FileInputProps> = ({
    className,
    theme = 'primary',
    size = 'md',
    ...rest
}) => {
    const classes = classNames(
        'file-input',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            [`${sizeClasses[size]}`]: size,
        },
        className,
    );
    return (
        <div>
            <input type='file' className={classes} {...rest} />
        </div>
    );
};

export default FileInput;
