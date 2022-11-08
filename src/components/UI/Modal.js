import React, { Component } from "react";
import styled from "styled-components/macro";
const Wrapper = styled.section`
  position: fixed;
	top: 80px;
	left: 0;
	width: 100vw;
	height: 100%;
  background: rgba(57, 55, 72, 0.22);
  z-index: 999;
  
`;
export default class Modal extends Component {
  render() {
    return (
      <Wrapper id="modal" {...this.props}>
        {this.props.children}
      </Wrapper>
    );
  }
}
