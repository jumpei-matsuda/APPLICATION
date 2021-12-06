// import { useEffect } from 'react';
import { Box } from '@mui/material';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import AlertMessage from 'components/AlertMessage/AlertMessage';

import { theme } from 'utils/constants/themeConstant';
// import { useMessage } from 'utils/contexts/message';
import { useAuth } from 'utils/contexts/auth';

type Props = {
  header?: boolean,
  footer?: boolean,
}

const PageTemplate: React.FC<Props> = ({ header = false, footer = false, children }) => {
  const auth = useAuth();
  // const { resetMessage } = useMessage();

  // useEffect(() => {
  //   resetMessage();
  // }, []);

  return (
    <Box sx={{ fontFamily: theme.fontFamily.base }}>
      {header && (
        <Header auth={auth} />
      )}
      <Box sx={{
        fontFamily: theme.fontFamily.base,
        '@keyframes fadeIn': theme.animation.fadeIn,
        animation: 'fadeIn .5s'
      }}>
        {children}
        <AlertMessage />
      </Box>
      {footer && (
        <Footer />
      )}
    </Box>
  )
}
export default PageTemplate;