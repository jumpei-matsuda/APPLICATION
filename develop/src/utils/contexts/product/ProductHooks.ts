/* eslint-disable @typescript-eslint/no-empty-function */
import { useState, useEffect, createContext, useContext } from "react";

import { firebase } from 'utils/configure/firebase';
import { ProductInputForm } from 'utils/constants/commonConstant';
import { useAuth } from "utils/contexts/auth";
import { useMaster } from "utils/contexts/master";
import { useMessage } from 'utils/contexts/message'
import { sortArray } from 'utils/logics/commonUtils';
import * as messageConstant from 'utils/constants/messageConstant';


export type UseProvoderProduct = {
  productList: Required<ProductInputForm>[],
  isGet: boolean,
  selectAll: () => void,
  setQuantity: (type: 'add' | 'remove', quantityType: 'requestQuantity' | 'stockQuantity', id: number | undefined) => void,
  addProduct: (product: ProductInputForm) => Promise<void> | undefined,
  updateProduct: (product: ProductInputForm) => void,
  bulkUpdateProducts: () => void,
};

const initialState: UseProvoderProduct = {
  productList: [],
  isGet: false,
  selectAll: () => { },
  setQuantity: () => { },
  addProduct: () => new Promise(() => { }),
  updateProduct: () => { },
  bulkUpdateProducts: () => { },
};

/**
 * コンテクストオブジェクト
 */
export const productContext = createContext(initialState);

/**
 * コンテクストオブジェクトの現在値を返すフック
 */
export const useProduct = (): UseProvoderProduct => useContext(productContext);

/**
 * コンテキストオブジェクトを更新するフック
 * @returns 
 */
export const useProvideProduct = (): UseProvoderProduct => {
  const [productList, setProductList] = useState<Required<ProductInputForm>[]>(initialState.productList);
  const [isGet, setIsGet] = useState(false);
  const { user } = useAuth();
  const uid = user ? user.uid : '';

  const { productTypeList } = useMaster();
  const message = useMessage();

  const collection = uid ? firebase.firestore().collection(`LivingwareManage/userInfo/${uid}`) : null;

  /**
   * 製品情報 取得処理
   * @param uid 
   */
  const selectAll = () => {
    if (collection) {
      setIsGet(false);
      void collection.get()
        .then((response) => {
          if (response) {
            const docList: Required<ProductInputForm>[] = [];
            response.forEach((doc) => {
              const data = doc.data() as ProductInputForm;
              docList.push({
                docId: doc.id,
                id: data.id ?? docList.length,
                productName: data.productName ?? '',
                productType: data.productType ?? 0,
                productTypeName: productTypeList.find((item) => item.id === data.productType)?.value ?? '',
                memo: data.memo ?? '',
                requestQuantity: data.requestQuantity ?? 0,
                stockQuantity: data.stockQuantity ?? 0,
              });
            })
            sortArray(docList, "id");
            setProductList(docList);
            setIsGet(true);
            console.log({ productList: docList })
          }
        })
        .catch(() => {
          throw new Error('ProductTypeList is not exist');
        })
    }
  }

  useEffect(() => {
    // サインアウトしたタイミングで、productListを空にする。
    if (user === null) {
      setProductList([]);
      setIsGet(false);
      // サインインしたタイミングで、productListを取得する。
    } else {
      selectAll();
    }
  }, [user])

  /**
   * 標準数、在庫数 設定関数
   * @param type 
   * @param quantityType 
   * @param id 
   */
  const setQuantity = (type: 'add' | 'remove', quantityType: 'requestQuantity' | 'stockQuantity', id: number | undefined) => {
    if (id === undefined) {
      return;
    }
    let list: Required<ProductInputForm>[] = [];
    if (type === 'add') {
      list = productList.map((item) => id === item.id ? { ...item, [quantityType]: item[quantityType] + 1 } : item);
      setProductList([...list]);
    } else if (type === 'remove') {
      list = productList.map((item) => (id === item.id && item[quantityType] > 0) ? { ...item, [quantityType]: item[quantityType] - 1 } : item);
      setProductList([...list]);
    }
  }

  /**
   * 用品 登録処理
   * @param product 
   * @returns 
   */
  const addProduct = (product: ProductInputForm) => (
    collection?.doc().set({
      id: productList.length,
      productName: product.productName,
      productType: product.productType,
      memo: product.memo,
      requestQuantity: product.requestQuantity,
      stockQuantity: product.stockQuantity,
      insertTime: new Date(),
      updateTime: new Date(),
    })
    // .then(() => {
    //   selectAll();

    //   message.setMessage(messageConstant.INFO_PRODUCT_REGISTER_SUCCESS, 'success');
    // })
    // .catch(() => {
    //   message.setMessage(messageConstant.ERROR_PRODUCT_REGISTER_FAILED, 'error');
    // })
  )

  /**
   * 用品 更新処理
   * @param product 
   * @returns 
   */
  const updateProduct = (product: ProductInputForm) => (
    collection?.doc(product.docId).update({
      productName: product.productName,
      productType: product.productType,
      memo: product.memo,
      requestQuantity: product.requestQuantity,
      stockQuantity: product.stockQuantity,
      updateTime: new Date(),
    })
      .then(() => {
        selectAll();

        message.setMessage(messageConstant.INFO_PRODUCT_UPDATE_SUCCESS, 'success');
      })
      .catch(() => {
        message.setMessage(messageConstant.ERROR_PRODUCT_UPDATE_FAILED, 'error');
      })
  )

  const bulkUpdateProducts = async () => {
    if (collection === null) {
      return;
    }
    const batch = firebase.firestore().batch();
    const docRef = await collection.get();
    docRef.forEach((doc) => {
      const docId = doc.id;
      const updateProductData = productList.find((item) => item.docId === docId);
      if (updateProductData) {
        console.log(updateProductData);
        batch.update(doc.ref, {
          ...updateProductData,
          updateTime: new Date(),
        })
      };
    })

    void batch.commit()
      .then(() => {
        message.setMessage("一括更新に成功しました", "success")
        selectAll();
      })
      .catch(() => {
        message.setMessage("一括登録に失敗しました", "error");
      })
  }

  return {
    productList,
    isGet,
    selectAll,
    setQuantity,
    addProduct,
    updateProduct,
    bulkUpdateProducts,
  };
};
