import { FC } from 'react';
import { useTranslation } from 'react-i18next';

export const About: FC = () => {
  const { t } = useTranslation(['about']);
  return <section>About {t('description.part1')}</section>;
};
