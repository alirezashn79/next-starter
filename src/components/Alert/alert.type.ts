export type AlertThemes = 'default' | 'success' | 'info' | 'error' | 'warning';
export type AlertVariants = 'default' | 'soft' | 'outline' | 'dash';

export type AlertProps = {
    children: React.ReactNode;
    icon?: React.ReactNode;
    theme?: AlertThemes;
    variant?: AlertVariants;
    classname?: string;
    isResponsive?: boolean;
};

