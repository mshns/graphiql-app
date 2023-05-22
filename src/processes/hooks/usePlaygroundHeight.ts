import { useEffect, useRef, useState } from 'react';

export const usePlaygroundHeight = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const footer = useRef<HTMLDivElement | null>(null);
  const windowHeight = useRef(window.innerHeight);
  const [playgroundHeight, setPlaygroundHeight] = useState(0);

  useEffect(() => {
    if (header && footer) {
      const headerHeight = header.current?.clientHeight;
      const footerHeight = footer.current?.clientHeight;

      if (headerHeight && footerHeight) {
        setPlaygroundHeight(windowHeight.current - headerHeight - footerHeight - 32);
      }
    }
  }, [header, footer, windowHeight]);

  return { header, footer, playgroundHeight };
};
