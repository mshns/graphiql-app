import { useMemo } from 'react';
import { IntrospectionQuery, IntrospectionType, IntrospectionField } from 'graphql';
import { isIntrospectionObjectType, isIntrospectionNamedOutput } from 'shared';

type IntrospectionSearch = IntrospectionType | undefined;

type UseTypesInfo = (
  introspection: IntrospectionQuery | undefined,
  breadCrumbs: string[],
  currentTypeName: string
) => { fieldInfo?: IntrospectionField; thisType?: IntrospectionType };

export const useTypesInfo: UseTypesInfo = (introspection, breadCrumbs, currentTypeName) => {
  const typeInfo = useMemo(() => {
    const parentName = breadCrumbs.at(-2);
    let parentType: IntrospectionSearch;
    let fieldInfo: IntrospectionField | undefined;
    let thisType: IntrospectionSearch;

    if (introspection && parentName) {
      parentType = introspection.__schema.types.find((type) => type.name === parentName);
      thisType = introspection.__schema.types.find((type) => type.name === currentTypeName);
    }

    if (isIntrospectionObjectType(parentType)) {
      fieldInfo = parentType.fields.find((field) => {
        if (isIntrospectionNamedOutput(field.type)) {
          return field.type.name === currentTypeName;
        }
      });
    }

    return { fieldInfo, thisType };
  }, [currentTypeName, breadCrumbs, introspection]);

  return typeInfo;
};
