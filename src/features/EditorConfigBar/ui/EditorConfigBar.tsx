import { Dispatch, FC, MouseEvent, SetStateAction, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Typography } from '@mui/material';
import { QueryVariables, QueryHeaders } from 'entities';
import { theme } from 'shared';

type Props = {
  isOpenConfig: boolean;
  setIsOpenConfig: Dispatch<SetStateAction<boolean>>;
};

export const EditorConfigBar: FC<Props> = ({ isOpenConfig, setIsOpenConfig }) => {
  const [tab, setTab] = useState('variables');

  const setVisibilityHandler = () => setIsOpenConfig(!isOpenConfig);

  const setBar = (barName: 'variables' | 'headers', event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    setTab(barName);

    if (!isOpenConfig) {
      setIsOpenConfig(true);
    }
  };

  const setActiveColor = (barName: string) =>
    barName === tab && isOpenConfig ? theme.palette.primary.dark : 'transparent';

  return (
    <Accordion
      disableGutters
      expanded={isOpenConfig}
      onChange={setVisibilityHandler}
      sx={{ height: isOpenConfig ? '30%' : 'auto', overflow: 'auto' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ transform: 'rotate(180deg)' }} />}
        aria-controls="panel-config"
      >
        <Box display="flex" gap="0.5em">
          <Button onClick={(event) => setBar('variables', event)} sx={{ backgroundColor: setActiveColor('variables') }}>
            <Typography variant="caption">Variables</Typography>
          </Button>

          <Button onClick={(event) => setBar('headers', event)} sx={{ backgroundColor: setActiveColor('headers') }}>
            <Typography variant="caption">Headers</Typography>
          </Button>
        </Box>
      </AccordionSummary>

      <AccordionDetails sx={{}}>
        <Box>{tab === 'variables' ? <QueryVariables /> : <QueryHeaders />}</Box>
      </AccordionDetails>
    </Accordion>
  );
};
