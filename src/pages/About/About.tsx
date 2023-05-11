import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { QUESTIONLIST, TEAMLIST } from './constants';

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  const [expanded, setExpanded] = useState<string | false>('question1');
  const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <Typography variant="h4" component="h2" color="secondary.main" sx={{ textAlign: 'center' }}>
        {t('title')}
      </Typography>
      <Typography variant="h5" component="h3" sx={{ textAlign: 'center' }}>
        {t('subtitle')}
      </Typography>

      <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Button variant="contained" sx={{ width: 300, m: 1 }}>
          {t('Sign In', { ns: 'layout' })}
        </Button>
        <Button variant="contained" sx={{ width: 300, m: 1 }}>
          {t('Sign Up', { ns: 'layout' })}
        </Button>
      </Box>

      <Divider textAlign="center" sx={{ m: 5 }}>
        <Typography variant="h5" color="secondary.main" component="h4">
          {t('Features of GraphiQL')}
        </Typography>
      </Divider>

      <Typography>{t('description.part1')}</Typography>

      <Divider textAlign="center" sx={{ m: 5 }}>
        <Typography variant="h5" color="secondary.main" component="h4">
          {t('How it works?')}
        </Typography>
      </Divider>

      {QUESTIONLIST.map((question) => (
        <Accordion key={question} expanded={expanded === question} onChange={handleChange(question)}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography sx={{ width: '33%', flexShrink: 0 }}>{t(`${question}.title`)}</Typography>
            <Typography sx={{ color: 'text.secondary' }}>{t(`${question}.subtitle`)}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{t(`${question}.answer`)}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Divider textAlign="center" sx={{ m: 5 }}>
        <Typography variant="h5" color="secondary.main" component="h4">
          {t('Our Team')}
        </Typography>
      </Divider>

      <List
        sx={{
          width: '100%',
          bgcolor: 'background.paper',
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap'
        }}
      >
        {TEAMLIST.map((item) => (
          <ListItem key={item.teammate} sx={{ width: 250 }}>
            <ListItemAvatar>
              <Avatar alt={item.teammate} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={t(item.teammate, { ns: 'translation' })}
              secondary={t(item.position, { ns: 'translation' })}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
