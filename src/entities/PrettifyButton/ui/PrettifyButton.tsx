import { FC } from 'react';
import { Button } from '@mui/material';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { useAppActions, useAppSelector } from 'shared';
import { prettifyGraphql } from '../lib/prettifyGraphql';

export const PrettifyButton: FC = () => {
  const { query } = useAppSelector((state) => state.editorReducer);
  const { setQuery } = useAppActions();

  const prettifyHandler = () => {
    prettifyGraphql(query, setQuery);
  };

  return (
    <Button onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
      <FormatAlignLeftOutlinedIcon />
    </Button>
  );
};
