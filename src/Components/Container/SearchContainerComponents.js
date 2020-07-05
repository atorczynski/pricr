import styled from '@emotion/styled';

export const SearchContainerWrapper = styled.div`
  background-image: url("https://i.imgur.com/KubB5Ps.jpg");
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-Bottom: 1px solid #F4D35E;
  border-Top: 1px solid #F4D35E;
`;

export const SearchBarWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  border-radius: 5px;
  border: 1px solid #DEDFDF;

  :focus {
    outline: none;
    text-align: left;
    padding-left: 10px;
    border: 1px solid #EE964B;
    transition: border 1s ease-in;
  }
`;

export const FindButton = styled.button`
  background: #EE964B;
  color: #FFF;
  outline: none;
  border-radius: 5px;
  box-shadow: 0px -7px #FFF;
  border: 2px solid #FFF;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  margin-top: 15px;
  padding: 7px 15px;
  text-transform: uppercase;

  :hover {
    background: #F4D35E;

  }

  :active {
    background: #F4D35E;
    box-shadow: 0px -3px #FFF;
    transform: translateY(-4px);
    
   
  }
`