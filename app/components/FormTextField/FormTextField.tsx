import { ChangeEvent } from "react";

// eslint-disable-next-line import/named
import { TextField, TextFieldProps } from "@mui/material";
import {
  FieldValues,
  UseControllerProps,
  useController,
} from "react-hook-form";

type FormTextFieldProps<T extends FieldValues> = Pick<
  TextFieldProps,
  "helperText" | "InputLabelProps" | "InputProps" | "label"
> &
  Omit<UseControllerProps<T>, "defaultValue" | "disabled" | "shouldUnregister">;

export function FormTextField<T extends FieldValues>({
  control,
  // https://mui.com/material-ui/react-text-field/#helper-text
  helperText = " ",
  // eslint-disable-next-line @typescript-eslint/naming-convention
  InputLabelProps,
  // eslint-disable-next-line @typescript-eslint/naming-convention
  InputProps,
  label,
  name,
  rules,
}: FormTextFieldProps<T>) {
  const {
    field: { onChange, ref, value },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules,
  });

  function handleOnChange({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) {
    onChange(value);
  }

  return (
    <TextField
      error={!!error}
      fullWidth
      helperText={error?.message ?? helperText}
      InputLabelProps={InputLabelProps}
      InputProps={InputProps}
      inputRef={ref}
      label={label}
      name={name}
      onChange={handleOnChange}
      required={!!rules?.required}
      type="text"
      value={value}
    />
  );
}
