/* eslint-disable react/jsx-props-no-spreading */
import { useFormContext } from 'react-hook-form';
import { ProductInputForm, PRODUCT_INPUT_ITEM } from 'utils/constants/commonConstant';
import InputText from 'components/InputText/InputText';
import InputTextarea from 'components/InputTextarea/InputTextarea';
import InputSelect from 'components/InputSelect/InputSelect'
import Spinner from 'components/Spinner/Spinner'

import { useMaster } from 'utils/contexts/master';

const EditProductForm: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  const { control, register } = useFormContext<ProductInputForm>();
  const { productTypeList } = useMaster();

  return (
    <>
      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <InputText
            name={PRODUCT_INPUT_ITEM.PRODUCT_NAME.NAME}
            title={PRODUCT_INPUT_ITEM.PRODUCT_NAME.LABEL}
            control={control}
            type='text'
            register={register(PRODUCT_INPUT_ITEM.PRODUCT_NAME.NAME, {
              required: true,
            })}
          />
          <InputSelect
            name={PRODUCT_INPUT_ITEM.PRODUCT_TYPE.NAME}
            title={PRODUCT_INPUT_ITEM.PRODUCT_TYPE.LABEL}
            itemList={productTypeList}
            control={control}
            register={register(PRODUCT_INPUT_ITEM.PRODUCT_TYPE.NAME, {
              required: true,
            })}
          />
          <InputText
            name={PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.NAME}
            title={PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.LABEL}
            control={control}
            type='number'
            register={register(PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.NAME, {
              required: true,
            })}
          />
          <InputText
            name={PRODUCT_INPUT_ITEM.STOCK_QUANTITY.NAME}
            title={PRODUCT_INPUT_ITEM.STOCK_QUANTITY.LABEL}
            control={control}
            type='number'
            register={register(PRODUCT_INPUT_ITEM.STOCK_QUANTITY.NAME, {
              required: true,
            })}
          />
          <InputTextarea
            name={PRODUCT_INPUT_ITEM.MEMO.NAME}
            title={PRODUCT_INPUT_ITEM.MEMO.LABEL}
            control={control}
          />
        </>
      )}
    </>
  )
}

export default EditProductForm;