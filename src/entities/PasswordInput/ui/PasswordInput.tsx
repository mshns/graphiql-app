import { IconButton, TextField } from '@mui/material';
import { FC, forwardRef, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';
import { useAppActions, useAppSelector } from 'shared';

export const PasswordInput: FC = forwardRef<HTMLInputElement>((props, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const { passwordErrorMessage, passwordValue } = useAppSelector((state) => state.userReducer);
  const { setPasswordValue, setPasswordErrorMessage } = useAppActions();

  const { t } = useTranslation(['authorization']);

  return (
    <TextField
      color="secondary"
      size="small"
      fullWidth
      required
      error={!!passwordErrorMessage.length}
      helperText={passwordErrorMessage}
      value={passwordValue}
      label={t('Password')}
      type={isVisible ? 'text' : 'password'}
      onChange={(e) => {
        if (passwordErrorMessage.length) {
          setPasswordErrorMessage('');
        }
        setPasswordValue(e.target.value);
      }}
      InputProps={{
        endAdornment: (
          <IconButton
            sx={{ position: 'absolute', right: '0' }}
            color="secondary"
            onClick={() => setIsVisible(!isVisible)}
          >
            {isVisible ? <VisibilityIcon /> : <VisibilityOffIcon />}
          </IconButton>
        )
      }}
      sx={{
        '.MuiInputBase-root': { paddingRight: 0 }
      }}
      {...props}
      ref={ref}
    />
  );
});
