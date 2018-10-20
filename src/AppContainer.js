import React, { Component } from "react";
import TopMenu from "./TopMenu.js";
import AppOverlay from "./AppOverlay";
import "./AppContainer.css";
import "bootstrap/dist/css/bootstrap.min.css";

class AppContainer extends Component {
	render() {
		return (
			<div class="AppContainer">
				<TopMenu entries={this.props.topMenuEntries} />
				<div class="ChildContainer container shadow-lg ">
					<AppOverlay>
						{this.props.children}
					</AppOverlay>
				</div>
			</div>
		);
	}
}

export default AppContainer;