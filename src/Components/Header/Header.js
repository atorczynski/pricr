import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  HeaderLink,
} from './HeaderComponents';

export default function Header({ heading }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLink href={'/'}>
          <HeaderTitle>{heading}</HeaderTitle>
        </HeaderLink>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
