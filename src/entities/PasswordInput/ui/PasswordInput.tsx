import { IconButton, TextField } from '@mui/material';
import { FC, useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useTranslation } from 'react-i18next';

interface Props {
  value: string;
  setValue: (value: string) => void;
}

export const PasswordInput: FC<Props> = ({ setValue, value }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation(['authorization']);

  return (
    <TextField
      color="secondary"
      size="small"
      fullWidth
      required
      value={value}
      label={t('Password')}
      type={isVisible ? 'text' : 'password'}
      onChange={(e) => setValue(e.target.value)}
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
