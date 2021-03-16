import React from 'react';

const NavItem = (props) => {
	console.log(props);
	return (
		<li key={props.id}>
			<a href='#0'>{props.title}</a>
		</li>
	);
};

export default NavItem;
