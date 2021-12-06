import { styled } from '@mui/system';

const StyledText = styled('span')({
  color: 'red',
  fontSize: '.5rem',
  textAlign: 'left',
  width: '100%',
  height: '.5rem',
})

type Props = {
  text: string;
};

const ErrorText: React.FC<Props> = ({ text }) => (
  <StyledText>{text}</StyledText>
)

export default ErrorText;