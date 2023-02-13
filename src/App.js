import React, { Component,Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import FetchData from "./components/utils/fetchData"
import HeaderWrapper from "./components/Header";
import GlobalStyle from "components/GlobalStyles";
import ProductDetails from "webpages/products/ProductDetails";
import Category from "webpages/productListing/Category";
import Home from "webpages/productListing/Home";
import Cart from "webpages/cart/Cart";
class NotFound extends Component {
	render() {
		return <h1>Not Found</h1>;
	}
}

class App extends Component {
	state = {
		products: null,
	};

	render() {
		return (
			<Fragment>
				<GlobalStyle />

				<HeaderWrapper />
				<Switch>
					
					<Route  path="/shopping-cart" exact render={() => <Cart />} />
					<Route
						path="/:category/:id"
						render={({ match }) => (
							<ProductDetails slug={match.params.id} />
						)}
					/>
					<Route
						path="/:category"
						render={({ match }) => (
							<FetchData category={match.params.category}>
								{(productData) => (
									<Category productData={productData} />
								)}
							</FetchData>
						)}
					/>
                    <Route path="/" exact render={() => <Home />} />
					<Route render={() => <NotFound />} />
				</Switch>
			</Fragment>
		);
	}
}
export default App;
