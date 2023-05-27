import { FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { IntrospectionQuery, IntrospectionType } from 'graphql';
import { Box } from '@mui/material';
import { isIntrospectionInterfaceType, isIntrospectionObjectType, sortAlphabetArray } from 'shared';
import { DocumentTypeHeader, DocumentTypeRow } from 'entities';

type Props = {
  currentType?: IntrospectionType;
  introspection?: IntrospectionQuery;
};

export const DocumentPossibleTypes: FC<Props> = ({ currentType, introspection }) => {
  const { t } = useTranslation(['playground']);

  const getType = (typeName: string) => {
    const type = introspection?.__schema.types.find((type) => type.name === typeName);
    if (isIntrospectionObjectType(type)) {
      return type.fields;
    }
  };

  if (isIntrospectionInterfaceType(currentType)) {
    return (
      <Box>
        <DocumentTypeHeader>{t('Implementations')}</DocumentTypeHeader>

        {currentType.possibleTypes.map((type) => {
          return (
            <Box pl={1} key={uid()}>
              <DocumentTypeHeader>{type.name}</DocumentTypeHeader>

              {getType(type.name) ? (
                <>
                  {sortAlphabetArray(getType(type.name)!)?.map((arrType) => (
                    <DocumentTypeRow key={uid()} name={arrType.name} type={arrType.type} />
                  ))}
                </>
              ) : null}
            </Box>
          );
        })}
      </Box>
    );
  }

  return null;
};
