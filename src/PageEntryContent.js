import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./PageEntryContent.css";

class PageEntryContent extends Component {
	render() {
		return <div className = "ListEntryRowRight PageEntryContent" >
				<h1 className="EntryRowRightTitle">
					{this.props.title}
				</h1>
				<div className="EntryRowRightDetails">
					<span className="EntryRowRightDetailsAuthorDesc">
						<span className="EntryRowRightDetailsAuthorName">
							{this.props.author}
						</span>
					</span>
				</div>
				<div className="PageEntryContentText">
							<p dangerouslySetInnerHTML={{__html: this.props.body}}>
							</p>
				</div>
			</div>;
	}
}

export default PageEntryContent;
