import React, { Component } from "react";
import styled from "styled-components/macro";
import { FONTS, COLORS } from "../constants";
// import {Link} from 'react-router-dom'
// import {Link} from 'react-router-dom'
import { connect } from "react-redux";
const MiniCartLayout = styled.aside`
	width:204px;
	/* height:677px;  */
	/* gap: 20px; */
	display: flex;
	justify-content:flex-start;
	flex-direction: column;
	color: ${COLORS.BLACK};
	background-color: ${COLORS.WHITE};
	font-size: ${FONTS.SIZES.TWENTY_FOUR};
	padding:32px 16px;
	margin-right: 40px;
`;

const Title = styled.h5`
	
	font-family: ${FONTS.FAMILIES.RALEWAY};
	font-weight: ${FONTS.WEIGHTS.LARGEST};
	font-size:${FONTS.SIZES.SIXTEEN};
	color: ${COLORS.BLACK};
	margin-bottom: 32px;
	> span{
     font-weight:${FONTS.WEIGHTS.MEDIUM};
	 font-size:${FONTS.SIZES.SIXTEEN};
	 font-weight:${FONTS.WEIGHTS.LARGE};
	}
`
 const CartItem = styled.div`
	display: flex;
	padding: 24px 0;
	width: 100%;
	
`;
const ItemDescription = styled.div`
	display: flex;
	flex-direction: column;
	flex: 3;
`;
const Brand = styled.h3`
	font-family: ${FONTS.FAMILIES.RALEWAY};
	font-weight: ${FONTS.WEIGHTS.LARGER};
	font-size: ${FONTS.SIZES.EIGHTEEN};
	margin-bottom: 16px;

`;
const ProductName = styled.h4`
	font-family: ${FONTS.FAMILIES.RALEWAY};
	font-weight: ${FONTS.WEIGHTS.NORMAL};
	font-size: ${FONTS.SIZES.SIXTEEN};
	margin-bottom: 20px;
`;
const PriceLabel = styled.h4`
	font-family: ${FONTS.FAMILIES.ROBOTO_CONDENSED};
	font-weight: ${FONTS.WEIGHTS.MEDIUM};
	font-size: ${FONTS.SIZES.SIXTEEN};
	color: ${COLORS.BLACK};
	margin-bottom: 20px;
`;
const Size = styled.div`
	font-family: ${FONTS.FAMILIES.RALEWAY};
	font-weight: ${FONTS.WEIGHTS.NORMAL};
	font-size: ${FONTS.SIZES.FOURTEEN};
	color: ${FONTS.BLACK};
	> span {
		display: inline-block;
		font-family: ${FONTS.FAMILIES.SOURCE_SANS_PRO};
		font-size : ${FONTS.SIZES.FOURTEEN};
		font-weight:${FONTS.WEIGHTS.NORMAL};
		height:24px;
		width: 24px;
		text-align: center;
		line-height:24px;
		margin-right: 4px;
		padding:1px;
		border: 1px solid gray;
		/* border-radius: 1px; */
		cursor: pointer;
		&:hover {
			background-color: ${COLORS.BLACK};
			color: ${COLORS.WHITE};
		}
	}
`
const Color = styled.div`
	margin-top: 7px;
	> h3 {
		font-family: ${FONTS.FAMILIES.RALEWAY};
		font-weight: ${FONTS.WEIGHTS.MEDIUM};
		font-size: ${FONTS.SIZES.FOURTEEN};
		margin-bottom: 3px;
	}
	> span {
		display: inline-block;
		height: 20px;
		width: 20px;
		margin-right: 2px;
		border: 1px solid gray;
		text-align: center;
		border-radius: 1px;
		cursor: pointer;
	}
`;

const QuantityIcons = styled.div`
	padding: 2px;
	display: flex;
	width: 34px;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
	margin-right: 24px;
	> span:not(:nth-child(2)) {
		height: 45px;
		width: 45px;
		text-align: center;
		line-height: 45px;
		margin-bottom: 4px;
		border: 1px solid ${COLORS.GRAY};
		cursor: pointer;
	}
`;

const CartImage = styled.img`
	padding: 2px;
	flex: 1;
	width: 200px;
	height: 288px;
	position: relative;
	/* border:2px solid yellow; */
`;
const CheckOutDetails = styled.div`
	> ul {
		list-style-type: none;
	}
	> li {
		margin: 8px 0;
		font-size: ${FONTS.FAMILIES.TWENTY_FOUR};
		font-family: ${FONTS.FAMILIES.RALEWAY};
		font-weight: ${FONTS.WEIGHTS.LARGEST};
	}
`;
const OrderButton = styled.button`
	text-decoration: none;
	margin-top: 14px;
	background-color: ${COLORS.GREEN};
	font-family: ${FONTS.FAMILIES.RALEWAY};
	font-size: ${FONTS.SIZES.SIXTEEN};
	font-weight: ${FONTS.WEIGHTS.LARGER};
	margin-bottom: 40px;
	/* width:100%; */
	border: none;
	padding: 16px 32px;
	cursor: pointer;
	color: ${COLORS.WHITE};
	text-transform: uppercase;
`;

class Cart extends Component {
	state = {
		tax: 0,
		quantity: 0,
		total: 0,
	};

	generateTax = () => {
		this.state.tax = this.state.total * 0.21;
	};

	generateTotalAmount = () => {};
	generateTotalQuantity = () => {};

	render() {
		// console.log(this.props)
		return (
			<MiniCartLayout>
				<Title>MyBag.<span>3items</span></Title>
				<CartItem>
					<ItemDescription>
						<Brand>Apollo</Brand>
						<ProductName>Running Short</ProductName>
						<PriceLabel>$50</PriceLabel>
						<Size>
							<h5>Size:</h5>
							<span>X</span>
							<span>L</span>
							<span>M</span>
							<span>XXL</span>
						</Size>

						<Color>
							<h3>Color:</h3>
							<span></span>
							<span></span>
							<span></span>
						</Color>
					</ItemDescription>
					<QuantityIcons>
						<span>+</span>
						<span>1</span>
						<span>-</span>
					</QuantityIcons>
				</CartItem>

				<CheckOutDetails>
					<ul>
						{/* <li>Tax 21%:{this.state.tax}</li>
						<li>Quantity:{this.state.quantity}</li> */}
						<li>Total: {this.state.total}</li>
					</ul>

					<OrderButton>Order</OrderButton>
				</CheckOutDetails>

				{/* <OrderButton>Order</OrderButton> */}
			</MiniCartLayout>
		);
	}
}

const mapStateToProps = (state) => ({
	...state.cartReducer,
});

// const mapDispatchToProps = {}
//We are not passing the second argument because at the moment we don't have any action creators to be connected to the Component.
export default connect(mapStateToProps)(Cart);


