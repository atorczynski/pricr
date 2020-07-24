import React from 'react';
import {
  HeaderContainer,
  HeaderTitle,
  HeaderWrapper,
  HeaderLink,
  NaviList,
  NaviListItem,
  NaviListItemLink,
} from './HeaderComponents';

export default function Header({ heading }) {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <HeaderLink href={'/'}>
          <HeaderTitle>{heading}</HeaderTitle>
        </HeaderLink>
        <NaviList>
          <NaviListItemLink href={'/'}>
            <NaviListItem>Popular</NaviListItem>
          </NaviListItemLink>
          <NaviListItemLink href={'/'}>
            <NaviListItem>Live</NaviListItem>
          </NaviListItemLink>
        </NaviList>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
