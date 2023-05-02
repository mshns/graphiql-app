import { FC } from 'react';

type Props = {
  type?: string;
  name?: string;
};

export const DocumentTypeRow: FC<Props> = ({ type, name }) => (
  <div>
    <span>{name}: </span>
    <span>{type}</span>
  </div>
);
