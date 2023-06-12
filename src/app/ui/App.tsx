import { Box } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { withProviders } from '../providers';
import { Router } from '../router';
import 'react-toastify/dist/ReactToastify.min.css';

const App = () => {
  return (
    <Box position="relative">
      <Router />
      <ToastContainer />
    </Box>
  );
};

export default withProviders(App);
