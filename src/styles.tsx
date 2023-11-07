import { Link } from "react-router-dom";
import styled from "styled-components";
import { lighten } from "polished";
import type * as CSS from "csstype";
import { media } from "./media";

const base = 12;
const purple = "#9d00d6";

type MarginProps = {
  bottom?: number;
  top?: number;
  left?: number;
  right?: number;
  flexDirection?: CSS.Property.FlexDirection;
  alignItems?: CSS.Property.AlignItems;
  justifyContent?: CSS.Property.JustifyContent;
};

export const Margin = styled.div<MarginProps>`
  margin-top: ${({ top }) => (top ? top * base : 0)}px;
  margin-bottom: ${({ bottom }) => (bottom ? bottom * base : 0)}px;
  margin-right: ${({ right }) => (right ? right * base : 0)}px;
  margin-left: ${({ left }) => (left ? left * base : 0)}px;

  ${({ flexDirection }) =>
    flexDirection ? `flex-direction: ${flexDirection};` : ""}
  ${({ alignItems }) => (alignItems ? `align-items: ${alignItems};` : "")}
  ${({ justifyContent }) =>
    justifyContent ? `justify-content: ${justifyContent};` : ""}
`;

export const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 36px;

  ${media.md} {
    font-size: 24px;
    text-align: center;
  }
`;

export const NavWrapper = styled.nav`
  display: flex;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
`;

export const NavItem = styled.div`
  margin: 0 24px;
  padding: 24px 0;
  text-decoration: none;
  overflow: hidden;

  &::after {
    content: "";
    padding-top: 4px;
    border-bottom: 2px solid ${purple};
    display: block;
    transform: translateX(-100%);
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    &::after {
      transform: translateX(0);
    }
  }
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  color: ${purple};
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const TimerText = styled.div`
  font-size: 60px;
  font-weight: 300;

  ${media.md} {
    font-size: 48px;
  }
`;

export const GetAppLink = styled.div`
  text-decoration: none;
  color: white;
  height: 200px;
  width: 200px;
  border-radius: 200px;
  background-color: ${purple};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  &:hover {
    background-color: ${lighten(0.1, purple)};
  }

  ${media.md} {
    width: 150px;
    height: 150px;
    border-radius: 150px;
    font-size: 18px;
  }
`;
