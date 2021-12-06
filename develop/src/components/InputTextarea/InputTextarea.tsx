/* eslint-disable react/jsx-props-no-spreading */
// import { useMemo } from 'react';
import { Controller, Control, UseFormRegisterReturn, DeepMap, DeepPartial, FieldError } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputForm } from 'utils/constants/commonConstant';

import ErrorText from './ErrorText';

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  control: Control<Partial<InputForm>>;
  register?: UseFormRegisterReturn
  errors?: DeepMap<DeepPartial<InputForm>, FieldError>
  row?: number
};

const InputTextarea: React.FC<InputTextProps> = (props) => {
  const {
    name,
    title,
    control,
    register,
    errors,
    row = 3,
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
            label={title}
            variant="outlined"
            rows={row}
            multiline
            fullWidth
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

export default InputTextarea;
