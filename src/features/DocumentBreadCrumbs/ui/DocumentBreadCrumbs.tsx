import { FC } from 'react';
import { useAppActions, useAppSelector } from 'shared';

export const DocumentBreadCrumbs: FC = () => {
  const { breadCrumbs } = useAppSelector((state) => state.breadCrumbsReducer);
  const { setBreadCrumbs } = useAppActions();

  const navHandler = (type: string) => {
    setBreadCrumbs(type);
  };

  return (
    <div>
      {breadCrumbs.map((type, i) => (
        <span onClick={() => navHandler(type)} key={i}>
          {type}
        </span>
      ))}
    </div>
  );
};
