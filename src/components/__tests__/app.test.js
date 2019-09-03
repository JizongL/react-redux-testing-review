import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;
beforeEach(() => {
	wrapped = shallow(<App />);
});

it('Shows a comment box', () => {
	// return an array of the component, there is one CommentBox component inside App
	// so the value return should be 1.
	expect(wrapped.find(CommentBox).length).toEqual(1);
});
it('Shows a comment list', () => {
	expect(wrapped.find(CommentList).length).toEqual(1);
});
