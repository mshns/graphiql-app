import { Link, styled } from '@mui/material';

export const LinkStyled = styled(Link)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5em',
  borderRadius: theme.shape.borderRadius,
  color: 'inherit',
  textDecoration: 'none',
  transition: 'background-color 0.1s',

  '&:hover, &:hover > p': {
    color: theme.palette.primary.contrastText
  },

  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  }
}));
