/* eslint-disable react/jsx-props-no-spreading */
import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/styles';

import { theme } from 'utils/constants/themeConstant';

const StyledButton = styled(Button)<ButtonProps>({
  marginTop: '1rem',
  fontFamily: theme.fontFamily.english,
  textTransform: 'none',
  ':hover': {
    color: theme.palette.success.dark,
    backgroundColor: 'unset',
  }
});

const CustomButton: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <StyledButton {...rest}>
    {children}
  </StyledButton>
)

export default CustomButton;