import {
  IntrospectionInterfaceType,
  IntrospectionListTypeRef,
  IntrospectionNamedTypeRef,
  IntrospectionNonNullTypeRef,
  IntrospectionObjectType,
  IntrospectionType,
  IntrospectionTypeRef
} from 'graphql';
import { INTROSPECTION_TYPES } from './constants';

export function isIntrospectionType(type: IntrospectionTypeRef): type is IntrospectionType {
  return INTROSPECTION_TYPES.some((arrType) => type?.kind === arrType);
}

export function isIntrospectionObjectType(type?: IntrospectionType): type is IntrospectionObjectType {
  return type?.kind === 'OBJECT';
}

export function isIntrospectionInterfaceType(type?: IntrospectionType): type is IntrospectionInterfaceType {
  return type?.kind === 'INTERFACE';
}

export function isIntrospectionNamedTypeRef(type?: IntrospectionTypeRef | null): type is IntrospectionNamedTypeRef {
  return !!type && 'name' in type;
}

export function isIntrospectionNonNullTypeRef(
  type?: IntrospectionTypeRef | null
): type is IntrospectionNonNullTypeRef<IntrospectionNamedTypeRef> {
  return type?.kind === 'NON_NULL';
}

export function isIntrospectionListTypeRef(
  type?: IntrospectionTypeRef | null
): type is IntrospectionListTypeRef<IntrospectionNamedTypeRef> {
  return type?.kind === 'LIST';
}
