export type InputForm = {
  email?: string;
  password?: string;
  displayName?: string;
};

export const INPUT_ITEM = {
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

// InputFormからフォーム項目を設定する
export type SetInputForm<T, K extends keyof T> = Required<Pick<T, K>>;

export const inputType = {
  text: 'text',
  password: 'password',
  email: 'email',
} as const;

export const defaultValues = {
  email: '',
  password: '',
  displayName: '',
};