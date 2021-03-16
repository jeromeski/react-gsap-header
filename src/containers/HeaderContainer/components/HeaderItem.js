import React from 'react';

const HeaderItem = ({ _class, name, imgSrc }) => {
	return (
		<div className={_class}>
			<img src={imgSrc} alt={name} />
		</div>
	);
};

export default HeaderItem;
