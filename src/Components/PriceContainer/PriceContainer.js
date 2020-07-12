import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

const PriceWrapper = styled.div`
  width: 30%;
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: 1;
  z-index: -5000;
  display: ${(props) => props.display};
  background-color: #fff;
  margin-top: 25px;
  padding: 1px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  border: 1px solid rgb(13, 59, 102);

  @media (max-width: 700px) {
    width: 90%;
  }
`;

const ImgWrapper = styled.div`
  width: 40%;
  height: 100%;
  position: relative;
  overflow: none;
`;

const ItemImage = styled.img`
  height: 100%;
  width: 100%;
`;

const ItemInformationWrapper = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-between;
`;

const PriceInformationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  background: #ee964b;
  border-radius: 35px;
`;

const InformationHeading = styled.h2`
  color: #4a4a4a;
  font-size: ${(props) => props.fontSize};
  text-transform: uppercase;
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin};
`;

const ItemPrice = styled.h2`
  font-weight: 300;
  font-size: 35px;
  color: #111;
  -webkit-text-stroke: 0.3px #676767;
  text-align: center;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const TestWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default function PriceContainer({
  priceDisplay,
  searchedItem,
  display,
}) {
  return (
    <PriceWrapper display={display}>
      <ImgWrapper>
        <ItemImage
          src={
            'https://ae01.alicdn.com/kf/HTB1HZJidtHO8KJjSZFHq6zWJFXaG/Waterproof-cell-phone-RugGear-RG710-GRANDTOUR-Unlocked-5-0inch-Android-smart-phone-4-core-NFC-Dual.jpg'
          }
        />
      </ImgWrapper>
      <TestWrapper>
        <ItemInformationWrapper>
          <InformationHeading fontSize={'21px'} margin={'10px 0 0 0'}>
            {searchedItem}
          </InformationHeading>
          <InformationHeading
            fontSize={'14px'}
            fontWeight={'400'}
            margin={'10px 0 10px 0'}
          >
            Average Price
          </InformationHeading>
          <PriceInformationWrapper>
            <ItemPrice>{priceDisplay} €</ItemPrice>
          </PriceInformationWrapper>
        </ItemInformationWrapper>
        <ButtonWrapper>
          <Button size={'small'} variant={'contained'} color={'primary'}>
            Save Item
          </Button>
          <Button size={'small'} variant={'contained'} color={'primary'}>
            Show on ebay
          </Button>
        </ButtonWrapper>
      </TestWrapper>
    </PriceWrapper>
  );
}
