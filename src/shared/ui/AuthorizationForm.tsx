import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PasswordInput } from 'shared/ui/PasswordInput';

interface AuthorizationFormProps {
  title: string;
  buttonText: string;
  onClick: (email: string, password: string) => void;
  description: string;
  linkText: string;
  linkTo: string;
  isLoading: boolean;
}

export const AuthorizationForm: FC<AuthorizationFormProps> = ({
  buttonText,
  linkText,
  linkTo,
  onClick,
  description,
  title,
  isLoading
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { t } = useTranslation(['authorization']);

  return (
    <Paper
      elevation={12}
      sx={{
        padding: '2rem 1rem',
        maxWidth: '500px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: '0 auto',
        flexDirection: 'column',
        rowGap: '1.5rem',
        textAlign: 'center'
      }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          rowGap: '2rem',
          padding: '1rem'
        }}
      >
        <TextField
          value={email}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
          type="email"
          label={t('E-mail')}
          size="small"
          fullWidth
        />
        <PasswordInput value={password} setValue={setPassword} />
        <Button
          endIcon={isLoading ? <CircularProgress color="secondary" size={16} /> : null}
          disabled={isLoading}
          onClick={() => onClick(email, password)}
          variant="contained"
          sx={{ width: 'max-content' }}
        >
          {buttonText}
        </Button>
      </Box>
      <Typography>
        {description} <Link to={linkTo}>{linkText}</Link>
      </Typography>
    </Paper>
  );
};
