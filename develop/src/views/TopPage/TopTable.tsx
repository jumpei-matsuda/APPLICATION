import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { styled } from '@mui/styles';
import { useHistory } from 'react-router-dom';

import AddRemoveButton from 'components/AddRemoveButton/AddRemoveButton';
import CustomButton from 'components/CustomButton/CustomButton'
import Spinner from 'components/Spinner/Spinner';
import { UseProvoderProduct } from 'utils/contexts/product/ProductHooks'
import { PRODUCT_INPUT_ITEM, URL_ITEM } from 'utils/constants/commonConstant';
import { theme } from 'utils/constants/themeConstant';

const StyledSpan = styled("span")({
  padding: "0 1rem",
})

const TopTable: React.FC<{ product: UseProvoderProduct; }> = ({ product }) => {
  const { productList, setQuantity, isGet, bulkUpdateProducts } = product;
  const history = useHistory();

  /**
   * 在庫数 増減処理
   * @param id 
   */
  const onClickAddStock = (id: number) => {
    setQuantity('add', 'stockQuantity', id)
  }
  const onClickRemoveStock = (id: number) => {
    setQuantity('remove', 'stockQuantity', id)
  }

  const onClickMoveEdit = (docId: string) => {
    history.push({
      pathname: URL_ITEM.EDIT_PRODUCT,
      state: {
        docId
      }
    })
  }

  return (
    <>
      {!isGet ? (
        <Spinner />
      ) : (
        <Box sx={{
          fontFamily: theme.fontFamily.base,
          '@keyframes fadeIn': theme.animation.fadeIn,
          animation: 'fadeIn .5s'
        }}>
          <Box marginBottom="1rem">
            <CustomButton variant="contained" color="success" onClick={bulkUpdateProducts} > 一括更新</CustomButton>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ width: "5%" }} />
                  <TableCell sx={{ width: "25%" }}>{PRODUCT_INPUT_ITEM.PRODUCT_NAME.LABEL}</TableCell>
                  <TableCell sx={{ width: "15%" }}>{PRODUCT_INPUT_ITEM.PRODUCT_TYPE.LABEL}</TableCell>
                  <TableCell align="center" sx={{ width: "15%" }}>{PRODUCT_INPUT_ITEM.REQUEST_QUANTITY.LABEL}</TableCell>
                  <TableCell align="center" sx={{ width: "15%" }}>{PRODUCT_INPUT_ITEM.STOCK_QUANTITY.LABEL}</TableCell>
                  <TableCell sx={{ width: "25%" }}>{PRODUCT_INPUT_ITEM.MEMO.LABEL}</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {(Array.isArray(productList) && productList.length > 0) && (
                  productList.map((item) => (
                    <TableRow key={item.id}>
                      <TableCell>
                        <Button variant="outlined" color="success" onClick={() => onClickMoveEdit(item.docId)}>編集</Button>
                      </TableCell>
                      <TableCell>{item.productName}</TableCell>
                      <TableCell>{item.productTypeName}</TableCell>
                      <TableCell align="center">{item.requestQuantity}</TableCell>
                      <TableCell align="center">
                        <AddRemoveButton
                          onClickAdd={() => onClickAddStock(item.id)}
                          onClickRemove={() => onClickRemoveStock(item.id)}
                        >
                          <StyledSpan>
                            {item.stockQuantity}
                          </StyledSpan>
                        </AddRemoveButton>
                      </TableCell>
                      <TableCell>{item.memo}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  )
}

export default TopTable;