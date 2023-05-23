import { SvgIcon, styled } from '@mui/material';

export const SvgIconLogo = styled(SvgIcon)(({ theme, width }) => ({
  width: width,
  height: 'auto',
  color: theme.palette.text.primary,
  transition: 'ease-in-out 0.2s',
  '&:hover': {
    color: theme.palette.secondary.main
  }
}));
