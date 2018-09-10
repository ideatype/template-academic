import React, { Component } from "react";
import TopMenu from "./TopMenu.js";
import "./AppContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AppContainer extends Component {
	render() {
		return (
			<div class="AppContainer">
				<TopMenu entries={this.props.topMenuEntries} />
				<div class="ChildContainer container shadow-lg ">
					{this.props.children}
				</div>
			</div>
		);
	}
}

export default AppContainer;