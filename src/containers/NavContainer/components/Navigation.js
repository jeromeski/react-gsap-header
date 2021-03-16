import React, { Fragment } from 'react';
import NavItem from './NavItem';

const Navigation = () => {

  const navItems = [
		{ id: 'cec7eea4', title: 'Our Values' },
		{ id: 'cec7f0d4', title: 'Portfolio' },
		{ id: 'cec7f1c4', title: 'Blog' },
		{ id: 'cec7f296', title: 'How We Work' },
		{ id: 'cec7f354', title: 'Contact' }
	];


	return (
		<Fragment>
			<div className='logo'>
				<span className='logo__img'></span>
				<span className='logo__text'>Bella</span>
			</div>
			<div className='burger'>
				<button className='burger__open'>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>
			<nav className='main-nav'>
				<ul>
					{navItems.map((item) => (
						<NavItem key={item.id} {...item} />
					))}
				</ul>
			</nav>
		</Fragment>
	);
};

export default Navigation;
