import { FC } from 'react';
import { IntrospectionTypeRef } from 'graphql';
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

  if (type && name) {
    if (isNonNull || isList) {
      return (
        <div onClick={() => setBreadCrumbs(type.ofType.name)}>
          <span>{name}: </span>
          <span> {isNonNull ? `${type.ofType.name}!` : `[${type.ofType.name}]`} </span>
        </div>
      );
    }

    if (isIntrospectionNamedTypeRef(type)) {
      return (
        <div onClick={() => setBreadCrumbs(type.name)}>
          <span>{name}: </span>
          <span>{type.name}</span>
        </div>
      );
    }
  }

  return null;
};
