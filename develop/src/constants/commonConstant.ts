export type InputForm = {
  userId: string;
  password: string;
};

export const inputType = {
  text: 'text',
  password: 'password',
} as const;

export const defaultValues = {
  userId: '',
  password: '',
};