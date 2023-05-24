import { type FC } from 'react';
import { Tooltip } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import { useTranslation } from 'react-i18next';
import { ButtonTitle, HeaderButton } from 'shared';

type Props = {
  toggleSettings: (open: boolean) => void;
};

export const HeaderSettingsButton: FC<Props> = ({ toggleSettings }) => {
  const { t } = useTranslation(['layout']);

  return (
    <HeaderButton onClick={() => toggleSettings(true)}>
      <Tooltip title={t('Settings')}>
        <SettingsIcon fontSize="small" />
      </Tooltip>
      <ButtonTitle>{t('Settings')}</ButtonTitle>
    </HeaderButton>
  );
};
