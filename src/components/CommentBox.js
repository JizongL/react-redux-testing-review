import React, { Component } from 'react';
import { connect } from 'react-redux';

class CommentBox extends Component {
	render() {
		return (
			<form>
				<h4>Add a Comment</h4>
				<textarea />
				<div>
					<button>Submit Comment</button>
				</div>
			</form>
		);
	}
}

export default CommentBox;
