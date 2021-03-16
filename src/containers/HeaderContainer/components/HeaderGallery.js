import React from 'react';
import hgImg1 from '../../../assets/images/img_landscape-01-large.jpg';
import hgImg2 from '../../../assets/images/img_landscape-02-large.jpg';
import hgImg3 from '../../../assets/images/img_landscape-03-large.jpg';
import HeaderItem from './HeaderItem';

const HeaderGallery = () => {
	const leftHeaderItems = [
		{ id: '40ab36b6', _class: 'hg__image hg__image--l', imgSrc: hgImg1, name: '' },
		{ id: '40ab3904', _class: 'hg__image hg__image--m', imgSrc: hgImg2, name: '' },
		{ id: '40ab3a12', _class: 'hg__image hg__image--s', imgSrc: hgImg3, name: '' }
	];

	const rightHeaderItems = [
		{ id: '40ab3b02', _class: 'hg__image hg__image--l', imgSrc: hgImg1, name: '' },
		{ id: '40ab3bde', _class: 'hg__image hg__image--m', imgSrc: hgImg2, name: '' },
		{ id: '40ab3cba', _class: 'hg__image hg__image--s', imgSrc: hgImg3, name: '' }
	];

	return (
		<div className='header__gallery'>
			<div className='hg__left'>
				{leftHeaderItems.map((item) => (
					<HeaderItem key={item.id} {...item} />
				))}
			</div>
			<div className='hg__right'>
				{rightHeaderItems.map((item) => (
					<HeaderItem key={item.id}  {...item} />
				))}
			</div>
		</div>
	);
};

export default HeaderGallery;
