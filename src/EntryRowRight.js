import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './EntryRowRight.css';

class EntryRowRight extends Component {
	render() {
        return <div className="ListEntryRowRight EntryRowRight">
						<h1 className="EntryRowRightTitle">
				<Link to={`/post/${this.props.postId}`}>{this.props.title}</Link>
						</h1>
						<div className="EntryRowRightDetails">
							<span className="EntryRowRightDetailsAuthorDesc">
								<span className="EntryRowRightDetailsAuthorName">
						{this.props.author}
								</span>
							</span>
						</div>
						<div className="EntryRowRightText">
							<p dangerouslySetInnerHTML={{__html: this.props.bodyPreview}}>
							</p>
						</div>
					</div>;
	}
}

export default EntryRowRight;