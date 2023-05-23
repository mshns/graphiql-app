import { useEffect, useRef, useState } from 'react';

export const useButtonHeight = () => {
  const docButton = useRef<HTMLButtonElement | null>(null);
  const [buttonHeight, setButtonHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setButtonHeight(docButton.current?.clientHeight);
  }, [docButton]);

  return { docButton, buttonHeight };
};
