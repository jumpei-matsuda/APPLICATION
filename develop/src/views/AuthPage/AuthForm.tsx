import { useFormContext } from 'react-hook-form';
import { UserInputForm, USER_INPUT_ITEM } from 'utils/constants/commonConstant';

import InputText from 'components/InputText/InputText';


const AuthForm: React.FC = () => {
  const { control, register, formState: { errors } } = useFormContext<UserInputForm>();

  return (
    <>
      <InputText
        name={USER_INPUT_ITEM.EMAIL.NAME}
        title={USER_INPUT_ITEM.EMAIL.LABEL}
        control={control}
        type='text'
        register={register(USER_INPUT_ITEM.EMAIL.NAME, {
          required: true,
        })}
        errors={errors}
      />
      <InputText
        name={USER_INPUT_ITEM.PASSWORD.NAME}
        title={USER_INPUT_ITEM.PASSWORD.LABEL}
        control={control}
        type='password'
        register={register(USER_INPUT_ITEM.PASSWORD.NAME, {
          required: true,
        })}
        errors={errors}
      />
    </>
  )
}

export default AuthForm;