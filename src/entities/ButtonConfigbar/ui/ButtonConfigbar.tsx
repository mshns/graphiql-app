import { Dispatch, FC, MouseEvent, SetStateAction, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, useTheme } from '@mui/material';
import { ButtonStyled, EditorContext } from 'shared';

type ButtonNames = 'variables' | 'headers';

type Props = {
  buttonName: ButtonNames;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

export const ButtonConfigbar: FC<Props> = ({ setTab, tab, buttonName }) => {
  const { isOpenConfig, setIsOpenConfig } = useContext(EditorContext);
  const theme = useTheme();
  const { t } = useTranslation(['playground']);

  const setActiveColor = (barName: string) =>
    barName === tab && isOpenConfig ? theme.palette.barsColor.main : 'transparent';

  const setBar = (barName: 'variables' | 'headers', event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setTab(barName);

    if (!isOpenConfig) {
      setIsOpenConfig(true);
    }
  };

  return (
    <ButtonStyled onClick={(event) => setBar(buttonName, event)} sx={{ backgroundColor: setActiveColor(buttonName) }}>
      <Typography variant="caption">{t(`${buttonName}`)}</Typography>
    </ButtonStyled>
  );
};
