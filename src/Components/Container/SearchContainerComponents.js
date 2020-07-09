import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import styled from '@emotion/styled';

export const SearchContainerWrapper = styled.div`
  background-color: #f7eec7;
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  border-bottom: 1px solid #f4d35e;
  border-top: 1px solid #f4d35e;
  box-shadow: 0px 6px 17px 1px rgba(0, 0, 0, 0.75);
`;

export const SearchBarWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchBarTitle = styled.p`
  color: #555555;
  font-size: 30px;
`;

export const SearchBar = styled.input`
  width: 80%;
  height: 40px;
  font-size: 16px;
  color: #555555;
  text-align: center;
  border-radius: 5px 0 0 5px;
  border: 1px solid #dedfdf;

  :focus {
    outline: none;
    text-align: left;
    padding-left: 10px;
    border: 1px solid #ee964b;
    transition: border 1s ease-in;
  }
`;

export const SearchBarButtonWrapper = styled.form`
  display: flex;
  width: 100%;
  justify-content: center;
  justify-items: center;
  align-items: center;
  align-content: center;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export const SearchButton = styled(Button)`
  outline: none;
  width: 50px;
  height: 38px;
  background-color: black;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  padding: 7px 15px;
  text-transform: uppercase;
  border-radius: 0px;

  :hover {
    background: #f4d35e;
  }
`;
