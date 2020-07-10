import React from 'react';
import styled from '@emotion/styled';
import { Button } from '@material-ui/core';

const PriceWrapper = styled.div`
  width: 50%;
  height: 250px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: 1;
  z-index: -5000;
  display: ${(props) => props.display};
  background-color: #fff;
  margin-top: 25px;
  border: 1px solid #aaa;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
`;

const ImgWrapper = styled.div`
  width: 50%;
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
  height: 20%;
  width: 50%;
`;

const InformationHeading = styled.h2`
  font-size: ${(props) => props.fontSize};
  text-align: center;
  font-weight: ${(props) => props.fontWeight};
`;

const ItemPrice = styled.h2`
  font-size: 50px;
  color: #111111;
  text-align: center;
  margin: 5px 0 0 0;
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
          <InformationHeading fontSize={'21px'}>
            {searchedItem}
          </InformationHeading>
          <InformationHeading fontSize={'16px'} fontWeight={'400'}>
            Avarage Price
          </InformationHeading>
          <PriceInformationWrapper>
            <ItemPrice>{priceDisplay} €</ItemPrice>
          </PriceInformationWrapper>
        </ItemInformationWrapper>
        <ButtonWrapper>
          <Button variant={'contained'} color={'primary'}>
            Save Item
          </Button>
          <Button variant={'contained'} color={'primary'}>
            Show on ebay
          </Button>
        </ButtonWrapper>
      </TestWrapper>
    </PriceWrapper>
  );
}
