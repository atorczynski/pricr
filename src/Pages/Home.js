import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import SearchContainer from '../Components/Container/SearchContainer';
import PriceContainer from '../Components/PriceContainer/PriceContainer';
import { calcPrice } from '../lib/calcAveragePrice';
import { isWidthUp } from '@material-ui/core';

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [itemPrice, setItemPrice] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPrice, setShopPrice] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const headers = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_DE',
      'x-requested-with': 'Accept',
    },
  };

  useEffect(() => {
    async function getData() {
      try {
        setLoading(true);
        console.log(loading);
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const response = await axios.get(
          proxy +
            `https://api.sandbox.ebay.com/buy/marketplace_insights/v1_beta/item_sales/search?q=${searchQuery}`,
          headers
        );
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setShopPrice(true);
      }
    }
    getData();
  }, [searchQuery]);

  const updateSearch = (e) => {
    setInputValue(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    console.log(searchQuery);
  };

  useEffect(() => {
    const itemAverage = calcPrice(data.itemSales);

    setItemPrice(itemAverage);
  }, [data]);

  return (
    <React.Fragment>
      <SearchContainer
        SBTitle={'Search for your product and compare the prices on ebay!'}
        onChange={updateSearch}
        onClick={(e) => {
          getSearch(e);
        }}
        onSubmit={(e) => {}}
        inputValue={inputValue}
      />
      {showPrice ? (
        <PriceWrapper>
          <PriceContainer
            display={''}
            searchedItem={searchQuery}
            priceDisplay={itemPrice}
          />{' '}
        </PriceWrapper>
      ) : null}
    </React.Fragment>
  );
}
