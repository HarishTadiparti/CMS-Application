'use client'

import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import TiptapToolbar from './tiptab-toolbar'
import TaskList from '@tiptap/extension-task-list'
import TaskItem from '@tiptap/extension-task-item'

const Tiptap = ({ content, onChange }: { content: string, onChange: (richText: string) => void }) => {
    const editor = useEditor({
        autofocus: false,
        extensions: [
            StarterKit.configure(),
            Underline,
            TaskList,
            TaskItem.configure({
                nested: true,
            }),],
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
            <div className='sticky top-16 z-10 bg-white shadow-sm'>
                <TiptapToolbar editor={editor} />
            </div>
            <EditorContent editor={editor} />
        </div>
    )
}

export default Tiptap
