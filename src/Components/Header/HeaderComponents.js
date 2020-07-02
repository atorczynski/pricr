import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  background-color: #001f3f;
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const HeaderTitle = styled.h1`
  color: #ddd;
  background: #FFF;
  transition: all 0.2s ease-in;

  :hover {
    color: #39cccc;
  }
`;
