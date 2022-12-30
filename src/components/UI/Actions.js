import React, { Component } from "react";
import styled from "styled-components/macro";
import CartIcon from "./CartIcon";
import CurrencySwitcher from "./CurrencySwitcher";
const Wrapper = styled.div`
	display: flex;
	gap: 20px;
	justify-content: flex-start;
	align-items: center;
	flex: 1;
`;
export default class Actions extends Component {
	render() {
		return (
			<Wrapper>
				<CurrencySwitcher />
				<CartIcon />
			</Wrapper>
		);
	}
}
