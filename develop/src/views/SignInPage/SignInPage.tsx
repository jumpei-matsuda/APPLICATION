import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { Box } from '@mui/material';

import foodImage01 from 'assets/images/login_food_01.jpg';

import PageTemplate from 'components/PageTemplate/PageTemplate';
import AlertMessage from 'components/AlertMessage/AlertMessage';

import { InputForm, defaultValues } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';
import { useAuth, AuthInfo } from 'utils/contexts/auth';
import { INFO_SIGN_IN } from 'utils/constants/messageConstant';

import SignInForm from './SignInForm'


/**
 * ログインページ コンポーネント
 * @returns 
 */
const SignInPage: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const history = useHistory();
  const auth = useAuth();
  const { control, register, handleSubmit } = useForm<InputForm>({ defaultValues });

  /**
   * ログイン情報を取得している場合、トップページへ遷移する
   */
  useEffect(() => {
    if (auth.user !== null) {
      history.push("/")
    }
  }, [auth.user, history]);

  /**
   * 送信ボタン押下処理
   * @param data 
   * @returns 
   */
  const onSubmit = (data: InputForm) => {
    if (!data.email || !data.password) {
      setErrorMessage('メールアドレス、パスワードを入力して下さい');

      return;
    }
    // submitする項目を抽出する
    const submitItem: AuthInfo = {
      email: data.email,
      password: data.password,
    }

    void auth.signin(submitItem)
      .then((response) => {
        console.log(response)
        if (response === INFO_SIGN_IN) {
          setSuccessMessage(response);
        } else {
          setErrorMessage(response);
        }
      })
  }

  /**
   * アラート close 処理
   */
  const onClose = () => {
    setSuccessMessage('');
    setErrorMessage('');
  }

  return (
    <PageTemplate>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        padding: '2rem',
        minHeight: '100vh',
        width: '100%',
        animation: '$fadeIn 1s',
        fontFamily: theme.fontFamily.english,
      }}>
        <Box sx={{
          position: 'fixed',
          backgroundImage: `url(${foodImage01})`,
          backgroundSize: "cover",
          minHeight: '100vh',
          width: '100%',
          // backgroundColor: 'rgba(255,255,255,.3)',
          // backgroundBlendMode: 'color',
          zIndex: -1,
        }} />
        <SignInForm handleSubmit={handleSubmit} onSubmit={onSubmit} register={register} control={control} />
      </Box>
      <AlertMessage successMessage={successMessage} errorMessage={errorMessage} onClose={onClose} />
    </PageTemplate>
  );
};

export default SignInPage;
