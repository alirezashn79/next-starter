import { PlayerProps } from 'next-video';

export type VideoType = PlayerProps & {
    src: string;
    poster?: string;
    className?: string;
};

