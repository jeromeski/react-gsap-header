import React from 'react';
import HeaderGallery from './HeaderGallery';

const Header = () => {
	return (
		<header datacolor='#ACB7AE'>
			<h1>
				<span>Consectetur</span>
				<span>Adipisicing</span>
				<span>Elites</span>
			</h1>
			<p className='subtitle'>
				VOLUPTAS AUT <br />& VERITASIS NOSTRUM
			</p>
			<div className='decor__circle'></div>
			<HeaderGallery />
			<div className='cta__circle'>
				<div className='cta__circle--logo'></div>
			</div>
		</header>
	);
};

export default Header;
