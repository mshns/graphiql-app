import { useEffect, useRef, useState } from 'react';

export const useButtonHeight = () => {
  const playgroundTools = useRef<HTMLButtonElement | null>(null);
  const [buttonHeight, setButtonHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setButtonHeight(playgroundTools.current?.clientHeight);
  }, [playgroundTools]);

  return { playgroundTools, buttonHeight };
};
