import { Box } from '@mui/material';
import { theme } from 'utils/constants/themeConstant';


const Footer: React.VFC = () => (
  <Box sx={{
    width: '100%',
    height: '10rem',
    background: theme.palette.success.dark,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  }}>
    <small>&copy; As Engineer All right reserve</small>
  </Box>
);

export default Footer;