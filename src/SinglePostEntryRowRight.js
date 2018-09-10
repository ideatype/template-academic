import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./SinglePostEntryRowRight.css";

class SinglePostEntryRowRight extends Component {
	render() {
		return <div className="ListEntryRowRight SinglePostEntryRowRight">
				<h1 className="EntryRowRightTitle">
					{this.props.title}
				</h1>
				<div className="EntryRowRightDetails">
					<span className="EntryRowRightDetailsAuthorDesc">
						Submitted by: <span className="EntryRowRightDetailsAuthorName">
							{this.props.author}
						</span>
					</span>
				</div>
				<div className="SinglePostEntryRowRightText">
							<p dangerouslySetInnerHTML={{__html: this.props.body}}>
							</p>
				</div>
			</div>;
	}
}

export default SinglePostEntryRowRight;
