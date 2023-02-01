 import React from "react";
import {
	useLocation, 	
    useParams,
	useHistory,
} from "react-router-dom";

 const ElementWrapper = (props) => {
	const params = useParams();
	const location = useLocation();
    const history = useHistory();
 	const Element = props.routeElement;

 	return (
		<Element
 			params={params}
			location={location}
            history = {history}
			{...props}
		/>
	);
 };


export default ElementWrapper;

