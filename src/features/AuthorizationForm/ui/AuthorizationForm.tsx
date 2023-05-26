import { Link } from 'react-router-dom';
import { Box, Button, CircularProgress, Paper, TextField, Tooltip, Typography, useMediaQuery } from '@mui/material';
import { ChangeEvent, FC } from 'react';
import { useTranslation } from 'react-i18next';
import { PasswordInput } from 'entities';
import { useAppActions, useAppSelector } from 'shared';

type Props = {
  title: string;
  buttonText: string;
  onSubmit: () => void;
  description: string;
  linkText: string;
  linkTo: string;
  isLoading: boolean;
  shouldHaveValidation: boolean;
};

const validateFormInputs = (email: string, password: string) => {
  const isPasswordValid = !!password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/);

  const isEmailValid = !!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/g);

  return {
    isEmailValid,
    isPasswordValid
  };
};

export const AuthorizationForm: FC<Props> = ({
  buttonText,
  linkText,
  linkTo,
  onSubmit,
  description,
  title,
  isLoading,
  shouldHaveValidation
}) => {
  const { emailErrorMessage, passwordValue, emailValue } = useAppSelector((state) => state.userReducer);
  const { setEmailValue, setEmailErrorMessage, setPasswordErrorMessage } = useAppActions();
  const match = useMediaQuery('(max-width: 425px');
  const { t } = useTranslation(['authorization']);

  const handleSubmit = () => {
    const { isEmailValid, isPasswordValid } = validateFormInputs(emailValue, passwordValue);

    if (isEmailValid && isPasswordValid) {
      onSubmit();
    } else {
      if (!isPasswordValid) {
        setPasswordErrorMessage(t('Invalid Password'));
      }
      if (!isEmailValid) {
        setEmailErrorMessage(t('Invalid email'));
      }
    }
  };

  const isButtonDisabled = isLoading || !emailValue.trim().length || !passwordValue.trim().length;

  const renderPasswordInput = () => {
    return shouldHaveValidation ? (
      <Tooltip disableInteractive title={t('Tooltip')}>
        <PasswordInput />
      </Tooltip>
    ) : (
      <PasswordInput />
    );
  };

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
      <Typography variant={match ? 'h5' : 'h4'}>{title}</Typography>
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
            if (emailErrorMessage.length) {
              setEmailErrorMessage('');
            }
            setEmailValue(e.target.value);
          }}
          error={!!emailErrorMessage.length}
          helperText={emailErrorMessage}
          type="email"
          label={t('E-mail')}
          size="small"
          fullWidth
        />
        {renderPasswordInput()}
        <Button
          endIcon={isLoading ? <CircularProgress color="secondary" size={16} /> : null}
          disabled={isButtonDisabled}
          onClick={shouldHaveValidation ? handleSubmit : onSubmit}
          variant="contained"
          sx={{ width: 'max-content' }}
        >
          {buttonText}
        </Button>
      </Box>
      <Typography>{description} </Typography>
      <Button variant="text" color="secondary" component={Link} to={linkTo} sx={{ fontWeight: 600 }}>
        {linkText}
      </Button>
    </Paper>
  );
};
