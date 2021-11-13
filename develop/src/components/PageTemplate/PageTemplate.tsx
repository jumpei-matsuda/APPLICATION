import { Box } from '@mui/material';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { theme } from 'utils/constants/themeConstant';

type Props = {
  header?: boolean,
  footer?: boolean,
}

const PageTemplate: React.FC<Props> = ({ header = false, footer = false, children }) => (
  <Box sx={{ fontFamily: theme.fontFamily.base }}>
    {header && (
      <Header />
    )}
    {children}
    {footer && (
      <Footer />
    )}
  </Box>
)
export default PageTemplate;