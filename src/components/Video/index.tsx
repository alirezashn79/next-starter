'use client';
import React, { FC } from 'react';

import Player from 'next-video/player';
import { VideoType } from './video.type';
import classNames from 'classnames';
const Video: FC<VideoType> = ({ src, poster, className, ...others }) => {
    const classes = classNames('overflow-hidden', className);
    return (
        <div className={classes} dir='ltr'>
            <Player src={src} poster={poster} {...others} />
        </div>
    );
};

export default Video;

