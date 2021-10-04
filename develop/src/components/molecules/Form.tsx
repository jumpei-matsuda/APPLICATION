import { useForm, SubmitHandler } from 'react-hook-form';
import { makeStyles, Button } from '@material-ui/core';
import { inputType, InputForm, defaultValues } from 'constants/commonConstant';

import InputText from 'components/atoms/InputText';
import { theme } from 'constants/themeConstant';

export type InputTextType = {
  id: number,
  name: keyof InputForm,
  title: string,
  type?: keyof typeof inputType,
}

type Props = {
  items: InputTextType[],
  position?: 'left' | 'center' | 'right',
}

const useStyles = (position?: string) => makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    alignItems: position ?? '',
  },
  button: {
    color: 'white',
    background: theme.color.navy,
    margin: '1rem',
    border: `2px solid ${theme.color.navy}`,
    fontFamily: 'serif',
    width: 'fit-content',
    '&:hover': {
      color: theme.color.navy,
    }
  }
});

/**
 * Form コンポーネント
 * @returns
 */
const Form: React.FC<Props> = ({ items, position }) => {

  const { handleSubmit, control } = useForm<InputForm>({ defaultValues });
  const onSubmit: SubmitHandler<InputForm> = (data) => {
    console.log(data);
  };

  const classes = useStyles(position)();

  return (
    <form className={classes.root} onSubmit={handleSubmit(onSubmit)}>
      {items.map((item) => (
        <InputText
          key={item.id}
          name={item.name}
          title={item.title}
          control={control}
          type={item?.type ?? 'text'} />
      ))}
      <Button className={classes.button} type="submit">送信</Button>
    </form>
  );
};

export default Form;
