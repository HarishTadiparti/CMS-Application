'use client'
import { Control } from "react-hook-form"
import { Input } from "../ui/input"
import { Textarea } from "../ui/textarea"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"

interface FieldDataType {
    id: string
    name: string
    label: string
    placeholder: string
    element: 'Input' | 'Textarea'
}

interface FormFieldsType {
    Input: React.FC<ElementProps>;
    Textarea: React.FC<ElementProps>;
}

interface ElementProps {
    fieldData: FieldDataType
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface DynamicFormElementProps {
    fieldData: FieldDataType,
    control: Control<any>
}

const formFields: FormFieldsType = {
    Input: ({ fieldData, value, onChange }) => <Input placeholder={fieldData.placeholder} value={value} onChange={onChange} />,
    Textarea: ({ fieldData, value, onChange }) => <Textarea placeholder={fieldData.placeholder} value={value} onChange={onChange} />
}

export default function DynamicFormElement({ fieldData, control }: DynamicFormElementProps) {
    const Element = formFields[fieldData.element]

    return Element ? (
        <FormField
            control={control}
            name={fieldData.name}
            render={({ field }) => (
                <FormItem>
                    <FormLabel>{fieldData.label}</FormLabel>
                    <FormControl>
                        <Element fieldData={fieldData} value={field.value} onChange={field.onChange} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
            )}
        />
    ) : null
}