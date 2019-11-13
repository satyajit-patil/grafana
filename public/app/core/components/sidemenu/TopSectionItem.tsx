import React, { FC } from 'react';
import SideMenuDropDown from './SideMenuDropDown';

export interface Props {
  link: any;
}

function getTitle(sub) {
  if (sub === 'Home') {
    return <p>Dashboards</p>;
  } else if (sub === 'New') {
    return <p>Manage</p>;
  } else if (sub === 'Help') {
    return <p>Account</p>;
  }
  return <p></p>;
}

const TopSectionItem: FC<Props> = props => {
  const { link } = props;
  return (
    <div className="withTitle">
      {getTitle(link.text)}
      <div className="sidemenu-item dropdown">
        <a className="sidemenu-link" href={link.url} target={link.target}>
          <span className="icon-circle sidemenu-icon">
              <p>{link.text}</p>
          </span>
        </a>
        <SideMenuDropDown link={link} />
      </div>
    </div>
  );
};

export default TopSectionItem;
