'use client'
import CustomBreadcrumb from "@/components/custom/custom-breadcrumb";
import FormFieldComponent from "@/components/custom/formfield-component";
import { PageLayout, PageLayoutHeader } from "@/components/custom/page-layout";
import TiptapToolbar from "@/components/tiptab-toolbar";
import Tiptap from "@/components/tiptap";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod";

const formSchema = z.object({
    title: z.string({ required_error: 'required' }).min(1, 'Required'),
    content: z.string({ required_error: 'required' }).min(1, 'Required')
})
export default function CreateNewBlog() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: '',
            content: ''
        },
        mode: 'onChange'
    })
    const breadcrumbItems = [
        { name: "Blogs", link: "/blogs" },
        { name: "Create New Blog", link: "/blogs/create" }
    ]

    function onSubmit(data: z.infer<typeof formSchema>) {
        console.log(data)
    }

    return (
        <PageLayout>
            <PageLayoutHeader>
                <CustomBreadcrumb items={breadcrumbItems} />
                <div className="flex items-center gap-2">
                    <Button size='sm' variant='secondary'>Preview</Button>
                    <Button size='sm'>Publish</Button>
                </div>
            </PageLayoutHeader>
            <div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/3 space-y-4">
                        <FormFieldComponent name="title" label="Title" placeholder="Enter Title" control={form.control} />
                        <FormFieldComponent name="content" label="Blog Content" placeholder="Enter Blog Content" control={form.control} render={({ field }) => (
                            <Tiptap content={field.value} onChange={field.onChange} />
                        )} />
                        <Button type="submit">Submit</Button>
                    </form>
                </Form>
            </div>
        </PageLayout>
    )
}