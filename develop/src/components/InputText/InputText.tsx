/* eslint-disable react/jsx-props-no-spreading */
// import { useMemo } from 'react';
import { Controller, Control, UseFormRegisterReturn, DeepMap, DeepPartial, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputForm, inputType } from 'utils/constants/commonConstant';

import ErrorText from './ErrorText';

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  type: keyof typeof inputType;
  control: Control<Partial<InputForm>>;
  register?: UseFormRegisterReturn
  errors?: DeepMap<DeepPartial<InputForm>, FieldError>
};

const InputText: React.FC<InputTextProps> = (props) => {
  const {
    name,
    title,
    type,
    control,
    register,
    errors,
    ...rest
  } = props;

  const errorMessage = (errors && errors[name]?.type === "required") ? `※${title}は入力必須です。` : '';

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <TextField
            margin="normal"
            type={type}
            label={title}
            variant="outlined"
            sx={{
              maxWidth: type === "number" ? "7rem" : "20rem",
            }}
            InputLabelProps={{
              shrink: true,
            }}
            {...register}
            {...field}
          />
        )}
        {...rest}
      />
      <ErrorText text={errorMessage} />
    </>
  )
};

export default InputText;
