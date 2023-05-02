import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentsTypeHeader: FC<{ fieldInfo?: IntrospectionField }> = ({ fieldInfo }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.breadCrumbsReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <section>
        <ArrowBackIcon onClick={stepBackHandler} />
        <span>{fieldInfo?.name}: </span>
        <span>{currentTypeName}</span>
      </section>
    );
  }

  return null;
};
