import { Paper, styled } from '@mui/material';

export const FeatureItem = styled(Paper)(({ theme }) => ({
  padding: 20,
  marginBottom: 20,
  [theme.breakpoints.up('sm')]: {
    width: 'calc(100% - 10px)'
  },
  [theme.breakpoints.up('md')]: {
    width: 'calc(50% - 10px)'
  },
  [theme.breakpoints.up('xl')]: {
    width: 'calc(25% - 15px)'
  }
}));
