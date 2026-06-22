import classNames from 'classnames';
import Image from 'next/image';
import { useCallback } from 'react';
import { Accept, useDropzone } from 'react-dropzone';

export interface FileWithPreview extends File {
    preview: string;
}

interface DropzoneProps {
    files: FileWithPreview[];
    onChange: (files: FileWithPreview[]) => void;
    accept?: Accept;
    maxSize?: number;
    maxFiles?: number;
    title?: string;
    description?: string;
    dragActiveText?: string;
    className?: string;
}

// تابع کمکی برای تشخیص نوع فایل و نمایش آیکون مناسب
const getFileIcon = (file: File) => {
    const extension = file.name.split('.').pop()?.toLowerCase() || '';

    // آیکون‌های متنی ساده با ایموجی
    const iconMap: Record<string, string> = {
        pdf: '📄',
        zip: '📦',
        rar: '📦',
        '7z': '📦',
        doc: '📝',
        docx: '📝',
        xls: '📊',
        xlsx: '📊',
        ppt: '📽️',
        pptx: '📽️',
        txt: '📃',
        jpg: '🖼️',
        jpeg: '🖼️',
        png: '🖼️',
        gif: '🖼️',
        svg: '🖼️',
        webp: '🖼️',
        mp4: '🎬',
        avi: '🎬',
        mov: '🎬',
        mp3: '🎵',
        wav: '🎵',
    };

    return iconMap[extension] || '📎';
};

// تابع کمکی برای تشخیص اینکه آیا فایل تصویر است یا نه
const isImageFile = (file: File) => {
    return file.type.startsWith('image/');
};

export default function Dropzone({
    files,
    onChange,
    accept,
    maxSize = 2 * 1024 * 1024,
    maxFiles,
    title = 'آپلود مدارک',
    description = 'حداکثر حجم بارگذاری هر مدرک: ۲ مگابایت',
    dragActiveText = 'اینجا رها کنید',
    className,
}: DropzoneProps) {
    const onDrop = useCallback(
        (acceptedFiles: File[]) => {
            const mappedFiles = acceptedFiles.map((file) =>
                Object.assign(file, {
                    preview: isImageFile(file) ? URL.createObjectURL(file) : '',
                }),
            );

            if (maxFiles === 1) {
                onChange(mappedFiles);
            } else {
                onChange([...files, ...mappedFiles]);
            }
        },
        [files, onChange, maxFiles],
    );

    const removeFile = (index: number) => {
        const newFiles = [...files];
        if (newFiles[index]?.preview) {
            URL.revokeObjectURL(newFiles[index].preview);
        }
        newFiles.splice(index, 1);
        onChange(newFiles);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept,
        maxSize,
        maxFiles,
    });

    const defaultClass =
        'bg-secondary-100 rounded-2xl border border-dashed flex flex-col items-center justify-center text-center leading-6 text-xs text-secondary-400 cursor-pointer min-h-24 p-4 transition-all hover:bg-secondary-200';

    return (
        <div
            {...getRootProps()}
            className={classNames(defaultClass, className)}
        >
            <input {...getInputProps()} />

            {files.length > 0 ? (
                <div className='w-full space-y-3'>
                    {(title || description) && (
                        <div className='space-y-1'>
                            {title && (
                                <p className='font-semibold text-sm'>{title}</p>
                            )}
                            {description && (
                                <p className='opacity-80 text-xs'>
                                    {description}
                                </p>
                            )}
                        </div>
                    )}

                    <div className='grid grid-cols-2 sm:grid-cols-3 gap-3'>
                        {files.map((file, index) => (
                            <div
                                key={`${file.name}-${index}`}
                                className='relative flex items-center gap-2 p-2 border border-secondary-200 rounded-xl bg-white group'
                            >
                                {isImageFile(file) && file.preview ? (
                                    <div className='relative w-12 h-12 rounded-lg overflow-hidden shrink-0 bg-gray-100'>
                                        <Image
                                            src={file.preview}
                                            alt={file.name}
                                            fill
                                            className='object-cover'
                                        />
                                    </div>
                                ) : (
                                    <div className='w-12 h-12 rounded-lg bg-secondary-200 flex items-center justify-center text-2xl shrink-0'>
                                        {getFileIcon(file)}
                                    </div>
                                )}

                                <div className='flex flex-col min-w-0 flex-1'>
                                    <p className='text-xs font-medium text-gray-700 truncate dir-ltr text-right'>
                                        {file.name}
                                    </p>
                                    <p className='text-[10px] text-gray-400'>
                                        {(file.size / (1024 * 1024)).toFixed(2)}{' '}
                                        MB
                                    </p>
                                </div>

                                <button
                                    type='button'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFile(index);
                                    }}
                                    className='absolute -top-1 -left-1 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity shadow-sm hover:bg-red-600'
                                    title='حذف فایل'
                                >
                                    &times;
                                </button>
                            </div>
                        ))}
                    </div>

                    {isDragActive && (
                        <p className='text-secondary-600 font-medium mt-2'>
                            {dragActiveText}
                        </p>
                    )}
                </div>
            ) : isDragActive ? (
                <p className='text-secondary-600 font-medium'>
                    {dragActiveText}
                </p>
            ) : (
                <div className='space-y-1'>
                    <p className='font-semibold text-sm'>{title}</p>
                    {description && <p className='opacity-80'>{description}</p>}
                </div>
            )}
        </div>
    );
}
