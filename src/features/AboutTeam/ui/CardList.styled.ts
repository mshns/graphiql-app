import { List, styled } from '@mui/material';

export const CardList = styled(List)(() => ({
  width: '100%',
  paddingTop: 0,
  paddingBottom: 20,
  marginTop: -20,
  bgcolor: 'background.paper',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}));
