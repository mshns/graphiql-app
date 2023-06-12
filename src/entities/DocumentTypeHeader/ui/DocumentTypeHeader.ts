import { Typography, styled } from '@mui/material';

export const DocumentTypeHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontWeight: theme.typography.fontWeightBold,
  fontSize: `${theme.typography.subtitle1}`,
  margin: `${theme.spacing(1)} 0`
}));
