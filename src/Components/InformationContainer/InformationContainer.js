import React from 'react';
import styled from '@emotion/styled';

const InformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 300px;
  max-width: 300px;
  height: 300px;
  background: inherit;
  box-shadow: 0px 0px 16px -1px rgba(0, 0, 0, 0.75);
  border: 1px solid rgb(13, 59, 102);
  border-radius: 5px;
  margin-top: 20px;
`;

export default function InformationContainer({ children }) {
  return <InformationWrapper>{children}</InformationWrapper>;
}
