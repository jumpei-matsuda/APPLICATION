import { masterContext, useProvideMaster } from './MasterHooks';

const MasterProvider: React.FC = (props) => {
  const { children } = props;
  const master = useProvideMaster();

  return (
    <masterContext.Provider value={master} >
      {children}
    </masterContext.Provider>
  )
};
export default MasterProvider;
