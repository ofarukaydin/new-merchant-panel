import React, { memo } from 'react';
import Searchbar from 'Components/Searchbar';
import { CSSObject } from '@emotion/core';
import ThemeConfig from 'Util/ThemeConfig';

type PropTypes = {
  handleSearch: (value: string) => void;
};

const CustomHeader = ({ handleSearch }: PropTypes) => {
  return (
    <div css={styles.container}>
      <div />
      <div css={styles.searchBarContainer}>
        <Searchbar onChange={(e) => handleSearch(e)} />
      </div>
    </div>
  );
};

const styles: CSSObject = {
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: ThemeConfig.spacing[4],
  },
  searchBarContainer: {
    display: 'flex',
  },
};

export default memo(CustomHeader);
