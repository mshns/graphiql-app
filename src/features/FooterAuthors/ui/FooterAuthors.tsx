import { type FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { SpeedDialAction, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SvgIconLogo } from 'shared';
import { AUTHOR_LIST } from '../constants';
import { AuthorListLogo } from './AuthorListLogo.styled';

export const FooterAuthors: FC = () => {
  const { t } = useTranslation(['layout']);

  return (
    <>
      <AuthorListLogo
        ariaLabel="application authors"
        icon={
          <SvgIconLogo width={'48px'}>
            <GitHubIcon />
          </SvgIconLogo>
        }
      >
        {AUTHOR_LIST.map((action) => (
          <SpeedDialAction key={uid()} icon={action.icon} tooltipTitle={action.name} />
        ))}
      </AuthorListLogo>
      <Typography fontWeight={600} variant="body1" component="div" sx={{ color: 'secondary.main' }}>
        {t('Created by Power Rangers')}
      </Typography>
    </>
  );
};
