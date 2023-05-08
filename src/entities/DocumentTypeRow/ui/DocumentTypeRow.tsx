import { FC } from 'react';
import { IntrospectionTypeRef } from 'graphql';
import { Link, Typography } from '@mui/material';
import {
  isIntrospectionListTypeRef,
  isIntrospectionNamedTypeRef,
  isIntrospectionNonNullTypeRef,
  useAppActions
} from 'shared';

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
        <Link
          href="#"
          onClick={() => setBreadCrumbs(type.ofType.name)}
          sx={{ display: 'flex', gap: '0.5em', textDecoration: 'none' }}
        >
          <Typography>{name}: </Typography>
          <Typography> {isNonNull ? `${type.ofType.name}!` : `[${type.ofType.name}]`} </Typography>
        </Link>
      );
    }

    if (isNamed) {
      return (
        <Link
          href="#"
          onClick={() => setBreadCrumbs(type.name)}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em', textDecoration: 'none' }}
        >
          <Typography>{name}: </Typography>
          <Typography>{type.name}</Typography>
        </Link>
      );
    }
  }

  return null;
};
