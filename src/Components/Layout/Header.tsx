import React from 'react';
import { PageHeader } from 'antd';
import history from 'Util/History';
import queryString from 'query-string';
import { pageTitleNameMap, queryPageNameMap } from 'Util/Enums';
import { useLocation } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import ThemeConfig from 'Util/ThemeConfig';

type PropTypes = {
  visibleBurger: boolean;
  toggleDrawer: () => void;
};

const LayoutHeader = (props: PropTypes) => {
  const location = useLocation();

  const parsedQueryParams = queryString.parse(location.search);
  const pageFromSearchQuery = parsedQueryParams.page as keyof typeof queryPageNameMap;
  const currentPageTitle = pageTitleNameMap[location.pathname as keyof typeof pageTitleNameMap];

  return (
    <div css={{ display: 'flex', alignItems: 'center' }}>
      {props.visibleBurger && (
        <MenuFoldOutlined css={styles.hamburgerMenu} onClick={props.toggleDrawer} />
      )}
      <PageHeader
        ghost={true}
        onBack={() => history.goBack()}
        title={currentPageTitle}
        subTitle={queryPageNameMap[pageFromSearchQuery]}
      />
    </div>
  );
};

const styles = {
  hamburgerMenu: {
    display: 'flex',
    fontSize: ThemeConfig.fontSize['2xl'],
    marginLeft: ThemeConfig.spacing[4],
  },
};

export default LayoutHeader;
