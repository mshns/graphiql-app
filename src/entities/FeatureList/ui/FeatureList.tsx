import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Divider, SvgIcon, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

import { FeatureListWrapper, FeatureItem } from './styled';

export const FeatureList: FC = () => {
  const { t } = useTranslation(['about']);

  return (
    <FeatureListWrapper>
      {['feature1', 'feature2', 'feature3', 'feature4'].map((feature) => (
        <FeatureItem key={feature}>
          <Typography component="h4" sx={{ color: 'secondary.main', fontWeight: 500 }}>
            {t(`${feature}.title`)}
          </Typography>
          <Divider textAlign="right">
            <SvgIcon fontSize="large" sx={{ color: 'divider' }}>
              <CheckIcon />
            </SvgIcon>
          </Divider>
          <Typography sx={{ color: 'text.primary' }}>{t(`${feature}.subtitle`)}</Typography>
        </FeatureItem>
      ))}
    </FeatureListWrapper>
  );
};
