import React, { Component } from "react";

class FetchData extends Component {
	state = {
		data: null,
		error: null,
	};

	getProducts() {
		const variables = {
			category: { title: this.props.category },
		};
		const query = `query getProductsByCategory($category: CategoryInput!) {
                category(input: $category) {
                  name
                  products {
                    id
                    name
                    description
                    brand
                    gallery
                    inStock
                    attributes {
                        name
                        items {
                            value
                        }
                    }
                    prices {
                        currency {
                            symbol
                            label
                        }
                        amount
                    }
                }
            }
        }
        `;
		fetch(
			"http://localhost:4000/graphql" || `${process.env.REACT_APP_URL}`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					query,
					variables,
				}),
			}
		)
			.then((response) => response.json())
			.then((results) => {
				this.setState({ data: results.data.category });
			})
			.catch((error) => {
				this.setState({ error });
			});
	}
	componentDidMount() {
		this.getProducts();
	}

	componentDidUpdate(prevProps) {
		if (prevProps.category !== this.props.category) {
			this.getProducts();
		}
	}

	render() {
		const { data, error } = this.state;
		const { children } = this.props;

		if (error) {
			return <div>Error loading data</div>;
		}

		if (!data) {
			return <div>Loading...</div>;
		}

		return children(data);
	}
}

export default FetchData;
