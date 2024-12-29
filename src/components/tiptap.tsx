'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TiptapToolbar from './tiptab-toolbar'
import Heading from '@tiptap/extension-heading'


const Tiptap = ({ content, onChange }: { content: string, onChange: (richText: string) => void }) => {
    const editor = useEditor({
        extensions: [StarterKit.configure(), Underline],
        content: content,
        editorProps: {
            attributes: {
                class: 'min-h-[150px] border border-input rounded-md bg-transparent px-3 py-1 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm'
            }
        },
        onUpdate({ editor }) {
            onChange(editor.getHTML())
        }
    })

    return (
        <div className='space-y-2'>
            <TiptapToolbar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
