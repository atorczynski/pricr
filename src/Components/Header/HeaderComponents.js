import styled from '@emotion/styled';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 75px;
  display: flex;
  background: rgb(13,59,102);
  background: linear-gradient(0deg, rgba(13,59,102,1) 0%, rgba(20,79,134,1) 100%);
  justify-content: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1200px;
  padding: 0 20px;
`;

export const NaviList = styled.ul`
  display: flex;
  list-style: none;


`;
export const NaviListItem = styled.li`
  color: #ddd;
  text-transform: uppercase;
  padding: 0 0 0 10px;
 
  :hover {
    color: #F4D35E;

`;

export const NaviListItemLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const HeaderLink = styled.a`
  text-decoration: none;
  color: inherit;

`;

export const HeaderTitle = styled.h1`
  color: #ddd;
  transition: all 0.4s ease-in;

  :hover {
    color: #F4D35E;
  }
`;
