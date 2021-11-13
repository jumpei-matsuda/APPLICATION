/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control, UseFormRegisterReturn, useForm } from 'react-hook-form';
import { TextField } from '@mui/material';
import { InputForm, inputType } from 'utils/constants/commonConstant';

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  type: keyof typeof inputType;
  control: Control<InputForm>;
  register?: UseFormRegisterReturn
};

const InputText: React.FC<InputTextProps> = ({
  name,
  title,
  type,
  control,
  register,
  ...rest
}) => {
  const { formState: { errors } } = useForm<InputForm>();

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
            InputLabelProps={{
              shrink: true,
            }}
            {...register}
            {...field}
          />
        )}
        {...rest}
      />
      {errors[name]?.type === 'required' && `${title}は必須項目です。`}
    </>
  );
};

export default InputText;
