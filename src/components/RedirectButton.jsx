import React from "react";
import { Navigate } from "react-router-dom";


export default class RedirectButton extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			shouldRedirect: false
		}
	}

	toggleShouldRedirect = () => {
		this.setState({shouldRedirect: !this.state.shouldRedirect});
	}

	render(){

		if (this.state.shouldRedirect){
			return <Navigate to={"/"} />
		} else {
			return (
				<button onClick={this.toggleShouldRedirect}>
					Go to Homepage
				</button>
			)
		}

		// return(
		// 	<>
		// 		<button onClick={this.toggleShouldRedirect}>
		// 			Go to Homepage
		// 		</button>
		// 		{/* <Navigate to={"/"} /> */}
		// 		{this.state.shouldRedirect && <Navigate to={"/"} />}
		// 	</>
			
		// )
	}
}