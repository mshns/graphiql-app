import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { AuthorizationForm } from 'features';
import { ROUTE, useAuthorizationForm } from 'shared';

export const LogIn: FC = () => {
  const { t } = useTranslation(['layout', 'authorization']);

  const { handleLogin, isLoading } = useAuthorizationForm();

  return (
    <AuthorizationForm
      shouldHaveValidation={false}
      buttonText={t('Sign In')}
      linkText={t('Sign Up for free', { ns: 'authorization' })}
      linkTo={ROUTE.SignUp}
      description={t('Do not have an account', { ns: 'authorization' })}
      title={t('Sign in to your account', { ns: 'authorization' })}
      onSubmit={handleLogin}
      isLoading={isLoading}
    />
  );
};
