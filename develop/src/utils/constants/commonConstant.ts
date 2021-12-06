/** **********
 * 共通
 ********** */
// InputFormからフォーム項目を設定する
export type SetInputForm<T, K extends keyof T> = Required<Pick<T, K>>;

export type MasterItem = {
  id: number,
  value: string,
}

// input typeプロパティ
export const inputType = {
  text: 'text',
  number: 'number',
  textarea: "textarea",
  password: 'password',
  email: 'email',
} as const;

export const URL_ITEM = {
  TOP: '/',
  SIGNIN: '/signin',
  EDIT_PROFILE: '/editProfile',
  EDIT_PRODUCT: '/editProduct',
  REGISTER: '/register',
}

export const PAGE_ITEM_LABEL = {
  TOP: 'トップぺージ',
  SIGNIN: 'サインイン',
  SIGNUP: 'サインアップ',
  SIGNOUT: 'サインアウト',
  EDIT_PROFILE: 'プロフォール編集',
  REGISTER: '製品登録',
}

export type InputForm = UserInputForm & ProductInputForm;

/** **********
 * ユーザー情報
 ********** */
export type UserInputForm = {
  email?: string,
  password?: string,
  displayName?: string,
};

export const USER_INPUT_ITEM = {
  EMAIL: {
    NAME: "email",
    LABEL: "メールアドレス"
  },
  PASSWORD: {
    NAME: "password",
    LABEL: "パスワード"
  },
  DISPLAY_NAME: {
    NAME: "displayName",
    LABEL: "名前"
  },
} as const;

export const defaultUserValues = {
  email: '',
  password: '',
  displayName: '',
};

/** **********
 * 商品情報
 ********** */
export type ProductInputForm = {
  docId?: string,
  id?: number,
  productName?: string,
  productType?: number,
  productTypeName?: string,
  memo?: string,
  requestQuantity?: number,
  stockQuantity?: number,
};

export const PRODUCT_INPUT_ITEM = {
  PRODUCT_NAME: {
    NAME: "productName",
    LABEL: "商品名"
  },
  PRODUCT_TYPE: {
    NAME: "productType",
    LABEL: "種類"
  },
  REQUEST_QUANTITY: {
    NAME: "requestQuantity",
    LABEL: "必要数"
  },
  STOCK_QUANTITY: {
    NAME: "stockQuantity",
    LABEL: "在庫数"
  },
  MEMO: {
    NAME: "memo",
    LABEL: "備考"
  },
} as const;

export const defaultProductValues = {
  productName: "",
  productType: 0,
  productTypeName: "",
  memo: "",
  requestQuantity: 0,
  stockQuantity: 0,
};