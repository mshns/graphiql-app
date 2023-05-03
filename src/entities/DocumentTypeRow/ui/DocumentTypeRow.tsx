import { FC } from 'react';
import { useAppActions } from 'shared';

type Props = {
  type?: string | false;
  name?: string;
};

export const DocumentTypeRow: FC<Props> = ({ type, name }) => {
  const { setBreadCrumbs } = useAppActions();

  const routeTypeHandler = () => (type ? setBreadCrumbs(type) : '');

  if (!(type && name)) {
    return null;
  }

  return (
    <div onClick={routeTypeHandler}>
      <span>{name}: </span>
      <span>{type}</span>
    </div>
  );
};
