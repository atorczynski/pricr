import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import SearchContainer from '../Components/Container/SearchContainer';
import PriceContainer from '../Components/PriceContainer/PriceContainer';
import { calcPrice, evalDates, getImage } from '../lib/lib';
import { Loader } from '../Components/SpinLoader/SpinLoader';
import InformationContainer from '../Components/InformationContainer/InformationContainer';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';

const iconStyle = {
  largeIcon: {
    width: 100,
    height: 100,
  },
};

const InformationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 50px;
  width: 100%;
`;

const InformationText = styled.p`
  width: 80%;
  font-weight: 400;
  opacity: 70%;
  text-align: center;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const conditionIds = {
  new: 'conditionIds%3a%7b1000%7c2000%7d',
  used: 'conditionIds%3a%7b3000%7c6000%7d',
};

export default function Home({ imageUrl }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [itemPrice, setItemPrice] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isFirstFetch, setFirstFetch] = useState(true);
  const [isChecked, setChecked] = useState(false);
  const [condition, setCondition] = useState(conditionIds.used);

  const isFirstRender = useRef(true);

  const apiKey = process.env.REACT_APP_API_KEY;

  const headers = {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'X-EBAY-C-MARKETPLACE-ID': 'EBAY_DE',
      'x-requested-with': 'Accept',
    },
  };

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
    } else if (searchQuery) {
      async function getData() {
        try {
          setLoading(true);
          const proxy = 'https://cors-anywhere.herokuapp.com/';
          const response = await axios.get(
            proxy +
              `https://api.sandbox.ebay.com/buy/marketplace_insights/v1_beta/item_sales/search?q=${searchQuery}&filter=${condition}&limit=100`,
            headers
          );
          setData(response.data);
        } catch (error) {
          console.log(error);
        } finally {
          setLoading(false);
        }
      }
      getData();
    }
  }, [searchQuery, condition]);

  const updateSearch = (e) => {
    setInputValue(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setSearchQuery(inputValue);
    console.log(searchQuery);
    setFirstFetch(false);
  };

  useEffect(() => {
    const itemAverage = calcPrice(data.itemSales);

    setItemPrice(itemAverage);
  }, [data]);

  function handleSwitch() {
    if (isChecked === false) {
      setChecked(true);
      setCondition(conditionIds.new);
      console.log(conditionIds.new);
    } else {
      setChecked(false);
      setCondition(conditionIds.used);
      console.log(conditionIds.used);
      console.log(data);
      console.log(evalDates(data.itemSales));
      console.log(getImage(data.itemSales));
    }
  }

  return (
    <React.Fragment>
      <SearchContainer
        SBTitle={'Search for your product and compare the prices on ebay!'}
        onChange={updateSearch}
        onClick={(e) => {
          getSearch(e);
        }}
        onSubmit={(e) => {
          getSearch(e);
        }}
        inputValue={inputValue}
        isChecked={isChecked}
        handleSwitch={() => {
          handleSwitch();
        }}
      />

      {isFirstFetch || !searchQuery ? null : loading ? (
        <Loader />
      ) : data.total === 0 || !searchQuery ? (
        <PriceWrapper>
          <h3>No Results Found</h3>
        </PriceWrapper>
      ) : (
        <PriceWrapper>
          <PriceContainer
            itemImage={getImage(data.itemSales)}
            display={''}
            searchedItem={searchQuery}
            priceDisplay={itemPrice}
            lastSoldDate={evalDates(data.itemSales, 'lastDate')}
          />{' '}
        </PriceWrapper>
      )}
      {!isFirstFetch && searchQuery ? null : (
        <InformationWrapper>
          <InformationContainer>
            <MonetizationOnOutlinedIcon style={iconStyle.largeIcon} />
            <h2>Fast and Easy Price Estimate</h2>
            <InformationText>
              About to sell your stuff? Want to know what you will get by
              auctionating it? View your estimated revenue by simply searching
              your item in our search.
            </InformationText>
          </InformationContainer>
          <InformationContainer>
            <MonetizationOnOutlinedIcon style={iconStyle.largeIcon} />
            <h2>Fast and Easy Price Estimate</h2>
            <InformationText>
              About to sell your stuff? Want to know what you will get by
              auctionating it? View your estimated revenue by simply searching
              your item in our search.
            </InformationText>
          </InformationContainer>
          <InformationContainer>
            <MonetizationOnOutlinedIcon style={iconStyle.largeIcon} />
            <h2>Fast and Easy Price Estimate</h2>
            <InformationText>
              About to sell your stuff? Want to know what you will get by
              auctionating it? View your estimated revenue by simply searching
              your item in our search.
            </InformationText>
          </InformationContainer>
        </InformationWrapper>
      )}
    </React.Fragment>
  );
}
