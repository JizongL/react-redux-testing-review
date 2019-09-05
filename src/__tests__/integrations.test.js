import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

let wrapped;
beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [ { name: 'Fetch #1' }, { name: 'Fetch #2' } ]
	});
	wrapped = mount(
		<Root>
			<App />
		</Root>
	);
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', () => {
	// Attempt to render the *entire* app

	// find the 'fetchComments' button and click it
	wrapped.find('.fetch_comments').simulate('click');

	// setTimeout is used because moxio introduces a little delay fetching the data.
	// so setTimeout makes Jest to have a little delay so it won't throw error.
	//  Expect to find a list of comments!

	moxios.wait(() => {
		wrapped.update();

		expect(wrapped.find('li').length).toEqual(2);
		console.log(wrapped.find('li').length);
		// done();
		wrapped.unmount();
	});
});
