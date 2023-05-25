import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthorizationForm } from 'features';
import { ROUTE, useAuthorizationForm } from 'shared';

export const SignUp: FC = () => {
  const { t } = useTranslation(['authorization']);
  const { handleSignUp, isLoading } = useAuthorizationForm();

  return (
    <AuthorizationForm
      shouldHaveValidation
      buttonText={t('Register')}
      linkText={t('Sign in')}
      linkTo={ROUTE.Login}
      description={t('Already have an account?')}
      title={t('Create your account')}
      onSubmit={handleSignUp}
      isLoading={isLoading}
    />
  );
};
