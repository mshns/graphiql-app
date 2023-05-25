import { useEffect, useRef, useState } from 'react';

export const usePlaygroundHeight = () => {
  const header = useRef<HTMLDivElement | null>(null);
  const footer = useRef<HTMLDivElement | null>(null);
  const [barsHeight, setBarsHeight] = useState(0);

  useEffect(() => {
    if (header && footer) {
      const headerHeight = header.current?.clientHeight;
      const footerHeight = footer.current?.clientHeight;

      if (headerHeight && footerHeight) {
        setBarsHeight(headerHeight + footerHeight + 40);
      }
    }
  }, [header, footer]);

  return { header, footer, barsHeight };
};
