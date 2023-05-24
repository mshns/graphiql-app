import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordInput } from 'entities';
import { useAppActions, useAppSelector } from 'shared';

type Props = {
  title: string;
  buttonText: string;
  onClick: (email: string, password: string) => void;
  description: string;
  linkText: string;
  linkTo: string;
  isLoading: boolean;
};

export const AuthorizationForm: FC<Props> = ({
  buttonText,
  linkText,
  linkTo,
  onClick,
  description,
  title,
  isLoading
}) => {
  const { emailErrorMessage, isEmailError, passwordValue, emailValue } = useAppSelector((state) => state.userReducer);
  const { setIsEmailError, setEmailValue } = useAppActions();
  const { t } = useTranslation(['authorization']);

  const isButtonDisabled = isLoading || !emailValue.trim().length || !passwordValue.trim().length;

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
          color="secondary"
          value={emailValue}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            if (isEmailError) {
              setIsEmailError(false);
            }
            setEmailValue(e.target.value);
          }}
          error={isEmailError}
          helperText={isEmailError && emailErrorMessage}
          type="email"
          label={t('E-mail')}
          size="small"
          fullWidth
        />
        <PasswordInput />
        <Button
          endIcon={isLoading ? <CircularProgress color="secondary" size={16} /> : null}
          disabled={isButtonDisabled}
          onClick={() => onClick(emailValue, passwordValue)}
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
