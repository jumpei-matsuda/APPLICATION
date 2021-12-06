import { MasterItem } from './commonConstant';

export const productList = [{
  docId: 'demo',
  id: 0,
  productName: 'トップNANOXスーパー',
  memo: '紫のやつ',
  productType: 1,
  productTypeName: '洗濯用洗剤',
  requestQuantity: 1,
  stockQuantity: 1
}]

export const productTypeList: MasterItem[] = [{
  id: 1,
  value: '洗濯用洗剤'
}, {
  id: 2,
  value: '洗濯用漂白剤'
}, {
  id: 3,
  value: '柔軟剤'
}]
