import { IconButton, TextField } from '@mui/material';
import { useState } from 'react';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

interface PasswordInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const PasswordInput = ({ setValue, value }: PasswordInputProps) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <TextField
      color="secondary"
      size="small"
      fullWidth
      required
      value={value}
      label="Password"
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
