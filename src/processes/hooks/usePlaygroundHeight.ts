import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

export const usePlaygroundHeight = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const footer = useRef<HTMLDivElement | null>(null);
  const [barsHeight, setBarsHeight] = useState(0);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  const getHeight = () => {
    if (header && footer) {
      const headerHeight = header.current?.clientHeight;
      const footerHeight = footer.current?.clientHeight;

      if (headerHeight && footerHeight) {
        setBarsHeight(headerHeight + footerHeight + 40);
      }
    }
  };

  useEffect(() => getHeight());

  useEffect(getHeight, [isLessMd]);

  return { header, footer, barsHeight };
};
