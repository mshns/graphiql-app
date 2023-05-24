import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box } from '@mui/material';
import { PageDivider } from 'entities';
import { AboutFeatures, AboutFAQ, AboutTeam } from 'features';
import { AboutWelcome } from 'widgets';
import { ICON_LIST } from './constants';

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <AboutWelcome />
      <PageDivider title={t('Features of GraphiQL')} icon={ICON_LIST.check} />

      <AboutFeatures />
      <PageDivider title={t('How it works?')} icon={ICON_LIST.question} />

      <AboutFAQ />
      <PageDivider title={t('Our Team')} icon={ICON_LIST.team} />

      <AboutTeam />
    </Box>
  );
};
