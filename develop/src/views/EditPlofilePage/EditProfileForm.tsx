import { useFormContext } from 'react-hook-form';
import { UserInputForm, USER_INPUT_ITEM } from 'utils/constants/commonConstant';
import InputText from 'components/InputText/InputText';

const EditProfileForm: React.FC = () => {
  const { control, register } = useFormContext<UserInputForm>();

  return (
    <>
      <InputText
        name={USER_INPUT_ITEM.DISPLAY_NAME.NAME}
        title={USER_INPUT_ITEM.DISPLAY_NAME.LABEL}
        control={control}
        type='text'
        register={register(USER_INPUT_ITEM.DISPLAY_NAME.NAME, {
          required: true,
        })}
      />
    </>
  )
}

export default EditProfileForm;