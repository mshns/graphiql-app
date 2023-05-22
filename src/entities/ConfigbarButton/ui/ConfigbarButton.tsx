import { Button, Typography, useTheme } from '@mui/material';
import { Dispatch, FC, MouseEvent, SetStateAction, useContext } from 'react';
import { EditorContext } from 'shared';

type ButtonNames = 'variables' | 'headers';

type Props = {
  buttonName: ButtonNames;
  tab: string;
  setTab: Dispatch<SetStateAction<string>>;
};

export const ConfigbarButton: FC<Props> = ({ setTab, tab, buttonName }) => {
  const { isOpenConfig, setIsOpenConfig } = useContext(EditorContext);
  const theme = useTheme();

  const setActiveColor = (barName: string) =>
    barName === tab && isOpenConfig ? theme.palette.primary.dark : 'transparent';

  const setBar = (barName: 'variables' | 'headers', event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setTab(barName);

    if (!isOpenConfig) {
      setIsOpenConfig(true);
    }
  };

  return (
    <Button onClick={(event) => setBar(buttonName, event)} sx={{ backgroundColor: setActiveColor(buttonName) }}>
      <Typography variant="caption">{buttonName}</Typography>
    </Button>
  );
};
