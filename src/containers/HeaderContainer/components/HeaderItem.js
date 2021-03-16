import React from 'react';

const HeaderItem = ({ _class, name, imgSrc, id }) => {
	return (
		<div className={_class} key={id}>
			<img src={imgSrc} alt={name} />
		</div>
	);
};

export default HeaderItem;
