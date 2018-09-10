import React, { Component } from "react";
import { Row, Col } from 'reactstrap';
import EntryRowRight from './EntryRowRight.js';
import './ListEntry.css';

class ListEntry extends Component {
    render() {
        return <div>
						<div className="ListEntryRowShadow" />
						<Row className="ListEntryRow">
							<Col xs="12" lg="6">
								<div className="ListEntryRowImage EntryRowImage" style={{ backgroundImage: "url(" + this.props.photo + ")" }} />
							</Col>
							<Col xs="12" lg="6">
								<EntryRowRight title={this.props.title} author={this.props.author} bodyPreview={this.props.bodyPreview} postId={this.props.postId} />
							</Col>
						</Row>
					</div>;
    }
}

export default ListEntry;