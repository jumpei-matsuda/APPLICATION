/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles, Button } from '@material-ui/core';
import { InputForm, defaultValues } from 'constants/commonConstant';

import InputText from 'components/atoms/InputText';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    padding: '2rem 1rem',
  },
  text: {
    border: 'solid',
  },
}));

const Form: React.FC = () => {
  const classes = useStyles();

  const { handleSubmit, control } = useForm<InputForm>({ defaultValues });
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      <InputText name="name" title="お名前" control={control} />
      <InputText name="kana" title="かな" control={control} />
      <InputText name="mail" title="メールアドレス" control={control} />
      <InputText name="tel" title="電話番号" control={control} />
      <InputText name="content" title="お問い合わせ内容" control={control} />
      <Button type="submit">送信</Button>
    </form>
  );
};

export default Form;
