import React, { FC } from 'react';
import { RatingType } from './rating.type';
import classNames from 'classnames';
import { Size, Theme } from '@/utils/types/components/component-base.type';

const Rating: FC<RatingType> = ({
    ratingId,
    score,
    isDisabled,
    theme = 'warning',
    size = 'xs',
    starClassname,
    classname,
}) => {
    const themeClasses: Record<Theme, string> = {
        accent: 'bg-accent',
        error: 'bg-error',
        info: 'bg-info',
        neutral: 'bg-neutral',
        primary: 'bg-primary',
        secondary: 'bg-secondary',
        success: 'bg-success',
        warning: 'bg-warning',
        default: '',
    };
    const sizeClasses: Record<Size, string> = {
        xs: 'rating-xs',
        sm: 'rating-sm',
        md: 'rating-md',
        lg: 'rating-lg',
        xl: 'rating-xl',
    };
    const starItemClasses = classNames(
        'mask',
        'mask-star-2',
        {
            [`${themeClasses[theme]}`]: theme,
        },
        {
            '!cursor-default':isDisabled
        },
        starClassname,
    );
    const starsContainerClasses = classNames(
        'rating',
        {
            [`${sizeClasses[size]}`]: size,
        },
        classname,
    );
    return (
        <div className={starsContainerClasses}>
            <input
                type='radio'
                disabled={isDisabled}
                name={ratingId}
                className={starItemClasses}
                aria-label='1 star'
                defaultChecked={score == 1}
            />
            <input
                type='radio'
                disabled={isDisabled}
                name={ratingId}
                className={starItemClasses}
                aria-label='2 star'
                defaultChecked={score == 2}
            />
            <input
                type='radio'
                disabled={isDisabled}
                name={ratingId}
                className={starItemClasses}
                aria-label='3 star'
                defaultChecked={score == 3}
            />
            <input
                type='radio'
                disabled={isDisabled}
                name={ratingId}
                className={starItemClasses}
                aria-label='4 star'
                defaultChecked={score == 4}
            />
            <input
                type='radio'
                disabled={isDisabled}
                name={ratingId}
                className={starItemClasses}
                aria-label='5 star'
                defaultChecked={score == 5}
            />
        </div>
    );
};

export default Rating;
