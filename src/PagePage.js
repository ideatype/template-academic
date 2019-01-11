import React, { Component } from "react";
import Header from "./Header.js";
import { Row, Col, Container } from "reactstrap";
import "./PagePage.css";
import LocaleManager from "./LocaleManager";
import ConfigManager from "./ConfigManager";
import PageEntryContent from "./PageEntryContent";
import LoadingManager from "./LoadingManager";
import { API_ROOT } from "./ApiConf";

class PagePage extends Component {
	constructor() {
		super();
		this.state = {
			page: [],
		};
	}

	componentDidMount() {
		LoadingManager.start("PagePage");
		let langSuffix = LocaleManager.getAPILangSuffix();
		fetch(`${API_ROOT}/api/page/${this.props.match.params.pageId}${langSuffix}`)
			.then(results => {
				return results.json();
			})
			.then(data => {
				if (data.status != "OK") {
					return;
				}
				let page = <Row className="PageEntryRow">
						<div className="PageEntryImage">
							<div className="PageEntryImage" style={{ backgroundImage: `url('${data.page.meta.photo}')` }} />
					</div>
					<Container>
						<PageEntryContent title={data.page.meta.title} author={data.page.meta.author} body={data.page.content} />
					</Container>
				</Row>;
				document.title = data.page.meta.title + " • " + ConfigManager.get().site.site_name;
				this.setState({ page: page });
				LoadingManager.finish("PagePage");
			});
	}

    render() {
		return <div>
			<div className="PageEntryShadow" />
			<div className="Entry">
				{this.state.page}
			</div>
		</div>;
    
	}
}

export default PagePage;
