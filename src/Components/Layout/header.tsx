import React from 'react';
import { PageHeader } from 'antd';
import { history } from 'Util/history';
import queryString from 'query-string';
import { PageTitleNameMap, QueryPageNameMap } from 'Util/enums';
import { useLocation } from 'react-router-dom';
import { MenuFoldOutlined } from '@ant-design/icons';
import { ThemeConfig } from 'Util/theme-config';

type PropTypes = {
  visibleBurger: boolean;
  toggleDrawer: () => void;
};

export const LayoutHeader = (props: PropTypes): JSX.Element => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search);
  const pageFromSearchQuery = parsedQueryParams.page as keyof typeof QueryPageNameMap;
  const currentPageTitle = PageTitleNameMap[location.pathname as keyof typeof PageTitleNameMap];

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {props.visibleBurger && (
        <MenuFoldOutlined css={styles.hamburgerMenu} onClick={props.toggleDrawer} />
      )}
      <PageHeader
        ghost
        onBack={() => history.goBack()}
        title={currentPageTitle}
        subTitle={QueryPageNameMap[pageFromSearchQuery]}
      />
    </div>
  );
};

const styles = {
  hamburgerMenu: {
    display: 'flex',
    fontSize: ThemeConfig.FontSize['2xl'],
    marginLeft: ThemeConfig.Spacing[4],
  },
};
