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
  SBTitle,
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

  return (
    <SearchContainerWrapper inputValue={inputValue} recievedData={recievedData}>
      <SearchBarWrapper>
        <SearchBarTitle>{SBTitle}</SearchBarTitle>
        <SearchBarButtonWrapper onSubmit={onSubmit}>
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
            style={{ borderRadius: 0 }}
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
          >
            New
          </SwitchLabel>
        </SwitchWrapper>
      </SearchBarWrapper>
    </SearchContainerWrapper>
  );
}
