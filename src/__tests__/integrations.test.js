import React from 'react';
import { mount } from 'enzyme';
import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';

beforeEach(() => {
	moxios.install();
	moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
		status: 200,
		response: [ { name: 'Fetch #1' }, { name: 'Fetch #2' } ]
	});
});

afterEach(() => {
	moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
	// Attempt to render the *entire* app
	const wrapped = mount(
		<Root>
			<App />
		</Root>
	);
	// find the 'fetchComments' button and click it
	wrapped.find('.fetch_comments').simulate('click');

	// setTimeout is used because moxio introduces a little delay fetching the data.
	// so setTimeout makes Jest to have a little delay so it won't throw error.
	//  Expect to find a list of comments!
	//
	setTimeout(() => {
		wrapped.update();
		console.log(wrapped.find('li').length);
		expect(wrapped.find('li').length).toEqual(2);

		wrapped.unmount();
		done();
	}, 3300);
	// moxios.wait(function() {
	// 	wrapped.update();
	// 	console.log(wrapped.find('li').length);
	// 	expect(wrapped.find('li').length).toEqual(2);
	// 	done();
	// 	wrapped.unmount();
	// });
});
