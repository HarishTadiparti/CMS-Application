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
import { defineStepper } from "@stepperize/react";
import { z } from "zod"
import Stepper from "@/components/custom/stepper";
import { ThemeModeToggle } from "@/components/custom/theme-toggle";
import ProfileDropdown from "@/components/custom/profile-dropdown";
import NotificationPopover from "@/components/custom/notification-popover";

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
const { useStepper } = defineStepper(
    { id: "step-1", title: "Create Collection", description: "First step" },
    { id: "step-2", title: "Choose Template", description: "Second step" },
    { id: "step-3", title: "Customize Fields", description: "Third step" }
);

export default function CreateCMSPage() {

    const stepper = useStepper();
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
        <div className="space-y-4">
            <div className="pt-8">
                <Stepper stepper={stepper} />
            </div>
            <div className="px-4 py-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/4 mt-3 space-y-4">
                        <FormFieldComponent name="name" label="CMS Name" placeholder="Enter CMS Name" control={form.control} />
                        <FormFieldComponent name="url" label="CMS URL" placeholder="Enter CMS URL" control={form.control} />
                        <div className="flex items-center justify-end">
                            <Button type="submit">Submit</Button>
                        </div>
                    </form>
                </Form>
            </div>
        </div>
    )
}