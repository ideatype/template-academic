import React, { Component } from "react";
import ListEntry from './ListEntry.js';
import './EntryList.css';
import LoadingManager from "./LoadingManager";
import { API_ROOT } from "./ApiConf";


class EntryList extends Component {

	constructor() {
		super();
		this.state = {
			posts: [],
		};
	}

	componentDidMount() {
		LoadingManager.start("EntryList");
		fetch(`${API_ROOT}/api/posts`)
			.then(results => {
				return results.json();
			}).then(data => {
				if (data.status != "OK") {
					return;
				}
				let posts = data.posts.map((post) => {
					return (
						<ListEntry title={post.meta.title} author={post.meta.author} photo={post.meta.photo} postId={post.fileName} bodyPreview={post.excerpt} />
					)
				})
				this.setState({
					posts: posts
				});
				LoadingManager.finish("EntryList");
		})
	}

	render() {
        return <div className="container-fluid EntryList">
						{this.state.posts}
					</div>;
	}
}

export default EntryList;
