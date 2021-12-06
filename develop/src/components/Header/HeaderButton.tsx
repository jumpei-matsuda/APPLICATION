/* eslint-disable react/jsx-props-no-spreading */
import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { theme } from 'utils/constants/themeConstant';

const StyledButton = styled(Button)<ButtonProps>({
  color: 'white',
  border: 'none',
  margin: '0 1rem',
  fontSize: '.75rem',
  fontWeight: 900,
  fontFamily: 'unset',
  textTransform: 'none',
  ':hover': {
    background: theme.palette.success.main,
  }
})

const HeaderButton: React.FC<ButtonProps> = ({ onClick, children, ...rest }) => (
  <StyledButton type='button' onClick={onClick} {...rest}>
    {children}
  </StyledButton>
)

export default HeaderButton;
