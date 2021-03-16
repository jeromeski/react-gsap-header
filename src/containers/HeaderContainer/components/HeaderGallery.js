import React from 'react';
import HeaderItem from './HeaderItem';
import {leftHeaderItems} from '../../../constants';
import {rightHeaderItems} from '../../../constants';

const HeaderGallery = () => {
  

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
