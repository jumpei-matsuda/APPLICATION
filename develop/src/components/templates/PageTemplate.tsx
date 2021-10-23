import { Header } from 'components/organisms/Header';
import { Footer } from 'components/organisms/Footer';

const PageTemplate: React.FC = ({ children }) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
)
export default PageTemplate;