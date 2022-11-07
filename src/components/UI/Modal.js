import React, { Component } from "react";
import styled from "styled-components/macro";
const Wrapper = styled.section`
	position: fixed;
	top: 78px;
	left:0;
	/* padding:32px 16px 32px 16px; */
	width: 100%;
	height:100%;
	background: rgba(57, 55, 72, 0.22);
	z-index: 2;
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
