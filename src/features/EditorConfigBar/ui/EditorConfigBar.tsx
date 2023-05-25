import { FC, useContext, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import { TerminalConfig, ButtonConfigbar } from 'entities';
import { EditorContext, useAppActions, useAppSelector } from 'shared';

export const EditorConfigBar: FC = () => {
  const [tab, setTab] = useState('variables');
  const { isOpenConfig, setIsOpenConfig } = useContext(EditorContext);

  const isVariablesTab = tab === 'variables';

  const { variablesRef, headersRef } = useContext(EditorContext);
  const { setVariables, setHeaders } = useAppActions();
  const { variables, headers } = useAppSelector((state) => state.editorReducer);

  const configTerminalOptions = {
    editorRef: isVariablesTab ? variablesRef : headersRef,
    state: isVariablesTab ? variables : headers,
    action: isVariablesTab ? setVariables : setHeaders,
    terminalName: (isVariablesTab ? 'variables' : 'headers') as 'variables' | 'headers'
  };

  return (
    <Accordion
      disableGutters
      expanded={isOpenConfig}
      onChange={() => setIsOpenConfig(!isOpenConfig)}
      sx={{ flex: '0 0 auto', height: isOpenConfig ? '30%' : 'auto', overflow: 'auto', boxShadow: 'none' }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ transform: 'rotate(180deg)', color: 'text.primary' }} />}
        aria-controls="panel-config"
      >
        <Box display="flex" gap="0.5em">
          <ButtonConfigbar {...{ tab, setTab, buttonName: 'variables' }} />
          <ButtonConfigbar {...{ tab, setTab, buttonName: 'headers' }} />
        </Box>
      </AccordionSummary>

      <AccordionDetails>
        <Box>
          <TerminalConfig {...configTerminalOptions} />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
};
