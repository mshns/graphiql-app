import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';

export const AUTHOR_LIST = [
  {
    icon: (
      <Link to="https://github.com/mshns">
        <Avatar alt="Mikhail Nosikov" src="https://avatars.githubusercontent.com/u/106452809?v=4" />
      </Link>
    ),
    name: 'Mikhail Nosikov'
  },
  {
    icon: (
      <Link to="https://github.com/potatosim">
        <Avatar alt="Hanna Yemelyanava" src="https://avatars.githubusercontent.com/u/107081776?v=4" />
      </Link>
    ),
    name: 'Hanna Yemelyanava'
  },
  {
    icon: (
      <Link to="https://github.com/pa4ka1992">
        <Avatar alt="Nikita Kisly" src="https://avatars.githubusercontent.com/u/83978362?v=4" />
      </Link>
    ),
    name: 'Nikita Kisly'
  }
];
