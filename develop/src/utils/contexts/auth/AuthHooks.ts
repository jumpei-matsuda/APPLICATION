/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from "react";
import { firebase } from 'utils/configure/firebase';
import { InputForm, SetInputForm } from 'utils/constants/commonConstant';
import { INFO_SIGN_IN, ERROR_SIGN_IN } from 'utils/constants/messageConstant';

export type AuthInfo = SetInputForm<InputForm, 'email' | 'password'>
export type UpdateInfo = Pick<InputForm, 'displayName'>

type UseProvideAuth = {
  user: firebase.User | null,
  signin: (signInfo: AuthInfo) => Promise<string>,
  signup: (signInfo: AuthInfo) => Promise<string>,
  updateProfile: (updateInfo: UpdateInfo) => void;
}

const initialState: UseProvideAuth = {
  user: null,
  signin: () => new Promise(() => ''),
  signup: () => new Promise(() => ''),
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
  const [user, setUser] = useState<firebase.User | null>(null);

  // サインイン
  const signin = (signInfo: AuthInfo) => (
    firebase.auth().signInWithEmailAndPassword(signInfo.email, signInfo.password)
      .then((response) => {
        setUser(response.user);
        console.log({ user: response.user });

        return INFO_SIGN_IN;
      })
      .catch((error: unknown) => {
        console.log({ error });

        return ERROR_SIGN_IN;
      })
  );

  // サインアップ
  const signup = (signInfo: AuthInfo) => (
    firebase.auth().createUserWithEmailAndPassword(signInfo.email, signInfo.password)
      .then((response) => {
        setUser(response.user);
        console.log(response.user);

        return INFO_SIGN_IN;
      })
      .catch((error: unknown) => {
        console.log({ error });

        return ERROR_SIGN_IN;
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
    signup,
    updateProfile,
  }
}
