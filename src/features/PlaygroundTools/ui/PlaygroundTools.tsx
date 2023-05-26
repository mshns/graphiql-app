import { Box } from '@mui/material';
import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { ButtonDocument, ResponseStatus } from 'entities';

type Props = {
  docButton: MutableRefObject<HTMLButtonElement | null>;
  isDocumentOpen: boolean;
  setIsDocumentOpen: Dispatch<SetStateAction<boolean>>;
  responseStatus: number;
};

export const PlaygroundTools: FC<Props> = ({ docButton, isDocumentOpen, setIsDocumentOpen, responseStatus }) => {
  return (
    <Box display="flex" justifyContent="space-between">
      <ButtonDocument {...{ docButton, isDocumentOpen, setIsDocumentOpen }} />
      <ResponseStatus {...{ responseStatus }} />
    </Box>
  );
};
