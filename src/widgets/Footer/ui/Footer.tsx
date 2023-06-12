import { type FC, MutableRefObject } from 'react';
import { FOOTER_COMPONENTS } from '../constants';
import { FooterWrapper, FooterItem } from './styled';

type Props = { footer: MutableRefObject<HTMLDivElement | null> };

export const Footer: FC<Props> = ({ footer }) => {
  return (
    <FooterWrapper ref={footer} elevation={4}>
      {FOOTER_COMPONENTS.map((component) => (
        <FooterItem key={component.key}>{component}</FooterItem>
      ))}
    </FooterWrapper>
  );
};
