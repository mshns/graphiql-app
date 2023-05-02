import {
  IntrospectionInputObjectType,
  IntrospectionInputTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionObjectType,
  IntrospectionOutputTypeRef,
  IntrospectionType
} from 'graphql';

export function isIntrospectionObjectType(type?: IntrospectionType): type is IntrospectionObjectType {
  return !!type && 'fields' in type && 'interfaces' in type;
}

export function isIntrospectionNamedOutput(
  type: IntrospectionOutputTypeRef
): type is IntrospectionNamedTypeRef<IntrospectionObjectType> {
  return 'name' in type;
}

export function isIntrospectionNamedInput(
  type: IntrospectionInputTypeRef
): type is IntrospectionNamedTypeRef<IntrospectionInputObjectType> {
  return 'name' in type;
}
