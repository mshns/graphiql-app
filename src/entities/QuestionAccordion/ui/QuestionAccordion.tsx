import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QUESTIONLIST } from '../constants';

export const QuestionAccordion = () => {
  const { t } = useTranslation(['about']);

  const [expanded, setExpanded] = useState<string | false>('question2');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      {QUESTIONLIST.map((question) => (
        <Accordion key={question} expanded={expanded === question} onChange={handleChange(question)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: 'secondary.main' }} />}>
            <Typography sx={{ width: { md: '35%', xs: '100%' }, flexShrink: 0, color: 'secondary.main' }}>
              {t(`${question}.title`)}
            </Typography>
            <Typography display={{ xs: 'none', md: 'block' }} sx={{ color: 'text.secondary' }}>
              {t(`${question}.subtitle`)}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t(`${question}.answer`)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </>
  );
};
