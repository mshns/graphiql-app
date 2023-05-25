import { FC } from 'react';
import { IntrospectionTypeRef } from 'graphql';
import { Typography } from '@mui/material';
import {
  isIntrospectionListTypeRef,
  isIntrospectionNamedTypeRef,
  isIntrospectionNonNullTypeRef,
  useAppActions
} from 'shared';
import { LinkStyled } from './Link.styled';

type Props = {
  type?: IntrospectionTypeRef | null;
  name?: string;
};

export const DocumentTypeRow: FC<Props> = ({ type, name }) => {
  const { setBreadCrumbs } = useAppActions();

  const isNonNull = isIntrospectionNonNullTypeRef(type);
  const isList = isIntrospectionListTypeRef(type);
  const isNamed = isIntrospectionNamedTypeRef(type);

  if (type && name) {
    if (isNonNull || isList) {
      return (
        <LinkStyled px={1} py={0.2} href="#" onClick={() => setBreadCrumbs(type.ofType.name)}>
          <Typography variant="body1">{name}: </Typography>
          <Typography color="text.secondary" variant="body1">
            {' '}
            {isNonNull ? `${type.ofType.name}!` : `[${type.ofType.name}]`}{' '}
          </Typography>
        </LinkStyled>
      );
    }

    if (isNamed) {
      return (
        <LinkStyled px={1} py={0.2} href="#" onClick={() => setBreadCrumbs(type.name)}>
          <Typography variant="body1">{name}: </Typography>
          <Typography color="text.secondary" variant="body1">
            {type.name}
          </Typography>
        </LinkStyled>
      );
    }
  }

  return null;
};
