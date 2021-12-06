import { useHistory } from 'react-router';
import { Box } from '@mui/material';

import { URL_ITEM, PAGE_ITEM_LABEL } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { UseProvideAuth } from 'utils/contexts/auth';

import HeaderButton from './HeaderButton'

const Header: React.FC<{ auth: UseProvideAuth }> = ({ auth }) => {
  const history = useHistory();
  const { user, signout } = auth;

  const movePage = (url = '/') => {
    history.push(url);
  };

  const onClickSignOut = () => {
    if (user?.uid) {
      signout();
    }
  }

  return (
    <>
      <Box sx={{
        position: 'static',
        background: theme.palette.success.dark
      }}>
        <Box display='flex' justifyContent="end" padding='.25rem'>
          <Box >
            <HeaderButton onClick={() => movePage(URL_ITEM.TOP)}>{PAGE_ITEM_LABEL.TOP}</HeaderButton>
            <HeaderButton onClick={() => movePage(URL_ITEM.EDIT_PROFILE)}>プロフィール編集</HeaderButton>
            <HeaderButton onClick={() => movePage(URL_ITEM.REGISTER)}>用品登録</HeaderButton>
            <HeaderButton onClick={onClickSignOut}>{user?.uid ? PAGE_ITEM_LABEL.SIGNOUT : PAGE_ITEM_LABEL.SIGNIN}</HeaderButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Header;
