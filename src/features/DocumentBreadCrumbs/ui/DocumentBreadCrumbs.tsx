import { FC } from 'react';
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
      {breadCrumbs.map((type, i) => (
        <Link onClick={() => navHandler(type)} key={i}>
          {type}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
