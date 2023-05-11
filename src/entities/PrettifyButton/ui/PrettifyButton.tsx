import { FC } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import { Button } from '@mui/material';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { useAppActions, useAppSelector, prettifyGraphql } from 'shared';

export const PrettifyButton: FC = () => {
  const { query, variables } = useAppSelector((state) => state.editorReducer);
  const { setQuery, setVariables } = useAppActions();

  const prettifyHandler = () => {
    prettifyGraphql(query, setQuery);
    setVariables(jsonbeautify(JSON.parse(variables), null!, 1, 5));
  };

  return (
    <Button onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
      <FormatAlignLeftOutlinedIcon />
    </Button>
  );
};
