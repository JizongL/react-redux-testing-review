import React, { Component } from 'react';

export default (CommentBox) => {
	class ComposedComponent extends Component {
		render() {
			return <CommentBox />;
		}
	}
	return ComposedComponent;
};

// Image we are in CommentBox.js
