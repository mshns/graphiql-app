import { FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { Divider, SvgIcon, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import { FEATURES } from '../constants';
import { FeatureListWrapper, FeatureItem } from './styled';

export const AboutFeatures: FC = () => {
  const { t } = useTranslation(['about']);

  return (
    <FeatureListWrapper>
      {FEATURES.map((feature) => (
        <FeatureItem key={uid()}>
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
