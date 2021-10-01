export type InputForm = {
  name: string;
  kana: string;
  mail: string;
  tel: string;
  type: number;
  content: string;
};

export const defaultValues = {
  name: '',
  kana: '',
  mail: '',
  tel: '',
  content: '',
};
