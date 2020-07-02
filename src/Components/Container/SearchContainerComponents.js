import styled from '@emotion/styled';

export const SearchContainerWrapper = styled.div`
  width: 70%;
  height: 350px;
  border: 1px solid black;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SearchBar = styled.input`
  width: 50%;
  height: 40px;
  font-size: 16px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid white;

  :focus {
    outline: none;
    text-align: left;
    padding-left: 10px;
  }
`;
