export type ModalProps = {
    id: string;
    size?: 'sm' | 'md' | 'xl';
    title: string;
    icon?: React.ReactNode;
    description?: string;
    children: React.ReactNode;
};
