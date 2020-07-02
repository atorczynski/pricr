import React from 'react';
import styled from '@emotion/styled';
import SearchContainer from '../Components/Container/SearchContainer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default function Home() {
  return (
    <Wrapper>
      <SearchContainer />
    </Wrapper>
  );
}
