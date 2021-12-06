/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, createContext, useContext } from "react";

type UseMessage = {
  message: string,
  setMessage: (msg: string, resultType: 'success' | 'error') => void,
  result: 'success' | 'error' | undefined,
  resetMessage: () => void,
  isOpen: boolean,
  onClose: () => void,
}

const initialConext = {
  message: '',
  setMessage: () => { },
  resetMessage: () => { },
  result: undefined,
  isOpen: false,
  onClose: () => { }
}

/**
 * コンテクストオブジェクト
 */
export const messageContext = createContext<UseMessage>(initialConext);

/**
 * コンテクストオブジェクトの現在値を返すフック
 */
export const useMessage = (): UseMessage => useContext(messageContext);


export const useProviderMessage = (): UseMessage => {
  const [dispMessage, setDispMessage] = useState('');
  const [result, setResult] = useState<'success' | 'error' | undefined>(undefined);
  const [isOpen, setIsOpen] = useState(false);

  /**
   * アラート close 処理
   */
  const resetMessage = () => {
    setDispMessage('');
    setResult(undefined);
    setIsOpen(false);
  }

  /**
   * メッセージ設定処理
   * @param msg 
   * @param result 
   */
  const setMessage = (msg: string, resultType: 'success' | 'error') => {
    setDispMessage(msg);
    setIsOpen(true);
    if (resultType === 'success') {
      setResult('success');
    } else if (resultType === 'error') {
      setResult('error');
    }
  }

  return {
    message: dispMessage,
    setMessage,
    result,
    resetMessage,
    isOpen,
    onClose: () => setIsOpen(false)
  }
}

