'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import 'suneditor/dist/css/suneditor.min.css';

const SunEditor = dynamic(() => import('suneditor-react'), {
    ssr: false,
});

interface EditorProps {
    defaultContent?: string;
    onChange?: (val: string) => void;
    [key: string]: any;
}

export default function Editor({
    defaultContent = '',
    onChange,
    ...rest
}: EditorProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleChange = (content: string) => {
        if (onChange) {
            onChange(content);
        }
    };

    if (!isMounted) {
        return (
            <main style={{ padding: '0 20px' }}>
                <div
                    style={{
                        maxWidth: 1024,
                        margin: '0 auto',
                        height: 'auto',
                        backgroundColor: '#f9f9f9',
                        borderRadius: 8,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    Loading...
                </div>
            </main>
        );
    }

    return (
        <main style={{ padding: '0 20px' }} {...rest}>
            <div style={{ maxWidth: 1024, margin: '0 auto' }}>
                <SunEditor
                    defaultValue={defaultContent}
                    onChange={handleChange}
                    setOptions={{
                        height: 'auto',
                        minHeight: '400px',
                        buttonList: [
                            ['undo', 'redo'],
                            ['font', 'fontSize', 'formatBlock'],
                            ['paragraphStyle', 'blockquote'],
                            [
                                'bold',
                                'underline',
                                'italic',
                                'strike',
                                'subscript',
                                'superscript',
                            ],
                            ['fontColor', 'hiliteColor', 'textStyle'],
                            ['removeFormat'],
                            '/',
                            ['outdent', 'indent'],
                            ['align', 'horizontalRule', 'list', 'lineHeight'],
                            ['table', 'link', 'image', 'video'],
                            ['fullScreen', 'showBlocks', 'codeView'],
                            ['preview', 'print'],
                        ],
                        defaultTag: 'p',
                        showPathLabel: false,
                        resizingBar: false,
                    }}
                />
            </div>
        </main>
    );
}
