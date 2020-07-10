import React from 'react';
import { Searchbar } from 'Components/searchbar';
import { CSSObject } from '@emotion/core';
import { ThemeConfig } from 'Util/theme-config';

type PropTypes = {
  handleSearch: (value: string) => void;
};

export const CustomHeader = ({ handleSearch }: PropTypes): JSX.Element => {
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
    paddingBottom: ThemeConfig.Spacing[4],
  },
  searchBarContainer: {
    display: 'flex',
  },
};
