import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Divider, Typography } from '@mui/material';
import { Spinner, useAppSelector, useIntrospection } from 'shared';
import {
  DocumentBreadCrumbs,
  DocumentTypeNav,
  DocumentArgs,
  DocumentFields,
  DocumentRoot,
  DocumentPossibleTypes,
  DocumentMetaData
} from 'features';
import { useTypesInfo } from '../model';

export const DocumentationSideBar: FC = () => {
  const { t } = useTranslation(['playground']);

  const breadCrumbsState = useAppSelector((state) => state.documentReducer);
  const { breadCrumbs } = breadCrumbsState;

  const { introspection, isLoading } = useIntrospection();
  const { typeAsField, currentType } = useTypesInfo(breadCrumbsState, introspection);

  return (
    <Box color="text.primary">
      <Typography variant="h6" sx={{ mb: 2 }}>
        {t('Documentation')}
      </Typography>

      {isLoading ? (
        <Spinner />
      ) : (
        <>
          <DocumentBreadCrumbs />

          {breadCrumbs.length < 2 ? (
            <DocumentRoot introspection={introspection} />
          ) : (
            <Box p={1}>
              <DocumentTypeNav typeAsField={typeAsField} />

              {typeAsField?.description ? (
                <Box>
                  <Typography p={1} variant="body2">
                    {typeAsField?.description}
                  </Typography>

                  <Divider variant="middle" />
                </Box>
              ) : null}

              <DocumentArgs {...{ typeAsField }} />

              <DocumentMetaData {...{ currentType }} />

              <DocumentFields {...{ currentType }} />

              <DocumentPossibleTypes {...{ currentType, introspection }} />
            </Box>
          )}
        </>
      )}
    </Box>
  );
};
