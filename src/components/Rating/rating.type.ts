import { ComponentBase } from '@/utils/types/components/component-base.type';

export type RatingType = ComponentBase & {
    ratingId: string;
    score: number;
    starClassname?: string;
};
