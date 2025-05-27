import React from 'react';
import Link from 'next/link';

const ContactsPage: React.FC = () => {
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-3xl font-bold mb-4">Contact Us</h1>
			<p className="mb-4">
				We would love to hear from you! If you have any questions, comments, or
				feedback, please feel free to reach out to us.
			</p>
			<p className="mb-4">
				You can contact us via email at{' '}
				<a href="mailto:lananz_beauty" className="text-blue-500">
					{' '}
					lananz_beauty
				</a>{' '}
				or by phone at{' '}
				<a href="tel:+1234567890" className="text-blue-500">
					+1234567890
				</a>
				.
			</p>{' '}
		</div>
	);
};
export default ContactsPage;