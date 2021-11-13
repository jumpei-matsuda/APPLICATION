import { Box } from '@mui/material';
// import { Theme } from 'constants/themeConstant';

import PageTemplate from 'components/PageTemplate/PageTemplate';

const TopPage: React.FC = () => (
  <PageTemplate header footer>
    <Box sx={{
      display: 'flex',
      height: '20vh',
      flexDirection: 'column',
    }} />
  </PageTemplate>
)

export default TopPage;