import { Typography, styled } from '@mui/material';

export const DocumentTypeHeader = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
  fontSize: `${theme.typography.subtitle1}`,
  margin: `0.5em 0`
}));
