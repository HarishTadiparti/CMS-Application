'use client'
import FormFieldComponent from "@/components/custom/formfield-component";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod"
import { CircleCheck } from "lucide-react";
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
    name: z.string({ required_error: 'required' }).min(1, 'Required'),
    url: z.string({ required_error: 'required' }).min(1, 'Required')
})
export default function CollectionDetailsForm() {
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

    const handleOnChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        form.setValue('name', e.target.value)
        const url = e.target.value.toLowerCase().replace(/ /g, '-')
        form.setValue('url', url)
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto w-2/4 space-y-4">
                <FormFieldComponent name="name" label="CMS Name" required control={form.control}
                    render={({ field }) => (
                        <Input value={field.value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleOnChangeName(e)} placeholder="Enter CMS Name" />
                    )}
                />
                <FormFieldComponent name="url" control={form.control}
                    render={({ field }) => (
                        <div>
                            <div className="h-5 mb-2 flex items-center justify-between">
                                <Label required>CMS URL</Label>
                                {form.getValues('url') !== '' && <div className="flex items-center gap-1">
                                    <CircleCheck className="w-5 h-5 fill-[#23a26d] text-white" />
                                    <p className="text-sm text-[#23a26d]">Available</p>
                                </div>}
                            </div>
                            <Input disabled value={field.value} onChange={field.onChange} placeholder="Enter CMS URL" />
                        </div>
                    )}
                />
                <div className="flex items-center justify-end gap-2">
                    <Button type="submit" variant='secondary'>Cancel</Button>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </Form>
    )
}