import React, { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import SearchContainer from '../Components/Container/SearchContainer';
import PriceContainer from '../Components/PriceContainer/PriceContainer';

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');
  const [searchedValue, setSearchedValue] = useState('');
  const [showPrice, setShopPrice] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const headers = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_DE',
      'x-requested-with': 'Accept',
    },
  };
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  async function getSearchResults(proxy, url, searchTerm) {
    const request = await axios.get(proxy + url + searchTerm, headers);
    setData(request.data);
  }

  const baseSearchAPI = `https://api.sandbox.ebay.com/buy/marketplace_insights/v1_beta/item_sales/search?q=`;

  return (
    <React.Fragment>
      <SearchContainer
        SBTitle={'Search for your product and compare the prices on ebay!'}
        onChange={(e) => {
          e.preventDefault();
          setInputValue(e.target.value);
        }}
        onButtonClick={() => {
          getSearchResults(proxy, baseSearchAPI, inputValue);
          console.log(data);
          setInputValue('');
          setShopPrice(true);
        }}
        inputValue={inputValue}
        onSubmit={(e) => {
          e.preventDefault();
          getSearchResults(proxy, baseSearchAPI, inputValue);
          console.log(data);
          setSearchedValue(inputValue);
          setShopPrice(true);
          setInputValue('');
        }}
      />
      {showPrice ? (
        <PriceWrapper>
          <PriceContainer
            display={''}
            searchedItem={searchedValue}
            priceDisplay={'100'}
          />{' '}
        </PriceWrapper>
      ) : null}
    </React.Fragment>
  );
}
