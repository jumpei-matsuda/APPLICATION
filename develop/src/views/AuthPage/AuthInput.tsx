import { useState } from 'react';
import { Box, Typography, InputLabel } from '@mui/material';
import { theme } from 'utils/constants/themeConstant';
import { UserInputForm, defaultUserValues } from 'utils/constants/commonConstant';
import { UseProvideAuth, AuthInfo } from 'utils/contexts/auth';
import { useMessage } from 'utils/contexts/message';

import CustomButton from 'components/CustomButton/CustomButton';
import Form from 'components/Form/Form';
import AuthForm from './AuthForm'

type Props = {
  auth: UseProvideAuth,
}
const AuthInput: React.FC<Props> = ({ auth }) => {
  const [authType, setAuthType] = useState('signin')
  const { setMessage } = useMessage();

  let title = 'Sign In';
  let buttonLabel = 'Sign Up'
  let discription = '↓登録はこちら'
  if (authType === 'signin') {
    title = 'Sign In';
    buttonLabel = 'Sign Up';
    discription = "↓登録はこちら";
  } else if (authType === 'signup') {
    title = 'Sign Up';
    buttonLabel = 'Sign In';
    discription = "↓サインインはこちら";
  }

  /**
   * 送信ボタン押下処理
   * @param data 
   * @returns 
   */
  const onSubmit = (data: UserInputForm) => {
    if (!data.email || !data.password) {
      setMessage('メールアドレス、パスワードを入力して下さい', "error");

      return;
    }
    // submitする項目を抽出する
    const submitItem: AuthInfo = {
      email: data.email,
      password: data.password,
    }
    if (authType === 'signin') {
      void auth.signin(submitItem);
    } else if (authType === 'signup') {
      void auth.signup(submitItem);
    } else {
      setMessage('エラーが発生しました', 'error')
    }
  }

  return (
    <Box sx={{
      backgroundColor: 'rgba(255,255,255,.8)',
      zIndex: 1,
    }}>
      <Typography variant='h1' sx={{
        textAlign: 'center',
        fontSize: '2rem',
        padding: '.5rem',
        fontFamily: theme.fontFamily.english,
      }}>
        {title}
      </Typography>
      <Form position="center" onSubmit={onSubmit} defaultValues={defaultUserValues} buttonLabel={title} >
        <AuthForm />
      </Form>
      <Box textAlign="center" margin="0 2rem 1rem">
        <InputLabel margin="dense">
          {discription}
        </InputLabel>
        <CustomButton variant="outlined" fullWidth color="success" onClick={() => setAuthType(authType === "signin" ? "signup" : "signin")} sx={{ margin: 0 }}>
          {buttonLabel}
        </CustomButton>
      </Box>
    </Box>
  )
}

export default AuthInput;