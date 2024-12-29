import { type Editor } from '@tiptap/react';
import { Bold, Heading1, Heading2, Heading3, List, ListOrdered, ListTodo, Pilcrow } from 'lucide-react';
export default function GetTiptapSelectedIcon({ editor }: { editor: Editor | null }) {

    if (!editor) {
        return null
    }

    if (editor.isActive('heading', { level: 1 })) {
        return <Heading1 className="w-4 h-4" />;
    }
    else if (editor.isActive('heading', { level: 2 })) {
        return <Heading2 className="w-4 h-4" />;
    }
    else if (editor.isActive('heading', { level: 3 })) {
        return <Heading3 className="w-4 h-4" />;
    }
    else if (editor.isActive('bulletList')) {
        return <List className="w-4 h-4" />;
    }
    else if (editor.isActive('orderedList')) {
        return <ListOrdered className="w-4 h-4" />;
    }
    else if (editor.isActive('ListTodo')) {
        return <ListTodo className="w-4 h-4" />;
    }
    else {
        return <Pilcrow className="w-4 h-4" />;
    }
}