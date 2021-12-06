import { messageContext, useProviderMessage } from './MessageHooks';

const MasterProvider: React.FC = (props) => {
  const { children } = props;
  const message = useProviderMessage();

  return (
    <messageContext.Provider value={message} >
      {children}
    </messageContext.Provider>
  )
};
export default MasterProvider;
