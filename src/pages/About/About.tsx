import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar, Box, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';

import { PageDivider, QuestionAccordion, SignButtons, WelcomeTitle } from 'entities';
import { CardList } from './ui/styled';
import { FEATURELIST, TEAMLIST } from './constants';

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <WelcomeTitle />
      <SignButtons />
      <PageDivider title={t('Features of GraphiQL')} />
      <CardList>
        {FEATURELIST.map((feature) => (
          <ListItem key={feature} sx={{ width: 280, flexDirection: 'column' }}>
            <Typography sx={{ color: 'secondary.main', width: 1 }}>{t(`${feature}.title`)}</Typography>
            <Typography sx={{ color: 'text.primary' }}>{t(`${feature}.subtitle`)}</Typography>
          </ListItem>
        ))}
      </CardList>
      <PageDivider title={t('How it works?')} />
      <QuestionAccordion />
      <PageDivider title={t('Our Team')} />
      <CardList>
        {TEAMLIST.map((item) => (
          <ListItem key={item.teammate} sx={{ width: 250 }}>
            <ListItemAvatar>
              <Avatar alt={item.teammate} src={item.avatar} />
            </ListItemAvatar>
            <ListItemText
              sx={{ color: 'text.primary', '& .MuiListItemText-secondary': { color: 'text.secondary' } }}
              primary={t(item.teammate, { ns: 'translation' })}
              secondary={t(item.position, { ns: 'translation' })}
            />
          </ListItem>
        ))}
      </CardList>
    </Box>
  );
};
