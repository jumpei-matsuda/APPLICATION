import { UseFormHandleSubmit } from 'react-hook-form';
import { styled } from '@mui/material/styles';
import CustomButton from 'components/CustomButton/CustomButton';

import { InputForm } from 'utils/constants/commonConstant';

type Props = {
  position: 'left' | 'center' | 'right' | undefined,
  onSubmit: (data: InputForm) => void,
  handleSubmit: UseFormHandleSubmit<InputForm>,
  buttonLabel: string,
}

type StyledForm = {
  position?: string;
}

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  width: 'fit-content',
  padding: '1rem 2rem',
})

/**
 * Form コンポーネント
 * @returns
 */
const Form: React.FC<Props> = ({ position, onSubmit, handleSubmit, buttonLabel, children }) => (
  <StyledForm sx={{ alignItems: position ?? '' }} onSubmit={handleSubmit(onSubmit)}>
    {children}
    <CustomButton type="submit" variant="contained" fullWidth color="success">
      {buttonLabel}
    </CustomButton>
  </StyledForm>
);

export default Form;
