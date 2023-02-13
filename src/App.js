import React, { Component } from "react";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
// import ElementWrapper from "./components/utils/withRouter";
import HeaderWrapper from "./components/Header";
import GlobalStyle from "components/GlobalStyles";
import ProductDetails from "webpages/products/ProductDetails";
import Category from "webpages/productListing/Category";
import Home from "webpages/productListing/Home";
import Cart from "webpages/cart/Cart";
import store from "./store";



class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<GlobalStyle />
				
					<HeaderWrapper />
								
						<Route path ="/" exact component={Home}/>
						<Route path ="/:category" exact component={Category} />
						<Route path = "/category/:product/:id" exact component={ProductDetails}/>
						<Route  path ="/cart" exact component={Cart} />
				
			</Provider>
		);
	}
}
export default App;