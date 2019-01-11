import React, { Component } from "react";
import {
	Navbar,
	NavbarBrand
} from "reactstrap";
import "./Header.css";
import ConfigManager from "./ConfigManager";
import LoadingManager from "./LoadingManager";
import { Link } from 'react-router-dom';
import TopMenu from "./TopMenu.js";
import { API_ROOT } from "./ApiConf";


class Header extends Component {

	constructor() {
		super();
		this.state = {
			siteConfig: [],
			topMenuEntries: []
		};
	}

	componentDidMount() {
		LoadingManager.start("Header");
		fetch(`${API_ROOT}/api/config/main`)
			.then(results => {
				return results.json();
			})
			.then(data => {
				if (data.status != "OK") {
					return;
				}
				ConfigManager.set(data.config);
				this.setState({ siteConfig: data.config.site, topMenuEntries: data.config.menu.top_menu });
				document.title = this.state.siteConfig.site_name;
				LoadingManager.finish("Header");
			});
	}

	render() {
		return (
			<div className="Header">
				<Navbar color="light" light expand="md">
					<NavbarBrand tag={Link} to="/">{this.state.siteConfig.site_name}</NavbarBrand>
					<TopMenu entries={this.state.topMenuEntries} />
				</Navbar>
			</div>
		);
	}
}

export default Header;