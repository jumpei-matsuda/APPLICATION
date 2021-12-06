/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control, UseFormRegisterReturn, DeepMap, DeepPartial, FieldError } from 'react-hook-form';
import { Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { InputForm, MasterItem } from 'utils/constants/commonConstant';

import ErrorText from './ErrorText';

export type InputSelectProps = {
  name: keyof InputForm;
  title: string;
  itemList: MasterItem[],
  control: Control<Partial<InputForm>>;
  register?: UseFormRegisterReturn
  errors?: DeepMap<DeepPartial<InputForm>, FieldError>
};

const InputSelect: React.FC<InputSelectProps> = (props) => {
  const {
    name,
    title,
    itemList,
    control,
    register,
    errors,
    ...rest
  } = props;

  const errorMessage = (errors && errors[name]?.type === "required") ? `※${title}は入力必須です。` : '';

  return (
    <Box sx={{
      width: "100%",
      marginTop: "8px",
      marginBottom: "8px",
      maxWidth: "20rem",
    }}>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <FormControl fullWidth>
            <InputLabel shrink>{title}</InputLabel>
            <Select
              margin="dense"
              label={title}
              fullWidth
              defaultValue={0}
              {...register}
              {...field}
            >
              {itemList.map((item) => (
                <MenuItem key={item.id} value={item.id}>{item.value}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        {...rest}
      />
      < ErrorText text={errorMessage} />
    </Box >
  )
};

export default InputSelect;
