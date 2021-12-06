/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from "react";
import { firebase } from 'utils/configure/firebase';
import { UserInputForm, SetInputForm } from 'utils/constants/commonConstant';
import { useMessage } from "utils/contexts/message";

import * as message from 'utils/constants/messageConstant';

export type AuthInfo = SetInputForm<UserInputForm, 'email' | 'password'>
export type UpdateInfo = Pick<UserInputForm, 'displayName'>

export type UseProvideAuth = {
  user: firebase.User | null,
  signin: (signInfo: AuthInfo) => void,
  signout: () => void,
  signup: (signInfo: AuthInfo) => void,
  updateProfile: (updateInfo: UpdateInfo) => void;
}

const initialState: UseProvideAuth = {
  user: null,
  signin: () => { },
  signout: () => { },
  signup: () => { },
  updateProfile: () => { }
}

/**
 * コンテクストオブジェクト
 */
export const authContext = createContext(initialState);

/**
 * コンテクストオブジェクトの現在値を返すフック
 */
export const useAuth = (): UseProvideAuth => useContext(authContext);

/**
 * コンテキストオブジェクトを更新するフック
 * @returns 
 */
export const useProvideAuth = (): UseProvideAuth => {
  const { setMessage } = useMessage();
  const [user, setUser] = useState<firebase.User | null>(null);

  // サインイン
  const signin = (signInfo: AuthInfo) => (
    firebase.auth().signInWithEmailAndPassword(signInfo.email, signInfo.password)
      .then((response) => {
        setUser(response.user);
        setMessage(message.INFO_USER_SIGN_IN, "success")
      })
      .catch(() => {
        setMessage(message.ERROR_USER_SIGN_IN, "error")
      })
  );

  // サインアウト
  const signout = () => (
    firebase.auth().signOut()
      .then(() => {
        setUser(null);
      })
      .catch(() => {
        setMessage(message.ERROR_COMMON_MESSAGE, "error")
      })
  )

  // サインアップ
  const signup = (signInfo: AuthInfo) => (
    firebase.auth().createUserWithEmailAndPassword(signInfo.email, signInfo.password)
      .then((response) => {
        setUser(response.user);
        setMessage(message.INFO_USER_SIGN_UP, "success")
      })
      .catch(() => {
        setMessage(message.ERROR_USER_SIGN_UP, "error")
      })
  );

  // プロフィール編集
  const updateProfile = (updateInfo: UpdateInfo) => (
    firebase.auth().currentUser?.updateProfile(updateInfo)
      .then(() => {
        console.log('Success!!')
      })
      .catch((error) => {
        console.log(error);
      })
  );

  return {
    user,
    signin,
    signout,
    signup,
    updateProfile,
  }
}
