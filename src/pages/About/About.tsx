import { FC } from 'react';

import { useTranslation } from 'react-i18next';
import { Avatar, Box, ListItem, ListItemAvatar, ListItemText } from '@mui/material';

import { FeatureList, PageDivider, QuestionAccordion, SignButtons, WelcomeTitle } from 'entities';

import { CardList } from './ui/styled';

import { TEAMLIST, ICONLIST } from './constants';

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <WelcomeTitle />
      <SignButtons />
      <PageDivider title={t('Features of GraphiQL')} icon={ICONLIST.check} />
      <FeatureList />
      <PageDivider title={t('How it works?')} icon={ICONLIST.question} />
      <QuestionAccordion />
      <PageDivider title={t('Our Team')} icon={ICONLIST.team} />
      <CardList>
        {TEAMLIST.map((item) => (
          <ListItem key={item.teammate} sx={{ width: 254 }}>
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
