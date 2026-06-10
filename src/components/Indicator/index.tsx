import React, { FC } from 'react';
import {
    HorizontalIndicatorPosition,
    IndicatorProps,
    VerticalIndicatorPosition,
} from './indicator.type';
import classNames from 'classnames';

const Indicator: FC<IndicatorProps> = ({
    children,
    indicator,
    horizontal = 'center',
    vertical = 'middle',
}) => {
    const verticalClasses: Record<VerticalIndicatorPosition, string> = {
        top: 'indicator-top',
        middle: 'indicator-middle',
        bottom: 'indicator-bottom',
    };
    const horizontalClasses: Record<HorizontalIndicatorPosition, string> = {
        start: 'indicator-start',
        center: 'indicator-center',
        end: 'indicator-end',
    };
    const classes = classNames(
        'indicator-item',
        verticalClasses[vertical],
        horizontalClasses[horizontal],
    );
    return (
        <div className='indicator'>
            <div className={classes}>{indicator}</div>
            {children}
        </div>
    );
};

export default Indicator;
