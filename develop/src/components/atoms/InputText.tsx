/* eslint-disable react/jsx-props-no-spreading */
import { Controller, Control } from 'react-hook-form';
import { TextField, makeStyles } from '@material-ui/core';
import { InputForm, inputType } from 'constants/commonConstant';

const useStyles = makeStyles(() => ({
  text: {
    display: 'block',
    maxWidth: '20rem',
    margin: '.5rem 1rem',
  },
  textarea: {
    display: 'block',
    maxWidth: '30rem',
    margin: '1rem',
  }
}));

export type InputTextProps = {
  name: keyof InputForm;
  title: string;
  type: keyof typeof inputType;
  control: Control<InputForm>;
};

const InputText: React.FC<InputTextProps> = ({
  name,
  title,
  type,
  control,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          className={classes.text}
          type={type}
          label={title}
          variant="outlined"
          InputLabelProps={{
            shrink: true,
          }}
          {...field}
        />
      )}
      {...rest}
    />
  );
};

export default InputText;
