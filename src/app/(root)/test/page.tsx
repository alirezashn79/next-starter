'use client';

import { useEffect, useRef, useState } from 'react';

type ProvinceInfo = {
    id: string;
    name: string;
    capital: string;
    cities: string[];
    population?: string;
};

type PopoverState = {
    visible: boolean;
    x: number;
    y: number;
    provinceId: string | null;
};

const provinceData: Record<string, ProvinceInfo> = {
    tehran: {
        id: 'tehran',
        name: 'تهران',
        capital: 'تهران',
        cities: ['تهران', 'ری', 'شمیرانات', 'اسلامشهر'],
        population: 'حدود ۱۴ میلیون',
    },
    isfahan: {
        id: 'isfahan',
        name: 'اصفهان',
        capital: 'اصفهان',
        cities: ['اصفهان', 'کاشان', 'نجف‌آباد', 'خمینی‌شهر'],
        population: 'حدود ۵ میلیون',
    },
    fars: {
        id: 'fars',
        name: 'فارس',
        capital: 'شیراز',
        cities: ['شیراز', 'مرودشت', 'جهرم', 'فسا'],
        population: 'حدود ۵ میلیون',
    },
};

export default function IranMap() {
    const mapRef = useRef<HTMLDivElement>(null);
    const wrapperRef = useRef<HTMLDivElement>(null);

    const [svgLoaded, setSvgLoaded] = useState(false);
    const [selectedProvince, setSelectedProvince] = useState<string | null>(
        null,
    );
    const [hoveredProvince, setHoveredProvince] = useState<string | null>(null);
    const [popover, setPopover] = useState<PopoverState>({
        visible: false,
        x: 0,
        y: 0,
        provinceId: null,
    });

    useEffect(() => {
        const loadMap = async () => {
            const svgText = await fetch('/maps/iran.svg').then((res) =>
                res.text(),
            );

            if (!mapRef.current) return;

            mapRef.current.innerHTML = svgText;

            const svg = mapRef.current.querySelector('svg');
            if (!svg) return;

            svg.style.width = '100%';
            svg.style.height = 'auto';
            svg.style.display = 'block';

            const provinces = svg.querySelectorAll(
                '#provinces path',
            ) as NodeListOf<SVGPathElement>;

            provinces.forEach((province) => {
                province.style.cursor = 'pointer';
                province.style.transition = 'fill .2s ease, opacity .2s ease';
                province.style.fill = '#D1D5DB';
            });

            const updateProvinceStyles = () => {
                provinces.forEach((province) => {
                    const isSelected = province.id === selectedProvince;
                    const isHovered = province.id === hoveredProvince;

                    if (isSelected) {
                        province.style.fill = '#EF4444';
                    } else if (isHovered) {
                        province.style.fill = '#6366F1';
                    } else {
                        province.style.fill = '#D1D5DB';
                    }
                });
            };

            const getPopoverPosition = (target: SVGPathElement) => {
                const wrapperRect = wrapperRef.current?.getBoundingClientRect();
                const targetRect = target.getBoundingClientRect();

                if (!wrapperRect) {
                    return { x: 0, y: 0 };
                }

                return {
                    x:
                        targetRect.left -
                        wrapperRect.left +
                        targetRect.width / 2,
                    y: targetRect.top - wrapperRect.top,
                };
            };

            const handleMouseOver = (event: Event) => {
                const target = event.target as SVGPathElement;
                if (target.tagName !== 'path') return;

                setHoveredProvince(target.id);

                const pos = getPopoverPosition(target);
                setPopover({
                    visible: true,
                    x: pos.x,
                    y: pos.y,
                    provinceId: target.id,
                });
            };

            const handleMouseOut = (event: Event) => {
                const target = event.target as SVGPathElement;
                if (target.tagName !== 'path') return;

                setHoveredProvince((prev) =>
                    prev === target.id ? null : prev,
                );

                if (selectedProvince !== target.id) {
                    setPopover((prev) => ({
                        ...prev,
                        visible: false,
                        provinceId: null,
                    }));
                }
            };

            const handleClick = (event: Event) => {
                const target = event.target as SVGPathElement;
                if (target.tagName !== 'path') return;

                setSelectedProvince(target.id);

                const pos = getPopoverPosition(target);
                setPopover({
                    visible: true,
                    x: pos.x,
                    y: pos.y,
                    provinceId: target.id,
                });
            };

            svg.addEventListener('mouseover', handleMouseOver);
            svg.addEventListener('mouseout', handleMouseOut);
            svg.addEventListener('click', handleClick);

            setSvgLoaded(true);

            const observer = new MutationObserver(() => {
                updateProvinceStyles();
            });

            observer.observe(svg, {
                childList: true,
                subtree: true,
                attributes: true,
            });

            updateProvinceStyles();

            return () => {
                svg.removeEventListener('mouseover', handleMouseOver);
                svg.removeEventListener('mouseout', handleMouseOut);
                svg.removeEventListener('click', handleClick);
                observer.disconnect();
            };
        };

        const cleanupPromise = loadMap();

        return () => {
            cleanupPromise.then((cleanup) => cleanup && cleanup());
        };
    }, [selectedProvince, hoveredProvince]);

    const activeId = selectedProvince || hoveredProvince;
    const activeProvinceData = activeId ? provinceData[activeId] : null;

    return (
        <div className='space-y-4'>
            <div ref={wrapperRef} className='relative w-full max-w-4xl mx-auto'>
                <div
                    ref={mapRef}
                    className='w-full [&_svg]:block [&_svg]:w-full [&_svg]:h-auto'
                />

                {popover.visible && activeProvinceData && (
                    <div
                        className='absolute z-20 w-64 -translate-x-1/2 -translate-y-full rounded-xl border bg-white p-4 shadow-xl'
                        style={{
                            left: popover.x,
                            top: popover.y - 12,
                        }}
                    >
                        <div className='space-y-2 text-sm'>
                            <h3 className='text-base font-bold text-gray-900'>
                                {activeProvinceData.name}
                            </h3>

                            <p className='text-gray-700'>
                                <span className='font-semibold'>مرکز:</span>{' '}
                                {activeProvinceData.capital}
                            </p>

                            {activeProvinceData.population && (
                                <p className='text-gray-700'>
                                    <span className='font-semibold'>
                                        جمعیت:
                                    </span>{' '}
                                    {activeProvinceData.population}
                                </p>
                            )}

                            <div>
                                <p className='font-semibold text-gray-800'>
                                    شهرهای مهم:
                                </p>
                                <ul className='mt-1 list-inside list-disc text-gray-700'>
                                    {activeProvinceData.cities.map((city) => (
                                        <li key={city}>{city}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {selectedProvince && activeProvinceData && (
                <div className='rounded-xl border p-4'>
                    <span className='text-gray-600'>استان انتخاب‌شده:</span>
                    <strong className='mr-2'>{activeProvinceData.name}</strong>
                </div>
            )}

            {!svgLoaded && (
                <div className='text-sm text-gray-500'>
                    در حال بارگذاری نقشه...
                </div>
            )}
        </div>
    );
}
