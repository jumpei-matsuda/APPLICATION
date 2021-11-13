import { useHistory } from 'react-router';
import { Box } from '@mui/material';

import { theme } from 'utils/constants/themeConstant';
import HeaderButton from './HeaderButton'

export type HeaderProps = {
  isResponsible: boolean;
  header?: boolean;
};

const Header: React.FC = () => {
  const history = useHistory();

  const movePage = (url = '/') => {
    history.push(url);
  };

  return (
    <>
      <Box sx={{
        position: 'static',
        background: theme.palette.success.dark
      }}>
        <Box display='flex' justifyContent="end" padding='.25rem'>
          <Box >
            <HeaderButton onClick={() => movePage('/')}>トップページ</HeaderButton>
            <HeaderButton onClick={() => movePage('/login')}>ログイン</HeaderButton>
            <HeaderButton onClick={() => movePage('/edit')}>プロフィール編集</HeaderButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
