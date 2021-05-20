import { Link } from 'gatsby';
import styled from 'styled-components';

export const Navigation = styled.nav`
  height: 10vh;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  padding: 0 5vw;

  ${({ out }) =>
    out
      ? `
      box-shadow: 0px 1px 2px lightgrey;
      background-color: #fff;
      -webkit-transition: background-color 1s;
      -ms-transition: background-color 1s;
      transition: background-color 1s;
    `
      : `
      background-color: transparent;
    `}

  @media (max-width: 768px) {
    height: 8vh;
    justify-content: space-between;
  }
`;

export const Tabs = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 100%;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Popover = styled.div`
  width: 200px;
  height: 0px;
  background: #fff;
  position: absolute;
  opacity: 0;
  top: 8vh;
  color: ${({ theme }) => theme.color.grey};
  font-weight 400;
  border: 1px solid rgb(234, 233, 242);
  box-shadow: rgba(65, 62, 101, 0.3) 0px 52px 54px 0px;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  border-top: 4px solid ${({ theme }) => theme.color.darker_primary};
  cursor: pointer;
  border-radius: 10px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const Tab = styled.div`
  padding: 0 18px;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SubTab = styled.div`
  padding-bottom: 10px;
  padding-left: 30px;
  padding-right: 30px;
  padding-top: 10px;
`;

export const PopoverTab = styled(Tab)`
  position: relative;
  &:hover {
    ${Popover} {
      opacity: 1;
      height: initial;
      transition: height 0.05s;
    }
  }
`;

export const Button = styled.div`
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(105, 104, 113, 0);
  margin: 0;
  line-height: inherit;
  text-transform: none;
  -webkit-appearance: button;
  padding: 0.85rem 1.75rem;
  border-radius: 5px;
  font-weight: 500;
  letter-spacing: -0.66px;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  transform: perspective(1px) translateZ(0px);
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  color: rgb(255, 255, 255);
  background-color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  outline: none !important;
  font-size: 16px;
  min-width: 141px !important;
  height: 45px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    transition: background-color 0.2s ease-out;
  }
`;

export const MyLink = styled(Link)`
  background-color: transparent;
  transition: all 0.3s ease-out 0s;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.color.grey} !important;
`;

export const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding-right: 10vw;
  padding-left: 10px;

  @media (max-width: 768px) {
    display: flex;
  }
`;

export const Hamburger = styled.div`
  background-color: #111;
  width: 30px;
  height: 3px;
  transition: all 0.3s linear;
  align-self: center;
  position: relative;
  transform: ${(props) => (props.open ? 'rotate(-45deg)' : 'inherit')};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #111;
    content: '';
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${(props) => (props.open ? 'rotate(-90deg) translate(-10px, 0px)' : 'rotate(0deg)')};
    top: -10px;
  }

  ::after {
    opacity: ${(props) => (props.open ? '0' : '1')};
    transform: ${(props) => (props.open ? 'rotate(90deg) ' : 'rotate(0deg)')};
    top: 10px;
  }
`;

export const Sidebar = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 5vh;
    background-color: #fff;
    border-top: 1px solid lightgrey;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${(props) => (props.open ? '-100%' : '0')};
  }
`;

export const SidebarSubTabs = styled.div`
  height: 0px;
  overflow: hidden;
`;

export const SidebarTab = styled.div`
  font-size: 1.5em;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  display: none;
  @media (max-width: 768px) {
    display: flex;
  }
  &:hover {
    ${SidebarSubTabs} {
      height: initial;
      transition: height 0.05s;
    }
  }
`;

export const MobileTabs = styled.div`
  flex-grow: 1;
  display: none;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
  @media (max-width: 768px) {
    display: flex;
  }
`;
