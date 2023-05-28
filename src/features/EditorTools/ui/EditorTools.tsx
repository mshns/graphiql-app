import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Box, Tooltip, useTheme } from '@mui/material';
import AnnouncementIcon from '@mui/icons-material/Announcement';
import { ButtonPrettify, ButtonRequest } from 'entities';

export const EditorTools: FC = () => {
  const theme = useTheme();
  const { t } = useTranslation('playground');

  return (
    <Box m={1} display="flex" flexDirection="column" gap={theme.spacing(1)} alignItems="center">
      <ButtonRequest />
      <ButtonPrettify />

      <Tooltip title={t('Autocomplition Ctrl + Space')} disableInteractive>
        <AnnouncementIcon color="secondary" />
      </Tooltip>
    </Box>
  );
};
