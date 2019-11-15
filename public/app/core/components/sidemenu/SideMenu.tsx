import React, { PureComponent } from 'react';
import appEvents from '../../app_events';
import TopSection from './TopSection';
import BottomSection from './BottomSection';
import config from 'app/core/config';

const homeUrl = config.appSubUrl || '/';

function communicate() {
  const xhr = new XMLHttpRequest();

  xhr.addEventListener('load', () => {
      // update the state of the component with the result here
      console.log(xhr.responseText);
    });

  xhr.open('GET', 'http://a57af8776073811ea9212020d9632263-1678318201.us-west-2.elb.amazonaws.com/api');
  xhr.send();
}

export class SideMenu extends PureComponent {
  toggleSideMenuSmallBreakpoint = () => {
    appEvents.emit('toggle-sidemenu-mobile');
  };

  render() {
    return [
      <a href={homeUrl} className="sidemenu__logo" key="logo">
        <img src="public/img/grafana_icon.svg" alt="Grafana" />
      </a>,
      <div className="sidemenu__logo_small_breakpoint" onClick={this.toggleSideMenuSmallBreakpoint} key="hamburger">
        <i className="fa fa-bars" />
        <span className="sidemenu__close">
          <i className="fa fa-times" />
          &nbsp;Close
        </span>
      </div>,
      <button key="sidebutton" onClick={communicate} type="button">COMMUNICATE WITH GATEWAY!</button>,
      <TopSection key="topsection" />,
      <BottomSection key="bottomsection" />,
    ];
  }
}
