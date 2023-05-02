import { FC } from 'react';

type Props = {
  type?: string | false;
  name?: string;
};

export const DocumentTypeRow: FC<Props> = ({ type, name }) => {
  if (!(type && name)) {
    return null;
  }

  return (
    <div>
      <span>{name}: </span>
      <span>{type}</span>
    </div>
  );
};
