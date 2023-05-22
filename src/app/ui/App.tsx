import { ToastContainer } from 'react-toastify';
import { withProviders } from '../providers';
import { Router } from '../router';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <div className="app">
      <Router />
      <ToastContainer />
    </div>
  );
};

export default withProviders(App);
