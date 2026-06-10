import classNames from 'classnames';
import React, { FC } from 'react';
import { SkeletonProps } from './skeleton.type';

const Skeleton: FC<SkeletonProps> = ({ classname, children }) => {
    const classes = classNames('skeleton', classname);
    return <div className={classes}>{children}</div>;
};

export default Skeleton;
