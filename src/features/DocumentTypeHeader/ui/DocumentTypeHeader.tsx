import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { DocumentTypeRow } from 'entities';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentTypeHeader: FC<{ fieldInfo?: IntrospectionField }> = ({ fieldInfo }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.breadCrumbsReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <section>
        <ArrowBackIcon onClick={stepBackHandler} />
        <DocumentTypeRow type={currentTypeName} name={fieldInfo?.name} />
      </section>
    );
  }

  return null;
};
