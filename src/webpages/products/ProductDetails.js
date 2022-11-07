import React from "react";
import styled from "styled-components/macro";
import { COLORS, FONTS } from "../../components/constants";
import { connect } from "react-redux";
import { addToCart } from "actions/cartActions";
import { Link } from "react-router-dom";
const ProductDisplayLayout = styled.section`
  width: 88%;
  gap: 20px;
  display: flex;
  margin: 0 auto;
  margin-top: 40px;
  padding-bottom: 40px;
  color: ${COLORS.BLACK};
  background-color: ${COLORS.BACKGROUND.WHITE};
  font-size: ${FONTS.SIZES.TWENTY_FOUR};
`;
const ProductImage = styled.div`
  height: 511px;
  height: 610px;
  object-fit: cover;
  flex: 3;

  > img {
    width: 100%;
    height: 100%;
  }
`;
const ProductTile = styled.img`
  width: 79px;
  height: 80px;
`;

const Gallery = styled.aside`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  width: 80px;
  > img {
    margin-bottom: 5px;
    cursor: pointer;
  }
`;

const ProductInfo = styled.article`
  padding: 2px;
  flex: 2;
  `;

const ProductName = styled.h3`
    font-size: ${FONTS.FAMILIES.RALEWAY};
    font-weight: ${FONTS.WEIGHTS.LARGER};
    font-size: ${FONTS.SIZES.THIRTY};
    margin-bottom: 16px;
`
 const Brand = styled.h3`
 	font-family: ${FONTS.FAMILIES.RALEWAY};
      font-size: ${FONTS.SIZES.THIRTY};
      font-weight: ${FONTS.WEIGHTS.MEDIUM};
      margin-bottom: 43px;
     
 `
const ColorSwatch = styled.div`
  margin-top: 18px;
  > h5 {
    font-family: ${FONTS.FAMILIES.ROBOTO_CONDENSED};
    font-weight: ${FONTS.WEIGHTS.LARGER};
    font-size: ${FONTS.SIZES.EIGHTEEN};
    margin-bottom: 3px;
  }
  > p {
    font-family: ${FONTS.FAMILIES.ROBOTO_CONDENSED};
    font-weight: ${FONTS.WEIGHTS.LARGEST};
    font-size: ${FONTS.SIZES.EIGHTEEN};
  }
  > span {
    display: inline-block;
    height: 36px;
    width: 36px;
    margin-right: 8px;
    text-align: center;
    line-height: 36px;
    border: 1px solid gray;
    border-radius: 1px;
    margin-bottom: 36px;
    cursor: pointer;
  }
`;

const SizeAttributes = styled.div`
  > h5 {
    font-family: ${FONTS.FAMILIES.ROBOTO_CONDENSED};
    font-weight: ${FONTS.WEIGHTS.LARGER};
    font-size: ${FONTS.SIZES.EIGHTEEN};
	margin-bottom:8px;
  }
  >span {
    font-family: ${FONTS.FAMILIES.ROBOTO};
    font-weight: ${FONTS.WEIGHTS.LARGEST};
    font-size: ${FONTS.SIZES.EIGHTEEN};
    border: 1px solid ${COLORS.BLACK};
    width: 40px;
    height: 28px;
    display: inline-block;
    margin-right: 4px;
    margin-bottom: 24px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
    &:hover {
      background-color: ${COLORS.BLACK};
      color: ${COLORS.WHITE};
    }
  }
`;
const DescriptionText = styled.div`
  font-family: ${FONTS.FAMILIES.ROBOTO};
  font-weight: ${FONTS.WEIGHTS.MEDIUM};
  font-size: ${FONTS.SIZES.SIXTEEN};
  color: ${COLORS.BLACK};
  margin-top: 18px;
  max-width: fit-content;
`;
const AddToCartBtn = styled(Link)`
  width: 292px;
  height: 52px;
  line-height: 52px;
  display: inline-block;
  text-decoration: none;
  text-align: center;
  margin-top: 20px;
  background-color: ${COLORS.GREEN};
  font-family: ${FONTS.FAMILIES.RALEWAY};
  font-size: ${FONTS.SIZES.SIXTEEN};
  font-weight: ${FONTS.WEIGHTS.LARGER};
  margin-bottom: 40px;
  border: none;
  padding: 4px;
  cursor: pointer;
  color: ${COLORS.WHITE};
  text-transform: uppercase;
  > span {
    font-family: ${FONTS.FAMILIES.RALEWAY};
    font-size: ${FONTS.SIZES.SIXTEEN};
    font-weight: ${FONTS.WEIGHTS.LARGER};
  }
`;
const Price = styled.div`
  > h5 {
    font-family: ${FONTS.FAMILIES.ROBOTO_CONDENSED};
    font-weight: ${FONTS.WEIGHTS.LARGEST};
    font-size: ${FONTS.SIZES.EIGHTEEN};
    line-height: 18px;
    line-height: 18px;
    text-transform: uppercase;
	margin-bottom:10px;
  }

  > p {
    font-family: ${FONTS.FAMILIES.RALEWAY};
    font-size: ${FONTS.SIZES.TWENTY_FOUR};
    font-weight: ${FONTS.WEIGHTS.LARGEST};
    margin-bottom: 10px;
    &:span {
      display: block;
      margin: 10px 0;
      &:last-child {
        margin-bottom: 36px;
      }
    }
  }
`;
class ProductDetails extends React.Component {
  state = {
    selectedColor: "",
    selectedSize: "",
    galleryImagePosition: 0,
    product: {},
  };

  changeImage = (position) => {
    this.setState({ galleryImagePosition: position });
  };

  componentDidMount() {
    const query = `query getProductBySlug($slug: String!) {
		product(id: $slug) {
			id
			name
			inStock
			gallery
			description
			category
			attributes {
			  name
			  items {
				value
			  }
			}
			prices {
			  amount
			  currency {
				label
				symbol
			  }
			}
			brand
		}
	}`;
    const variables = { slug: this?.props?.params?.id };
    fetch(`${process.env.REACT_APP_URL}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ query, variables }),
    })
      .then((response) => response.json())
      .then((result) => this.setState({ product: result.data.product }))
      .catch((error) => console.log(error));
  }

  render() {
    const PRODUCT = this.state.product || this.props.product;
    if (PRODUCT?.name)
      return (
        <>
          <ProductDisplayLayout>
            <Gallery>
              {PRODUCT?.gallery?.map((image, index) => (
                <ProductTile
                  key={index.toString()}
                  src={image}
                  onClick={() => this.changeImage(index)}
                  alt="gallery-thumbnails"
                />
              ))}
            </Gallery>
            <ProductImage>
              <img
                src={PRODUCT.gallery[this.state.galleryImagePosition]}
                alt="chosen-item"
              />
            </ProductImage>
            <ProductInfo>
              <ProductName>{PRODUCT.name}</ProductName>
              <Brand>{PRODUCT.brand}</Brand>
              {PRODUCT?.attributes?.length > 0 &&
                PRODUCT.attributes.map((attribute, index) => (
                  <div key={index.toString()}>
                    {attribute?.name === "Size" && (
                      <SizeAttributes>
                        <h5>SIZE:</h5>
                        {attribute?.items.map((size) => (
                        <span id={size.value}
							onClick=
							{(event) => {
							  console.log(event.target.id);
							}}
							key={size.value}>
                             
                              {size.value}
                        </span>
                          
                        ))}
                      </SizeAttributes>
                    )}
                    {attribute?.name === "Color" && (
                      <ColorSwatch>
                        <h5>COLOR:</h5>
                        {attribute?.items?.map((color) => {
                          return (
                            <span
                              key={color.value}
                              style={{
                                backgroundColor: color.value,
                              }}
                              onClick={(event) => {
                                this.setState({
                                  selectedColor:
                                    event.target.style.backgroundColor,
                                });
                                setTimeout(() => {
                                  console.log(this.state.selectedColor);
                                }, 2000);
                              }}
                            ></span>
                          );
                        })}
                      </ColorSwatch>
                    )}
                  </div>
                ))}
              <Price>
                <h5>Price:</h5>
                <p>
                  <span>{PRODUCT.prices[0].currency.symbol}</span>
                  <span>{PRODUCT.prices[0].amount}</span>
                </p>
              </Price>

              <AddToCartBtn
                to="/cart"
                onClick={() => this.props.addToCart(PRODUCT)}
              >
                <span>Add To Cart</span>
              </AddToCartBtn>
              <DescriptionText>
                <div
                  dangerouslySetInnerHTML={{
                    __html: PRODUCT.description,
                  }}
                ></div>
              </DescriptionText>
            </ProductInfo>
          </ProductDisplayLayout>
        </>
      );
    return (
      <>
        <h1>Product loading</h1>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  ...state.productReducer,
});
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
