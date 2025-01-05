
import { Button } from '@/components/ui/button';
import { Type } from 'lucide-react';
import { useState } from 'react';
import { BsTextareaResize } from "react-icons/bs";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Label } from '@/components/ui/label';
import DynamicFormElement from '@/components/custom/dynamic-form-element';

interface FieldsProp {
    id: string,
    title: string,
    icon: React.ReactElement
}

const fields: FieldsProp[] = [
    {
        id: 'Input',
        title: 'Text Field',
        icon: <Type className='w-8 h-8' />
    },
    {
        id: 'Textarea',
        title: 'Textarea Field',
        icon: <BsTextareaResize size={24} />
    }
]
interface FieldDataType {
    id: string
    name: string
    label: string
    placeholder: string
    element: 'Input' | 'Textarea'
}

const FormSchema = z.object({
    username: z.string(),
    email: z.string()
})
export default function CustomizeFields() {
    const [dynamicForm, setDynamicForm] = useState<FieldDataType[]>([
        {
            id: '100',
            name: 'username',
            label: 'Username',
            placeholder: 'Enter Username',
            element: 'Input'
        },
        {
            id: '102',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter Email',
            element: 'Textarea'
        },
    ])

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        mode: 'onChange',
        defaultValues: {
            username: "",
            email: ''
        },
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log('Submit', data)
    }

    return (
        <div className="min-h-full grid grid-cols-[1fr_270px] border rounded-md">
            <div className="px-2 py-1.5 bg-zinc-50">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/4 space-y-4">
                        {dynamicForm && dynamicForm.length > 0 && dynamicForm.map((field) => (
                            <DynamicFormElement key={field.id} fieldData={field} control={form.control} />
                        ))}
                        <Button type='submit'>Submit</Button>
                    </form>
                </Form>
            </div>
            <div className='px-2 py-1.5 space-y-2'>
                <h1 className='col-span-2'>Form Fields</h1>
                <div className="grid grid-cols-2 gap-1">
                    {
                        fields.map((field) => (
                            <Button key={field.id} variant='outline' className='py-8'>
                                <div className='flex flex-col items-center gap-2'>
                                    <div className='h-full'>{field.icon}</div>
                                    <p>{field.title}</p>
                                </div>
                            </Button>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}