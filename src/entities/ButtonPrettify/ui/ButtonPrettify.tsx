import { FC } from 'react';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';
import { ButtonStyled, usePrettifyEditors } from 'shared';

export const ButtonPrettify: FC = () => {
  const { prettifyHandler } = usePrettifyEditors();
  const { t } = useTranslation('playground');

  return (
    <Tooltip title={t('Prettify Shift + Alt + F')} disableInteractive>
      <ButtonStyled onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
        <FormatAlignLeftOutlinedIcon />
      </ButtonStyled>
    </Tooltip>
  );
};
