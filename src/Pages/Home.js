import React, { useState } from 'react';
import axios from 'axios';
import SearchContainer from '../Components/Container/SearchContainer';


const apiKey = process.env.REACT_APP_API_KEY;

export default function Home() {
  const [data, setData] = useState({});
  const [inputValue, setInputValue] = useState('');

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
      }}
      inputValue={inputValue}
      onSubmit={(e) => {
        e.preventDefault();
        getSearchResults(proxy, baseSearchAPI, inputValue);
        console.log(data);
        setInputValue('');
      }}
    />
  );
}
