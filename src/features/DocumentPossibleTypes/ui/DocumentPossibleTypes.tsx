import { FC } from 'react';
import { uid } from 'uid';
import { IntrospectionQuery, IntrospectionType } from 'graphql';
import { isIntrospectionInterfaceType, isIntrospectionObjectType, sortAlphabetArray } from 'shared';
import { DocumentTypeRow } from 'entities';

type Props = {
  currentType?: IntrospectionType;
  introspection?: IntrospectionQuery;
};

export const DocumentPossibleTypes: FC<Props> = ({ currentType, introspection }) => {
  const getType = (typeName: string) => {
    const type = introspection?.__schema.types.find((type) => type.name === typeName);
    if (isIntrospectionObjectType(type)) {
      return type.fields;
    }
  };

  if (isIntrospectionInterfaceType(currentType)) {
    return (
      <section>
        {currentType.possibleTypes.map((type) => {
          return (
            <section key={uid()}>
              <h4>{type.name}</h4>

              {getType(type.name) ? (
                <>
                  {sortAlphabetArray(getType(type.name)!)?.map((arrType) => (
                    <DocumentTypeRow key={uid()} name={arrType.name} type={arrType.type} />
                  ))}
                </>
              ) : null}
            </section>
          );
        })}
      </section>
    );
  }

  return null;
};
