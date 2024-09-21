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
		return(
			<>
				<button onClick={this.toggleShouldRedirect}>
					Go to Homepage
				</button>
				{this.state.shouldRedirect && <Navigate to={"/"} />}
			</>
			
		)
	}
}