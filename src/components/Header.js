import React, { Component } from "react";
import styled from "styled-components/macro";
import { COLORS } from "./constants";
import Navigation from "./UI/Navigation";
const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  margin-bottom: 60px;
  background: ${COLORS.WHITE};
`;
export default class Header extends Component {
  render() {
    return (
      <HeaderWrapper>
        <Navigation />
      </HeaderWrapper>
    );
  }
}
