import { FC } from 'react';
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
        {currentType.possibleTypes.map((type, i) => {
          return (
            <section key={i + Date.now()}>
              <h4>{type.name}</h4>

              {getType(type.name) ? (
                <>
                  {sortAlphabetArray(getType(type.name)!)?.map((arrType, i) => (
                    <DocumentTypeRow key={i + Date.now()} name={arrType.name} type={arrType.type} />
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
