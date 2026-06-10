import { type FC } from 'react';
import type { ModalProps } from './modal.type';
import Button from '../Button';
import { closeModal } from '@/utils/funcs/modal';
import { X } from 'icons';
import classNames from 'classnames';

const Modal: FC<ModalProps> = ({
    title,
    children,
    id,
    size = 'md',
    icon,
    description,
}) => {
    const classes = classNames(
        'modal-box hide-scrollbar overflow-y-auto max-h-[95vh]',
        {
            'w-11/12 max-w-4xl my-10': size === 'xl',
            'w-10/12 max-w-2xl my-10': size === 'md',
        },
    );
    const wrapperClasses = classNames('modal', {
        'py-4': size !== 'sm',
        'modal-bottom sm:modal-middle': size == 'sm',
    });
    return (
        <div>
            <dialog id={id} className={wrapperClasses}>
                <div className={classes}>
                    <div className='flex items-start justify-between'>
                        <div className='flex flex-col'>
                            <div className='flex items-center gap-x-2'>
                                {icon}
                                <p className='text-lg'>{title}</p>
                            </div>
                            {description && (
                                <p className='text-gray-400 mt-2 text-sm'>
                                    {description}
                                </p>
                            )}
                        </div>

                        <form
                            className='cursor-pointer'
                            onClick={() => closeModal(id)}
                        >
                            <Button
                                size='sm'
                                className='px-2 border-0'
                                theme='default'
                            >
                                <X width={16} height={16} />
                            </Button>
                        </form>
                    </div>

                    <div className='py-4'>{children}</div>
                </div>

                <form method='dialog' className='modal-backdrop'>
                    <button>close</button>
                </form>
            </dialog>
        </div>
    );
};

export default Modal;
