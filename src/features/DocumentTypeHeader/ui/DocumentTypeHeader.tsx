import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DocumentTypeRow } from 'entities';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentTypeHeader: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <section>
        <ArrowBackIcon onClick={stepBackHandler} />
        <DocumentTypeRow type={currentTypeName} name={typeAsField?.name} />
      </section>
    );
  }

  return null;
};
