import { useMemo } from 'react';
import { IntrospectionQuery, IntrospectionType, IntrospectionField } from 'graphql';
import {
  isIntrospectionObjectType,
  isIntrospectionNamedTypeRef,
  IBreadCrumbs,
  isIntrospectionInterfaceType,
  isIntrospectionListTypeRef,
  isIntrospectionNonNullTypeRef
} from 'shared';

type IntrospectionSearch = IntrospectionType | undefined;

type UseTypesInfo = (
  introspection: IntrospectionQuery | undefined,
  breadCrumbs: IBreadCrumbs
) => { typeAsField?: IntrospectionField; currentType?: IntrospectionType };

export const useTypesInfo: UseTypesInfo = (introspection, { currentTypeName, parentTypeName }) => {
  const typeInfo = useMemo(() => {
    let parentType: IntrospectionSearch;
    let typeAsField: IntrospectionField | undefined;
    let currentType: IntrospectionSearch;
    if (introspection && parentTypeName) {
      parentType = introspection.__schema.types.find((type) => type.name === parentTypeName);
      currentType = introspection.__schema.types.find((type) => type.name === currentTypeName);
    }

    if (isIntrospectionObjectType(parentType) || isIntrospectionInterfaceType(parentType)) {
      typeAsField = parentType.fields.find((field) => {
        if (isIntrospectionListTypeRef(field.type) || isIntrospectionNonNullTypeRef(field.type)) {
          return field.type.ofType.name === currentTypeName;
        }

        if (isIntrospectionNamedTypeRef(field.type)) {
          return field.type.name === currentTypeName;
        }
      });
    }

    return { typeAsField, currentType };
  }, [currentTypeName, parentTypeName, introspection]);

  return typeInfo;
};
