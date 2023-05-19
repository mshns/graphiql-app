import { Paper, styled } from '@mui/material';

export const FooterWrapper = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-around',
  alignContent: 'center',
  width: '100%',
  marginTop: 'auto',
  backgroundColor: theme.palette.background.paper
}));
