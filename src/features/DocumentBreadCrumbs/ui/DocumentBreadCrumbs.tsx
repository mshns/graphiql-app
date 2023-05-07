import { FC } from 'react';
import { uid } from 'uid';
import { Breadcrumbs, Link } from '@mui/material';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentBreadCrumbs: FC = () => {
  const { breadCrumbs } = useAppSelector((state) => state.documentReducer);
  const { setBreadCrumbs } = useAppActions();

  const navHandler = (type: string) => {
    setBreadCrumbs(type);
  };

  return (
    <Breadcrumbs separator="›" maxItems={5} aria-label="breadcrumb">
      {breadCrumbs.map((type) => (
        <Link onClick={() => navHandler(type)} key={uid()}>
          {type}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
