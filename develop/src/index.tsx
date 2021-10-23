import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from 'App';
import App from 'App_demo';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouter>,
  document.getElementById('root'),
);
