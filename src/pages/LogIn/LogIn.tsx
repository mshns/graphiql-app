import { FC } from 'react';
import { Form } from 'shared';
import { ROUTE } from 'shared/constants';

export const LogIn: FC = () => (
  <Form
    buttonText="Sign in"
    linkText="Sign Up for free"
    linkTo={ROUTE.SignUp}
    text="Do not have an account?"
    title="Sign in to your account"
    onClick={() => {}}
  />
);
