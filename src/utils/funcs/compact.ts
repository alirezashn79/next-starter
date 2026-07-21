export const compact = <T extends Record<string, any>>(obj: T) =>
    Object.fromEntries(
        Object.entries(obj).filter(
            ([, value]) => value != null && value !== '',
        ),
    ) as Partial<T>;
