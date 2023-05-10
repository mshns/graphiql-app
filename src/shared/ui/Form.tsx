import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { PasswordInput } from 'shared/ui/PasswordInput';

interface FormProps {
  title: string;
  buttonText: string;
  onClick: () => void;
  text: string;
  linkText: string;
  linkTo: string;
}

export const Form: FC<FormProps> = ({ buttonText, linkText, linkTo, onClick, text, title }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <Paper
      elevation={12}
      sx={{
        padding: '2rem 1rem',
        maxWidth: '400px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        margin: '0 auto',
        flexDirection: 'column',
        rowGap: '1.5rem'
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
          label="E-mail"
          size="small"
          fullWidth
        />
        <PasswordInput value={password} setValue={setPassword} />
        <Button onClick={onClick} variant="contained" sx={{ width: 'max-content' }}>
          {buttonText}
        </Button>
      </Box>
      <Typography>
        {text} <Link to={linkTo}>{linkText}</Link>
      </Typography>
    </Paper>
  );
};
