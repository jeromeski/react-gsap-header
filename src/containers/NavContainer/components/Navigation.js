import React, { Fragment } from 'react';
import NavItem from './NavItem';
import { navItems } from '../../../constants';


const Navigation = () => {
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
