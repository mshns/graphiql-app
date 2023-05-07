import { FC } from 'react';
import { IntrospectionField } from 'graphql';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box } from '@mui/material';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentTypeHeader: FC<{ typeAsField?: IntrospectionField }> = ({ typeAsField }) => {
  const { setStepBack } = useAppActions();
  const { breadCrumbs, currentTypeName } = useAppSelector((state) => state.documentReducer);

  const stepBackHandler = () => {
    setStepBack();
  };

  if (breadCrumbs.length) {
    return (
      <Box sx={{ display: 'flex' }}>
        <ArrowBackIcon onClick={stepBackHandler} />
        <div>
          {typeAsField?.name ? <span>{typeAsField?.name} :</span> : null}
          <span>{currentTypeName}</span>
        </div>
      </Box>
    );
  }

  return null;
};
