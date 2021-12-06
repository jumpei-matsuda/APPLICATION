import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress';
import { Box } from '@mui/material';
import { styled } from '@mui/styles';

import { theme } from 'utils/constants/themeConstant';

const StyledCircularProgress = styled(CircularProgress)<CircularProgressProps>({
  color: theme.palette.warning.light,
});

const Spinner: React.VFC = () => (
  <Box display="flex" justifyContent="center" margin="30px 0">
    <StyledCircularProgress size={150} />
  </Box>
)

export default Spinner;