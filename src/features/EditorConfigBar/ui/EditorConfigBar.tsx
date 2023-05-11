import { FC, useState } from 'react';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowDownRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowUpRounded';
import { Box, Button, Typography } from '@mui/material';
import { QueryVariables, QueryHeaders } from 'entities';
import { theme } from 'shared';

export const EditorConfigBar: FC = () => {
  const [tab, setTab] = useState('variables');
  const [isOpenConfig, setIsOpenConfig] = useState(false);

  const barPicker = () => (tab === 'variables' ? <QueryVariables /> : <QueryHeaders />);

  const setVisibilityHandler = () => setIsOpenConfig(!isOpenConfig);

  const setActiveColor = (barName: string) =>
    barName === tab && isOpenConfig ? theme.palette.primary.dark : 'transparent';

  return (
    <Box sx={{ maxHeight: '40%', flex: '1 1 auto' }}>
      <Box sx={{ display: 'flex', p: 1, justifyContent: 'space-between' }}>
        <Box>
          <Button onClick={() => setTab('variables')} sx={{ backgroundColor: setActiveColor('variables') }}>
            <Typography variant="caption">Variables</Typography>
          </Button>

          <Button onClick={() => setTab('headers')} sx={{ backgroundColor: setActiveColor('headers') }}>
            <Typography variant="caption">Headers</Typography>
          </Button>
        </Box>

        <Button onClick={setVisibilityHandler} sx={{ minWidth: 'auto' }}>
          {isOpenConfig ? <ArrowClose sx={{ fontSize: '1.5em' }} /> : <ArrowOpen sx={{ fontSize: '1.5em' }} />}
        </Button>
      </Box>

      <Box>{isOpenConfig ? barPicker() : null}</Box>
    </Box>
  );
};
