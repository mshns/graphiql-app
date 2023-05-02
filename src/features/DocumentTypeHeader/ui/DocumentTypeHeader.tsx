import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppActions, useAppSelector } from 'shared';
import { DocumentTypeRow } from 'entities';

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
