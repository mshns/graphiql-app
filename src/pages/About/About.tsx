import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Avatar, Box, Divider, ListItem, ListItemAvatar, ListItemText, Paper, Typography } from '@mui/material';

import { PageDivider, QuestionAccordion, SignButtons, WelcomeTitle } from 'entities';
import { useAppSelector } from 'shared';
import { CardList } from './ui/styled';
import { FEATURELIST, TEAMLIST, ICONLIST } from './constants';

export const About: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);
  const { isLoggedIn } = useAppSelector((state) => state.userReducer);

  return (
    <Box sx={{ flexDirection: 'column' }}>
      <WelcomeTitle />
      {!isLoggedIn && <SignButtons />}
      <PageDivider title={t('Features of GraphiQL')} icon={ICONLIST.check} />
      <CardList>
        {FEATURELIST.map((feature) => (
          <Paper key={feature} sx={{ width: { sm: '90%', md: '40%', xl: '20%' }, p: 1, mb: 5 }}>
            <Typography sx={{ color: 'secondary.main', width: 1 }}>{t(`${feature}.title`)}</Typography>
            <Divider />
            <Typography sx={{ color: 'text.primary' }}>{t(`${feature}.subtitle`)}</Typography>
          </Paper>
        ))}
      </CardList>
      <PageDivider title={t('How it works?')} icon={ICONLIST.question} />
      <QuestionAccordion />
      <PageDivider title={t('Our Team')} icon={ICONLIST.team} />
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
