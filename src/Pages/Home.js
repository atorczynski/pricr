import React from 'react';
import styled from '@emotion/styled';
import SearchContainer from '../Components/Container/SearchContainer';
import { ContentContainer } from '../Components/GlobalComponents/BodyHelper';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export default function Home() {
  return (
      <SearchContainer SBTitle={'Search for your product and compare the prices on ebay!'} />
  );
}
