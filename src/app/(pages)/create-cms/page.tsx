'use client'
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import FormFieldComponent from "@/components/custom/formfield-component";
import { PageLayoutHeader, PageLayoutTitle } from "@/components/custom/page-layout";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { icons, Plus } from "lucide-react";
import { title } from "process";
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
    name: z.string({ required_error: 'required' }).min(1, 'Required'),
    url: z.string({ required_error: 'required' }).min(1, 'Required')
})

const breadcrumbItems = [
    {
        name: 'Create CMS',
        link: '/create-cms'
    }
]

const steps = [
    {
        icon: <Plus />,
        title: 'Create CMS',
        description: 'Create CMS'
    },
    {
        icon: <Plus />,
        title: 'Select Template',
        description: 'Select Template'
    }
]
export default function CreateCMSPage() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            url: ''
        },
    })

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
    }
    return (
        <div className="space-y-3">
            <PageLayoutHeader>
                <CustomBreadcrumb items={breadcrumbItems} />
            </PageLayoutHeader>

            <div className="px-4 ">
                <PageLayoutTitle className="text-xl font-semibold">Create CMS</PageLayoutTitle>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/4 mt-3 space-y-4">
                        <FormFieldComponent name="name" label="CMS Name" placeholder="Enter CMS Name" control={form.control} />
                        <FormFieldComponent name="url" label="CMS URL" placeholder="Enter CMS URL" control={form.control} />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </div>
    )
}