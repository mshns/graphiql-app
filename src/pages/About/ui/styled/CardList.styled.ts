import { List, styled } from '@mui/material';

export const CardList = styled(List)(() => ({
  width: '100%',
  bgcolor: 'background.paper',
  display: 'flex',
  justifyContent: 'space-around',
  flexWrap: 'wrap'
}));
