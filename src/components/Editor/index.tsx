'use client'
import { useState } from 'react';
import RichTextEditor, { BaseKit } from 'reactjs-tiptap-editor';
import { Blockquote } from 'reactjs-tiptap-editor/blockquote';
import { Bold } from 'reactjs-tiptap-editor/bold';
import { BulletList } from 'reactjs-tiptap-editor/bulletlist';
import { Color } from 'reactjs-tiptap-editor/color';
import { FontSize } from 'reactjs-tiptap-editor/fontsize';
import { Heading } from 'reactjs-tiptap-editor/heading';
import { Highlight } from 'reactjs-tiptap-editor/highlight';
import { History } from 'reactjs-tiptap-editor/history';
import { HorizontalRule } from 'reactjs-tiptap-editor/horizontalrule';
import { Image } from 'reactjs-tiptap-editor/image';
import { Italic } from 'reactjs-tiptap-editor/italic';
import { Link } from 'reactjs-tiptap-editor/link';
import { OrderedList } from 'reactjs-tiptap-editor/orderedlist';
import { SlashCommand } from 'reactjs-tiptap-editor/slashcommand';
import { Strike } from 'reactjs-tiptap-editor/strike';
import { Table } from 'reactjs-tiptap-editor/table';
import { TableOfContents } from 'reactjs-tiptap-editor/tableofcontent';
import { TextAlign } from 'reactjs-tiptap-editor/textalign';
import { TextUnderline } from 'reactjs-tiptap-editor/textunderline';

import 'reactjs-tiptap-editor/style.css';

const extensions = [
    BaseKit.configure({
        placeholder: { showOnlyCurrent: true },
        characterCount: false,
    }),

    History,
    TableOfContents,
    Heading.configure({ spacer: true }),
    FontSize,
    Bold,
    Italic,
    TextUnderline,
    Strike,
    Color.configure({ spacer: true }),
    Highlight,
    BulletList,
    OrderedList,
    TextAlign.configure({ types: ['heading', 'paragraph'], spacer: true }),

    Link,
    Image.configure({
        upload: (files: File) => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(URL.createObjectURL(files));
                }, 500);
            });
        },
    }),

    Blockquote,
    SlashCommand,
    HorizontalRule,
    Table,
];

function Editor({
    defaultContent = '',
    onChange,
    ...rest
}: {
    defaultContent?: string;
    onChange?: (val: string) => void;
}) {
    const [content, setContent] = useState(defaultContent);

    const onValueChange = (value: string) => {
        setContent(value);
        onChange?.(value); // 🔁 Send to parent
    };

    return (
        <main
            style={{
                padding: '0 20px',
            }}
        >
            <div
                style={{
                    maxWidth: 1024,
                    margin: '40px auto 40px',
                }}
            >
                <RichTextEditor
                    output='html'
                    content={content}
                    onChangeContent={onValueChange}
                    extensions={extensions}
                    {...rest}
                />

                {/* {typeof content === 'string' && (
                    <textarea
                        className='textarea'
                        style={{
                            marginTop: 20,
                            height: 500,
                            width: '100%',
                            borderRadius: 4,
                            padding: 10,
                        }}
                        value={content}
                    />
                )} */}
            </div>
        </main>
    );
}

export default Editor;
