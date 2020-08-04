import React, { useState } from 'react';
import {
  SearchContainerWrapper,
  SearchBar,
  SearchBarWrapper,
  SearchBarTitle,
  SearchButton,
  SearchBarButtonWrapper,
  SwitchWrapper,
  SwitchLabel,
} from '../Container/SearchContainerComponents';
import SearchIcon from '@material-ui/icons/Search';
import Switch from 'react-switch';

export default function SearchContainer({
  recievedData,
  onChange,
  onSubmit,
  onClick,
  inputValue,
  isChecked,
  handleSwitch,
}) {
  const [placeholder, setPlaceholder] = useState(
    'Please enter the product name (e.g. Playstation 4)'
  );

  const buttonStyle = {
    roundedButton: {
      borderTopRightRadius: 25,
      borderBottomRightRadius: 25,
      height: 40,
    },
  };

  return (
    <SearchContainerWrapper inputValue={inputValue} recievedData={recievedData}>
      <SearchBarWrapper>
        <SearchBarTitle>{'Whats my Stuff Worth?'}</SearchBarTitle>
        <SearchBarButtonWrapper onSubmit={onSubmit} autoComplete={'on'}>
          <SearchBar
            placeholder={placeholder}
            value={inputValue}
            autoFocus={true}
            onChange={onChange}
            onFocus={() => {
              setPlaceholder('');
            }}
            onBlur={() => {
              setPlaceholder(
                'Please enter the product name (e.g. Playstation 4)'
              );
            }}
          />
          <SearchButton
            onClick={onClick}
            style={buttonStyle.roundedButton}
            size={'medium'}
            variant='contained'
            color={'primary'}
          >
            <SearchIcon />
          </SearchButton>
        </SearchBarButtonWrapper>
        <SwitchWrapper>
          <SwitchLabel
            marginRight={'10px'}
            opacity={isChecked ? '50%' : '100%'}
            color={'#ddd'}
          >
            Used
          </SwitchLabel>
          <Switch
            checked={isChecked}
            onChange={handleSwitch}
            checkedIcon={false}
            uncheckedIcon={false}
            onColor={'#ddd'}
            offColor={'#dbd'}
          />
          <SwitchLabel
            marginLeft={'10px'}
            opacity={!isChecked ? '50%' : '100%'}
            color={'#ddd'}
          >
            New
          </SwitchLabel>
        </SwitchWrapper>
      </SearchBarWrapper>
    </SearchContainerWrapper>
  );
}
