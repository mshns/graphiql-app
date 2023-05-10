import { FC } from 'react';
import { Form } from 'shared';
import { ROUTE } from 'shared/constants';

export const SignUp: FC = () => (
  <Form
    buttonText="Register"
    linkText="Sign in"
    linkTo={ROUTE.Login}
    text="Already have an account?"
    title="Create your account"
    onClick={() => {}}
  />
);
