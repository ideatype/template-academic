import React, { Component } from "react";
import MainPage from "./MainPage";
import AppContainer from "./AppContainer";
import SinglePostPage from "./SinglePostPage";
import PagePage from "./PagePage";
import "bootstrap/dist/css/bootstrap.min.css";
import LoadingManager from "./LoadingManager";
import ConfigManager from "./ConfigManager";
import "./AppLayout.css";
import { BrowserRouter, Route } from "react-router-dom";
import { API_ROOT } from "./ApiConf";

class AppLayout extends Component {

	constructor() {
		super();
		this.state = {
			siteConfig: [],
			topMenuEntries: []
		};
	}

	componentDidMount() {
		LoadingManager.start("Main");
		fetch(`${API_ROOT}/api/config/main`)
			.then(results => {
				return results.json();
			})
			.then(data => {
				if (data.status != "OK") {
					return;
				}
				ConfigManager.set(data.config);
				this.setState({
					siteConfig: data.config.site,
					topMenuEntries: data.config.menu.top_menu
				});
				document.title = this.state.siteConfig.site_name;
				LoadingManager.finish("Main");
			});
	}

	render() {
		return <div className="AppLayout">
				<AppContainer topMenuEntries={this.state.topMenuEntries}>
					<main>
						<Route path="/" exact component={MainPage} />
						<Route path="/post/:postId" exact component={SinglePostPage} />
						<Route path="/page/:pageId" exact component={PagePage} />
					</main>
				</AppContainer>
			</div>;
	}
}

export default AppLayout;