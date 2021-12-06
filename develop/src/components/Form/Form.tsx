/* eslint-disable react/jsx-props-no-spreading */
import { useForm, FormProvider } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import CustomButton from 'components/CustomButton/CustomButton';

import { InputForm, UserInputForm, ProductInputForm } from 'utils/constants/commonConstant';

type Props = {
  position: 'left' | 'center' | 'right' | undefined,
  defaultValues: Partial<UserInputForm & ProductInputForm>,
  onSubmit: (data: UserInputForm & ProductInputForm) => void,
  buttonLabel: string,
}

type StyledForm = {
  position?: string;
}

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem 2rem',
})

/**
 * Form コンポーネント
 * @returns
 */
const Form: React.FC<Props> = ({ position, onSubmit, defaultValues, buttonLabel, children }) => {
  const methods = useForm<InputForm>({ defaultValues });
  const { handleSubmit } = methods;

  return (
    <FormProvider {...methods}>
      <StyledForm sx={{ alignItems: position ?? '' }} onSubmit={handleSubmit(onSubmit)}>
        {children}
        <CustomButton type="submit" variant="contained" fullWidth color="success">
          {buttonLabel}
        </CustomButton>
      </StyledForm>
    </FormProvider>
  )
};

export default Form;
