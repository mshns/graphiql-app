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
          pl={1}
          py={0.2}
          color="inherit"
          underline="hover"
          href="#"
          onClick={() => setBreadCrumbs(type.ofType.name)}
          sx={{ display: 'flex', gap: '0.5em' }}
        >
          <Typography variant="body1">{name}: </Typography>
          <Typography variant="body1"> {isNonNull ? `${type.ofType.name}!` : `[${type.ofType.name}]`} </Typography>
        </Link>
      );
    }

    if (isNamed) {
      return (
        <Link
          pl={1}
          py={0.2}
          color="inherit"
          underline="hover"
          href="#"
          onClick={() => setBreadCrumbs(type.name)}
          sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.5em' }}
        >
          <Typography variant="body1">{name}: </Typography>
          <Typography variant="body1">{type.name}</Typography>
        </Link>
      );
    }
  }

  return null;
};
