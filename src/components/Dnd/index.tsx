import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import classNames from 'classnames';
import Button from '../Button';
import { DndProps } from './dnd.type';
import { Download, Trash } from '@/components/_icons';

const Dnd: React.FC<DndProps> = ({
    onChange = () => {},
    showDetails = false,
    children,
    classname,
    fileItemStyle,
    accept = { 'image/*': ['.jpg', '.jpeg', '.png'] },
    maxFiles = 1,
    allowMultiple = false,
    enableDownload = true,
    enableDelete = true,
    ...rest
}) => {
    const [files, setFiles] = useState<
        Array<File & { preview: string; index: number }>
    >([]);

    const { getRootProps, getInputProps } = useDropzone({
        accept,
        multiple: allowMultiple,
        maxFiles,
        onDrop: (acceptedFiles) => {
            const newFiles = acceptedFiles.map((file, index) =>
                Object.assign(file, {
                    index,
                    preview: URL.createObjectURL(file),
                }),
            );
            setFiles(newFiles);
            onChange(allowMultiple ? acceptedFiles : acceptedFiles[0]);
        },
        ...rest,
    });

    const deleteFile = (id: number) => {
        const updatedFiles = files.filter((_, i) => i !== id);
        // revoke old URLs
        URL.revokeObjectURL(files[id].preview);
        setFiles(updatedFiles);
        onChange(allowMultiple ? updatedFiles.map((f) => f as File) : null);
    };

    const downloadFile = (id: number) => {
        const fileToDownload = files[id];
        if (fileToDownload) {
            const url = URL.createObjectURL(fileToDownload);
            const link = document.createElement('a');
            link.href = url;
            link.download = fileToDownload.name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }
    };

    const dndClasses = classNames(classname);
    const detailsClasses = classNames(
        'bg-white py-3 px-4 rounded flex items-center justify-between',
        fileItemStyle,
    );

    return (
        <section className='cursor-pointer relative'>
            <div {...getRootProps()} className={dndClasses}>
                <input {...getInputProps()} />
                {children}
            </div>

            {showDetails && files.length > 0 && (
                <aside className='mt-5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
                    {files.map((file) => (
                        <div key={file.name} className={detailsClasses}>
                            <div className='flex flex-col items-center w-full'>
                                <img
                                    src={file.preview}
                                    alt={file.name}
                                    className='rounded-xl w-full h-40 object-cover mb-2'
                                />
                                <div className='flex gap-3'>
                                    {enableDelete && (
                                        <Button
                                            onClick={() =>
                                                deleteFile(file.index)
                                            }
                                            theme='error'
                                            variant='soft'
                                            size='sm'
                                        >
                                            <Trash width={14} height={14} />
                                            Delete
                                        </Button>
                                    )}
                                    {enableDownload && (
                                        <Button
                                            onClick={() =>
                                                downloadFile(file.index)
                                            }
                                            theme='info'
                                            variant='soft'
                                            size='sm'
                                        >
                                            <Download width={14} height={14} />
                                            Download
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </aside>
            )}
        </section>
    );
};

export default Dnd;
