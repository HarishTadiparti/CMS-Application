'use client'
import { type Editor } from "@tiptap/react"
import { Toggle } from "./ui/toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverItem, PopoverLabel, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, Pilcrow, Heading1, Heading2, Heading3, List, ListOrdered, ListTodo, Bold, Italic, Underline, Link } from "lucide-react"
import { JSX, useState } from "react"
import { Button } from "./ui/button"

interface TextFormattingProps {
    icon: JSX.Element,
    label: string
}
export default function TiptapToolbar({ editor }: { editor: Editor | null }) {
    const [selectedIcon, setSelectedIcon] = useState<TextFormattingProps>({ icon: <Pilcrow className="w-4 h-4" />, label: 'Paragraph' })
    const hierarchyList = [
        {
            label: 'Hierarchy',
            items: [
                { label: 'Paragraph', icon: <Pilcrow className="w-4 h-4" /> },
                { label: 'Heading 1', icon: <Heading1 className="w-4 h-4" /> },
                { label: 'Heading 2', icon: <Heading2 className="w-4 h-4" /> },
                { label: 'Heading 3', icon: <Heading3 className="w-4 h-4" /> }
            ]
        },
        {
            label: 'List',
            items: [
                { label: 'Bullet list', icon: <List className="w-4 h-4" /> },
                { label: 'Numbered list', icon: <ListOrdered className="w-4 h-4" /> },
                { label: 'Todo list', icon: <ListTodo className="w-4 h-4" /> }
            ]
        }
    ]
    if (!editor) {
        return null
    };

    const handleSelectItem = (icon: TextFormattingProps) => {
        setSelectedIcon(icon)
    }

    return (
        <div className="p-1 space-x-1 border rounded-md">
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent className="p-1 space-y-1 w-[140px]">
                    <PopoverLabel>Hierarchy</PopoverLabel>
                    <PopoverItem isActive={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()} ><Pilcrow className="w-4 h-4" />Paragraph</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} ><Heading1 className="w-4 h-4" />Heading 1</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} ><Heading2 className="w-4 h-4" />Heading 2</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} ><Heading3 className="w-4 h-4" />Heading 3</PopoverItem>
                    <PopoverLabel>List</PopoverLabel>
                    <PopoverItem isActive={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()} ><List className="w-4 h-4" />Bullet list</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} ><ListOrdered className="w-4 h-4" />Numbered list</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} ><ListTodo className="w-4 h-4" />Todo list</PopoverItem>
                </PopoverContent>
            </Popover>

            <Toggle
                size='sm'
                pressed={editor.isActive('bold')}
                onPressedChange={() => editor.chain().focus().toggleBold().run()} >
                <Bold className="w-4 h-4" />
            </Toggle>
            <Toggle
                size='sm'
                pressed={editor.isActive('italic')}
                onPressedChange={() => editor.chain().focus().toggleItalic().run()} >
                <Italic className="w-4 h-4" />
            </Toggle>
            <Toggle
                size='sm'
                pressed={editor.isActive('underline')}
                onPressedChange={() => editor.chain().focus().toggleUnderline().run()} >
                <Underline className="w-4 h-4" />
            </Toggle>
        </div >
    )
}