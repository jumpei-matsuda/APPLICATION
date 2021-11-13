/* eslint-disable @typescript-eslint/ban-types */
import { Box, Typography } from '@mui/material';
import { UseFormHandleSubmit, UseFormRegister, Control } from 'react-hook-form';

import Form from 'components/Form/Form'
import InputText from 'components/InputText/InputText';

import { INPUT_ITEM, InputForm } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';

type Props = {
  handleSubmit: UseFormHandleSubmit<InputForm>;
  onSubmit: (data: InputForm) => void;
  register: UseFormRegister<InputForm>;
  control: Control<InputForm, object>
}

const SignInForm: React.FC<Props> = ({ handleSubmit, onSubmit, register, control }) => (
  <Box sx={{
    backgroundColor: 'rgba(255,255,255,.8)',
    zIndex: 1,
  }}>
    <Typography variant='h1' sx={{
      textAlign: 'center',
      fontSize: '2rem',
      padding: '.5rem',
      fontFamily: theme.fontFamily.english,
    }}>
      Sign In
    </Typography>
    <Form position="center" handleSubmit={handleSubmit} onSubmit={onSubmit} buttonLabel="Sign In" >
      <InputText
        name={INPUT_ITEM.EMAIL.NAME}
        title={INPUT_ITEM.EMAIL.LABEL}
        control={control}
        type='text'
        register={register(INPUT_ITEM.EMAIL.NAME, {
          required: true,
        })}
      />
      <InputText
        name={INPUT_ITEM.PASSWORD.NAME}
        title={INPUT_ITEM.PASSWORD.LABEL}
        control={control}
        type='password'
        register={register(INPUT_ITEM.PASSWORD.NAME, {
          required: true,
        })}
      />
    </Form>
  </Box>
)

export default SignInForm;