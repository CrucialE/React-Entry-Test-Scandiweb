import React, { Component } from "react";
import { Provider } from "react-redux";
import { Switch,Route } from "react-router-dom";
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
					
					<Switch>
						<Route exact path="/" component={Category}/>
						<Route path="/:category" component={Home} />
						<Route path="/:category/:id" component={ProductDetails} />
						<Route path="/cart"   component= {Cart} />

															
					</Switch>
					
				
				
			</Provider>
		);
	}
}
export default App;