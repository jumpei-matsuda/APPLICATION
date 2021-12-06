import { productContext, useProvideProduct } from './ProductHooks';

const ProductProvider: React.FC = ({ children }) => {
  const product = useProvideProduct();

  return (
    <productContext.Provider value={product} >
      {children}
    </productContext.Provider>
  )
};
export default ProductProvider;
