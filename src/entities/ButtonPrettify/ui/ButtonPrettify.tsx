import { FC } from 'react';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { ButtonStyled, usePrettifyEditors } from 'shared';

export const ButtonPrettify: FC = () => {
  const { prettifyHandler } = usePrettifyEditors();

  return (
    <ButtonStyled onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
      <FormatAlignLeftOutlinedIcon />
    </ButtonStyled>
  );
};
