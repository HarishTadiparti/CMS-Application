'use client'
import { type Editor, BubbleMenu } from "@tiptap/react"
import { Toggle } from "./ui/toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Popover, PopoverContent, PopoverItem, PopoverLabel, PopoverTrigger } from "@/components/ui/popover"
import { ChevronDown, Pilcrow, Heading1, Heading2, Heading3, List, ListOrdered, ListTodo, Bold, Italic, Underline, Link } from "lucide-react"
import { JSX, useState } from "react"
import { Button } from "./ui/button"
import GetTiptapSelectedIcon from "./get-tiptap-selected-icon"

interface TextFormattingProps {
    icon: JSX.Element,
    label: string
}
export default function TiptapToolbar({ editor }: { editor: Editor | null }) {
    if (!editor) {
        return null
    };

    return (
        <BubbleMenu className="p-1 flex items-center gap-1 bg-white shadow-sm border rounded-md" tippyOptions={{ duration: 100 }} editor={editor}>
            <Popover>
                <PopoverTrigger asChild>
                    <Button size='sm' variant='secondary'>
                        <GetTiptapSelectedIcon editor={editor} />
                        <ChevronDown className="w-4 h-4" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="p-1 space-y-1 w-[140px]">
                    <PopoverLabel>Hierarchy</PopoverLabel>
                    <PopoverItem isActive={editor.isActive('paragraph')} onClick={() => editor.chain().focus().setParagraph().run()} ><Pilcrow className="w-4 h-4" />Paragraph</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 1 })} onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} ><Heading1 className="w-4 h-4" />Heading 1</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 2 })} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} ><Heading2 className="w-4 h-4" />Heading 2</PopoverItem>
                    <PopoverItem isActive={editor.isActive('heading', { level: 3 })} onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} ><Heading3 className="w-4 h-4" />Heading 3</PopoverItem>
                    <PopoverLabel>List</PopoverLabel>
                    <PopoverItem isActive={editor.isActive('bulletList')} onClick={() => editor.chain().focus().toggleBulletList().run()} ><List className="w-4 h-4" />Bullet list</PopoverItem>
                    <PopoverItem isActive={editor.isActive('orderedList')} onClick={() => editor.chain().focus().toggleOrderedList().run()} ><ListOrdered className="w-4 h-4" />Numbered list</PopoverItem>
                    <PopoverItem isActive={editor.isActive('ListTodo')} onClick={() => editor.chain().focus().toggleTaskList().run()} ><ListTodo className="w-4 h-4" />Todo list</PopoverItem>
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
        </BubbleMenu >
    )
}