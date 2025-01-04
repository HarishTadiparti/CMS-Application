import { Control, FieldPath, FieldValues } from "react-hook-form";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { Input } from "../ui/input";
import { emptySpace } from "@/lib/utils";
import { Label } from "../ui/label";

interface FormFieldsComponentProps {
    name: string,
    label?: string,
    required?: boolean,
    placeholder?: string,
    type?: string,
    key?: number | string,
    control: Control<any>,
    render?: ({ field }: { field: any }) => React.ReactNode;
    transform?: (value: string) => string;
    disabled?: boolean
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function FormFieldComponent({ key, control, name, label, required = false, placeholder, type, render, transform, disabled, onBlur }: FormFieldsComponentProps) {
    return (
        <FormField
            key={key}
            control={control}
            name={name}
            render={({ field }) => {
                const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                    const transformedValue = transform ? transform(emptySpace(e.target.value)) : emptySpace(e.target.value);
                    field.onChange(transformedValue);
                };

                const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
                    if (onBlur) {
                        onBlur(e); // Call the passed onBlur handler
                    }
                    field.onBlur(); // Call the default field.onBlur handler
                };

                return (
                    <FormItem>
                        {
                            label && <Label required={required}>{label}</Label>
                        }
                        <FormControl>
                            {
                                render ? render({ field }) : (
                                    <Input key={key}
                                        disabled={disabled}
                                        type={type}
                                        placeholder={placeholder}
                                        {...field}
                                        value={field.value}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                )
                            }
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )
            }} />
    )
}