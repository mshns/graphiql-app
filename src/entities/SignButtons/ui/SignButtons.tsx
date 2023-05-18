import { Box, Button } from '@mui/material';
import { useTranslation } from 'react-i18next';

export const SignButtons = () => {
  const { t } = useTranslation(['layout']);

  return (
    <Box sx={{ mt: 3, display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <Button variant="contained" sx={{ width: 200, m: 1, backgroundColor: 'secondary.main' }}>
        {t('Sign In')}
      </Button>
      <Button variant="contained" sx={{ width: 200, m: 1, backgroundColor: 'secondary.main' }}>
        {t('Sign Up')}
      </Button>
    </Box>
  );
};
