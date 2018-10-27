import React, { Component } from "react";
import Header from "./Header.js";
import { Row, Col } from "reactstrap";
import "./SinglePostPage.css";
import ConfigManager from "./ConfigManager";
import SinglePostEntryRowRight from "./SinglePostEntryRowRight";
import LoadingManager from "./LoadingManager";
import { API_ROOT } from "./ApiConf";

class SinglePostPage extends Component {
	constructor() {
		super();
		this.state = {
			post: [],
		};
	}

	componentDidMount() {
		LoadingManager.start("SinglePostPage");
		fetch(`${API_ROOT}/api/post/${this.props.match.params.postId}`)
			.then(results => {
				return results.json();
			})
			.then(data => {
				if (data.status != "OK") {
					return;
				}
				let post = <Row className="EntryRow">
							<h1 className="SingleEntryTitle">
								{data.post.meta.title}
							</h1>
							
					<div className="SinglePostEntryContent">
						<div className="SinglePostEntryImage EntryRowImage" style={{ backgroundImage: `url('${data.post.meta.photo}')` }} />
						<div dangerouslySetInnerHTML={{__html: data.post.content}}>
						</div>
						<div className="EntryRowRightDetails">
							<span className="EntryRowRightDetailsAuthorDesc">
								Submitted by: <span className="EntryRowRightDetailsAuthorName">
									{data.post.meta.author}
								</span>
							</span>
						</div>
					</div>
				</Row>;
				document.title = data.post.meta.title + " • " + ConfigManager.get().site.site_name;
				this.setState({ post: post });
				LoadingManager.finish("SinglePostPage");
			});
	}

    render() {
		return <div>
			<div className="Entry">
				{this.state.post}
			</div>
		</div>;
    
	}
}

export default SinglePostPage;
