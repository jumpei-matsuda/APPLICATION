/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from "react";
import { firebase } from 'configure/firebase';
import { InputForm, SetInputForm } from 'constants/commonConstant';

export type AuthInfo = SetInputForm<InputForm, 'userId' | 'password'>
export type UpdateInfo = Pick<InputForm, 'displayName'>

type UseProvideAuth = {
  user: firebase.User | null,
  signin: (signInfo: AuthInfo) => Promise<firebase.User | null> | void,
  signup: (signInfo: AuthInfo) => Promise<firebase.User | null> | void,
  updateProfile: (updateInfo: UpdateInfo) => void;
}

const initialState: UseProvideAuth = {
  user: null,
  signin: () => { },
  signup: () => { },
  updateProfile: () => { }
}

// コンテクストオブジェクト
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
    firebase.auth().signInWithEmailAndPassword(signInfo.userId, signInfo.password)
      .then((response) => {
        setUser(response.user);

        return user;
      }));

  // サインアップ
  const signup = (signInfo: AuthInfo) => (
    firebase.auth().createUserWithEmailAndPassword(signInfo.userId, signInfo.password)
      .then((response) => {
        setUser(response.user);

        return user;
      }));

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
