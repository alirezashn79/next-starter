import React from 'react';

export type IndicatorProps = {
    horizontal?: HorizontalIndicatorPosition;
    vertical?: VerticalIndicatorPosition;
    children: React.ReactNode;
    indicator: React.ReactNode;
};

export type VerticalIndicatorPosition = 'top' | 'middle' | 'bottom';
export type HorizontalIndicatorPosition = 'start' | 'center' | 'end';
