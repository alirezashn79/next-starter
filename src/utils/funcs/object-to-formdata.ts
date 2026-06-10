type FormDataConvertible =
    | string
    | number
    | boolean
    | null
    | undefined
    | File
    | Blob
    | Date
    | FormDataConvertible[]
    | { [key: string]: FormDataConvertible };

export default function objectToFormData(
    obj: FormDataConvertible,
    formData: FormData = new FormData(),
    parentKey?: string,
): FormData {
    if (obj === null || obj === undefined) {
        return formData;
    }

    if (obj instanceof Date) {
        if (!parentKey) {
            throw new Error('parentKey is required for Date');
        }
        formData.append(parentKey, obj.toISOString());
        return formData;
    }

    if (obj instanceof File || obj instanceof Blob) {
        if (!parentKey) {
            throw new Error('parentKey is required for File or Blob');
        }
        formData.append(parentKey, obj);
        return formData;
    }

    if (Array.isArray(obj)) {
        obj.forEach((value) => {
            const key = parentKey ? `${parentKey}[]` : '[]';
            objectToFormData(value, formData, key);
        });
        return formData;
    }

    if (typeof obj === 'object') {
        Object.entries(obj).forEach(([key, value]) => {
            const formKey = parentKey ? `${parentKey}[${key}]` : key;
            objectToFormData(value, formData, formKey);
        });
        return formData;
    }

    if (!parentKey) {
        throw new Error('parentKey is required for primitive values');
    }

    formData.append(parentKey, String(obj));
    return formData;
}
