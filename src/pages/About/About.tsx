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

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  const [expanded, setExpanded] = useState<string | false>(false);

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

      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('question1.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('question1.subtitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('question1.answer')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('question2.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('question2.subtitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('question2.answer')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('question3.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('question3.subtitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('question3.answer')}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4bh-content" id="panel4bh-header">
          <Typography sx={{ width: '33%', flexShrink: 0 }}>{t('question4.title')}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{t('question4.subtitle')}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{t('question4.answer')}</Typography>
        </AccordionDetails>
      </Accordion>

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
        <ListItem sx={{ width: 250 }}>
          <ListItemAvatar>
            <Avatar alt="Nikita Kisly" src="https://avatars.githubusercontent.com/u/83978362?v=4" />
          </ListItemAvatar>
          <ListItemText
            primary={t('Nikita Kisly', { ns: 'translation' })}
            secondary={t('Team Lead', { ns: 'translation' })}
          />
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListItemAvatar>
            <Avatar alt="Hanna Yemelyanava" src="https://avatars.githubusercontent.com/u/107081776?v=4" />
          </ListItemAvatar>
          <ListItemText
            primary={t('Hanna Yemelyanava', { ns: 'translation' })}
            secondary={t('Front-End Developer', { ns: 'translation' })}
          />
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListItemAvatar>
            <Avatar alt="Mikhail Nosikov" src="https://avatars.githubusercontent.com/u/106452809?v=4" />
          </ListItemAvatar>
          <ListItemText
            primary={t('Mikhail Nosikov', { ns: 'translation' })}
            secondary={t('Designer', { ns: 'translation' })}
          />
        </ListItem>
        <ListItem sx={{ width: 250 }}>
          <ListItemAvatar>
            <Avatar alt="Iaroslav Silkin" src="https://avatars.githubusercontent.com/u/47328756?v=4" />
          </ListItemAvatar>
          <ListItemText
            primary={t('Iaroslav Silkin', { ns: 'translation' })}
            secondary={t('Mentor', { ns: 'translation' })}
          />
        </ListItem>
      </List>
    </Box>
  );
};
