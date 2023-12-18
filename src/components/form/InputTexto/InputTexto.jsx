import TextField from "@mui/material/TextField";
import { useController } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import Stack from "@mui/material/Stack";

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
    <Stack gap={3} direction="column">
      {/*<InputLabel htmlFor={id} variant="outlined">*/}
      {/*  {labelText}*/}
      {/*</InputLabel>*/}

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
    </Stack>
  );
};

export default InputTexto;
