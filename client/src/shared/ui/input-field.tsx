import {
  Field,
  FieldDescription,
  FieldError,
  FieldLabel
} from "@/shared/ui/field"
import { Input } from "@/shared/ui/input"
import {
  type Control,
  Controller,
  type FieldPath,
  type FieldValues,
} from "react-hook-form"

interface InputFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
> extends Omit<React.ComponentProps<typeof Input>, "name"> {
  control: Control<TFieldValues>
  name: TName
  label: string
  description?: string
}

export function InputField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>({
  control,
  name,
  label,
  description,
  ...props
}: InputFieldProps<TFieldValues, TName>) {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field, fieldState }) => (
        <Field data-invalid={fieldState.invalid}>
          <FieldLabel htmlFor={field.name}>{label}</FieldLabel>
          <Input
            {...field}
            {...props}
            id={field.name}
            aria-invalid={fieldState.invalid}
            onChange={e => {
              if (props.type === "number") {
                const rawValue = e.target.value
                field.onChange(rawValue === "" ? undefined : Number(rawValue))
              } else {
                field.onChange(e)
              }
            }}
          />
          {description && <FieldDescription>{description}</FieldDescription>}
          {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
        </Field>
      )}
    />
  )
}

