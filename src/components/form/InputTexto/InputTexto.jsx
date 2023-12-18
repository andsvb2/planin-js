import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";

const InputTexto = ({ control, name, rules, ...rest }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { ...rules },
  });

  const id = rest.id ? rest.id : name;
  const labelText = rest.tag ? rest.tag : rest.label;

  return (
    <TextField
      {...rest}
      id={id}
      variant="outlined"
      onChange={field.onChange} // send value to hook form
      onBlur={field.onBlur} // notify when input is touched/blur
      value={field.value} // input value
      name={field.name} // send down the input name
      inputRef={field.ref} // send input ref, so we can focus on input when error appear
    />
  );
};

export default InputTexto;
