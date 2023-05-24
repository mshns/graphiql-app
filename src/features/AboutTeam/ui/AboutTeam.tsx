import { FC } from 'react';
import { uid } from 'uid';
import { useTranslation } from 'react-i18next';
import { Avatar, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import { TEAM_LIST } from '../constants';
import { CardList } from './CardList.styled';

export const AboutTeam: FC = () => {
  const { t } = useTranslation(['about', 'translation', 'layout']);

  return (
    <CardList>
      {TEAM_LIST.map((item) => (
        <ListItem key={uid()} sx={{ width: 254 }}>
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
  );
};
