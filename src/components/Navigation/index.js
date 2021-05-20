import React, { useState, useEffect, useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby';
import {
  Navigation,
  Tabs,
  Tab,
  SubTab,
  PopoverTab,
  Toggle,
  Hamburger,
  Sidebar,
  MyLink,
  Popover,
  Button,
  MobileTabs,
  SidebarTab,
  SidebarSubTabs,
} from './style';
import data from './data.json';

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [, rerender] = useState();
  const isOutRef = useRef(false);

  useEffect(() => {
    const cb = () => {
      if (window.pageYOffset === 0 && isOutRef.current) {
        isOutRef.current = false;
        rerender(false);
      } else if (window.pageYOffset > 0 && !isOutRef.current) {
        isOutRef.current = true;
        rerender(true);
      }
    };
    window.addEventListener('scroll', cb);
  }, []);

  return (
    <Navigation out={isOutRef.current}>
      <MyLink to="/">
        <StaticImage src="../../images/elwynlogo.png" alt="alt" placeholder="blurred" height={25} />
      </MyLink>
      <Tabs>
        {data.links.map((linkData, l) => {
          if (linkData.children) {
            return (
              <PopoverTab key={l}>
                <MyLink to={linkData.url}>
                  {linkData.name} <span style={{ fontSize: 12, marginTop: -4 }}>▼</span>
                </MyLink>
                <Popover>
                  {linkData.children.map((child, c) => (
                    <SubTab key={c}>
                      <MyLink to={child.url} style={{ fontWeight: 300 }}>
                        {child.name}
                      </MyLink>
                    </SubTab>
                  ))}
                </Popover>
              </PopoverTab>
            );
          }
          return (
            <Tab key={l}>
              <MyLink to={linkData.url}>{linkData.name}</MyLink>
            </Tab>
          );
        })}
        <Tab>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </Tab>
      </Tabs>
      <MobileTabs>
        <Tab>
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </Tab>
        <Toggle sidebarOpen={sidebarOpen} onClick={() => setSidebarOpen(!sidebarOpen)}>
          <Hamburger open={sidebarOpen} />
        </Toggle>
        <Sidebar open={!sidebarOpen}>
          {data.links.map((linkData, l) => {
            if (linkData.children) {
              return (
                <SidebarTab key={l}>
                  <MyLink style={{ fontSize: '1em' }} to={linkData.url}>
                    {linkData.name}
                    <span style={{ fontSize: 15, position: 'relative', top: -2 }}>▼</span>
                  </MyLink>
                  <SidebarSubTabs>
                    {linkData.children.map((child, c) => (
                      <SubTab key={c}>
                        <MyLink to={child.url} style={{ fontWeight: 300 }}>
                          {child.name}
                        </MyLink>
                      </SubTab>
                    ))}
                  </SidebarSubTabs>
                </SidebarTab>
              );
            }
            return (
              <SidebarTab key={l}>
                <MyLink style={{ fontSize: '1em' }} to={linkData.url}>
                  {linkData.name}
                </MyLink>
              </SidebarTab>
            );
          })}
        </Sidebar>
      </MobileTabs>
    </Navigation>
  );
};

export default Navbar;
