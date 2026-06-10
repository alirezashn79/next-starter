export type ProvinceId =
    | 'tehran'
    | 'isfahan'
    | 'fars'
    | 'razavi_khorasan'
    | 'mazandaran';

export interface ProvinceData {
    name: string;
    capital: string;
    population: string;
    area: string;
}

export const PROVINCES: Record<ProvinceId, ProvinceData> = {
    tehran: {
        name: 'تهران',
        capital: 'تهران',
        population: '۱۴,۰۰۰,۰۰۰',
        area: '۱۸,۸۱۴',
    },
    isfahan: {
        name: 'اصفهان',
        capital: 'اصفهان',
        population: '۵,۱۰۰,۰۰۰',
        area: '۱۰۷,۰۲۹',
    },
    fars: {
        name: 'فارس',
        capital: 'شیراز',
        population: '۴,۸۰۰,۰۰۰',
        area: '۱۲۲,۶۰۸',
    },
    razavi_khorasan: {
        name: 'خراسان رضوی',
        capital: 'مشهد',
        population: '۶,۴۰۰,۰۰۰',
        area: '۱۱۸,۸۵۱',
    },
    mazandaran: {
        name: 'مازندران',
        capital: 'ساری',
        population: '۳,۳۰۰,۰۰۰',
        area: '۲۳,۸۴۲',
    },
};
