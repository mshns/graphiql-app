import { IconButton, TextField } from '@mui/material';
import { FC, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import { useAppActions, useAppSelector } from 'shared';

export const PasswordInput: FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isPasswordError, passwordErrorMessage, passwordValue } = useAppSelector((state) => state.userReducer);
  const { setIsPasswordError, setPasswordValue } = useAppActions();

  const { t } = useTranslation(['authorization']);

  return (
    <TextField
      color="secondary"
      size="small"
      fullWidth
      required
      error={isPasswordError}
      helperText={isPasswordError && passwordErrorMessage}
      value={passwordValue}
      label={t('Password')}
      type={isVisible ? 'text' : 'password'}
      onChange={(e) => {
        if (isPasswordError) {
          setIsPasswordError(false);
        }
        setPasswordValue(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <IconButton color="secondary" onClick={() => setIsVisible(!isVisible)}>
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        )
      }}
    />
  );
};
