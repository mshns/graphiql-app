import AssuredWorkloadIcon from '@mui/icons-material/AssuredWorkload';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

export const NAVIGATION = [
  { id: 1, name: 'About', route: '/', icon: <AssuredWorkloadIcon sx={{ color: 'text.secondary', fontSize: 32 }} /> },
  {
    id: 2,
    name: 'Editor',
    route: '/playground',
    icon: <PlayCircleOutlineIcon sx={{ color: 'text.secondary', fontSize: 32 }} />
  }
];
