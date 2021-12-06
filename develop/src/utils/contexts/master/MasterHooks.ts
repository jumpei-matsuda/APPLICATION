/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect, createContext, useContext } from "react";

import { firebase, firestore } from 'utils/configure/firebase';
import { MasterItem } from 'utils/constants/commonConstant';
import { useAuth } from "utils/contexts/auth";
import { useMessage } from "utils/contexts/message";

import { ERROR_COMMON_MESSAGE } from "utils/constants/messageConstant";

import { productTypeList as MockList } from 'utils/constants/mockConstamt';

export type UseMaster = {
  productTypeList: MasterItem[],
  addProductType: (val: string) => void;
};

const initialState: UseMaster = {
  productTypeList: MockList,
  addProductType: () => { },
};

/**
 * コンテクストオブジェクト
 */
export const masterContext = createContext(initialState);

/**
 * コンテクストオブジェクトの現在値を返すフック
 */
export const useMaster = (): UseMaster => useContext(masterContext);

/**
 * コンテキストオブジェクトを更新するフック
 * @returns 
 */
export const useProvideMaster = (): UseMaster => {
  const [productTypeList, setProductTypeList] = useState<MasterItem[]>(initialState.productTypeList);
  const { user } = useAuth();
  const { setMessage } = useMessage()
  const productTypeDocRef = firestore.collection('LivingwareManage').doc('typeMaster');

  useEffect(() => {
    // const getProductTypeList = async (): Promise<void> => {
    //   try {
    //     const docData = await firestore.collection('LivingwareManage').doc('typeMaster').get();
    //     const typeList = docData.data()?.typeList as MasterItem[];
    //     setProductTypeList(typeList);
    //   } catch (err) {
    //     setMessage(ERROR_COMMON_MESSAGE, 'error')
    //   }
    // }

    // void getProductTypeList();

    if (user !== null) {
      void productTypeDocRef.get()
        .then((response) => {
          if (response.data()) {
            const docList = response.data()?.typeList as MasterItem[];
            setProductTypeList(docList);
            console.log({ typeList: docList })
          }
        })
        .catch(() => {
          setMessage(ERROR_COMMON_MESSAGE, 'error')
        })
    }
  }, [user]);

  const addProductType = (value: string) => {
    productTypeDocRef.update({
      typeList: firebase.firestore.FieldValue.arrayUnion(value)
    })
      .then(() => {
        setMessage("更新しました", "success")
      })
      .catch(() => {
        setMessage("エラー", "error")
      })
  }

  return {
    productTypeList,
    addProductType,
  };
};
