import { FC } from 'react';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTranslation } from 'react-i18next';
import { ButtonStyled } from 'shared';

type Props = {
  side: 'left' | 'right';
  handler: () => void;
};

export const ButtonClose: FC<Props> = ({ side, handler }) => {
  const { t } = useTranslation('playground');

  if (side === 'left') {
    return (
      <ButtonStyled onClick={handler}>
        <ChevronLeftIcon fontSize="medium" />
        {t('Close')}
      </ButtonStyled>
    );
  }

  return (
    <ButtonStyled onClick={handler}>
      {t('Close')}
      <ChevronRightIcon fontSize="medium" />
    </ButtonStyled>
  );
};
