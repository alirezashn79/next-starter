import { ComponentBase } from '@/utils/types/components/component-base.type';
import type { DropzoneOptions } from 'react-dropzone';

export type DndProps = Omit<ComponentBase, 'size' | 'isDisabled'> &
    DropzoneOptions & {
        onChange?: (file: File | File[] | null) => void;
        children: React.ReactNode;
        showDetails?: boolean;
        allowMultiple?: boolean;
        enableDelete?: boolean;
        enableDownload?: boolean;
        fileItemStyle?: string;
    };
