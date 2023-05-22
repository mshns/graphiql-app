import { useEffect, useRef, useState } from 'react';

export const usePlaygroundHeight = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const footer = useRef<HTMLDivElement | null>(null);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [playgroundHeight, setPlaygroundHeight] = useState(0);

  useEffect(() => {
    if (header && footer) {
      const headerHeight = header.current?.clientHeight;
      const footerHeight = footer.current?.clientHeight;

      if (headerHeight && footerHeight) {
        setPlaygroundHeight(windowHeight - headerHeight - footerHeight - 32);
      }
    }

    window.onresize = () => {
      if (windowHeight !== window.innerHeight) {
        setWindowHeight(window.innerHeight);
      }
    };
  }, [header, footer, windowHeight]);

  return { header, footer, playgroundHeight };
};
