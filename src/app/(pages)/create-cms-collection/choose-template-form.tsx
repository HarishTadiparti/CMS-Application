import FormFieldComponent from "@/components/custom/formfield-component"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import { zodResolver } from "@hookform/resolvers/zod"
import { X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"

const templates = [
    {
        id: '100',
        name: 'Blog',
    },
    {
        id: '101',
        name: 'E-commerce',
    },
    {
        id: '102',
        name: 'Portfolio',
    },
    {
        id: '103',
        name: 'Business',
    },
    {
        id: '104',
        name: 'Personal',
    }
]

const formSchema = z.object({
    template: z.object({
        id: z.string(),
        name: z.string()
    }).optional()
})
export default function ChooseTemplateForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            template: undefined,
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log('Submit', data)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/4 space-y-4">
                    <FormFieldComponent name="template" label="Template" control={form.control}
                        render={() => (
                            <div>
                                <div className="px-2.5 py-2 flex flex-wrap items-center gap-x-1 gap-y-1.5 border border-input rounded-md">
                                    {
                                        templates.map((template) => (
                                            <div className="flex items-center gap-1">
                                                {form.getValues('template') && form.getValues('template')?.id === template.id ? <Badge
                                                    key={template.id}
                                                    variant='default'
                                                    className='font-normal rounded-full cursor-pointer'
                                                >
                                                    {template.name}
                                                    <X className="ml-1 w-3 h-3" onClick={() => form.reset({ template: undefined })} />
                                                </Badge> : <Badge
                                                    key={template.id}
                                                    variant='secondary'
                                                    className='font-normal rounded-full cursor-pointer'
                                                    onClick={() => form.reset({ template: template })}
                                                >
                                                    {template.name}
                                                </Badge>}
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        )}
                    />
                    <div className="flex items-center justify-end gap-2">
                        <Button type="submit" variant='secondary'>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}