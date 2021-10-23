export type InputForm = {
  userId?: string;
  password?: string;
  displayName?: string;
};

// InputFormからフォーム項目を設定する
export type SetInputForm<T, K extends keyof T> = Required<Pick<T, K>>;

export const inputType = {
  text: 'text',
  password: 'password',
  displayName: 'text',
} as const;

export const defaultValues = {
  userId: '',
  password: '',
  displayName: '',
};