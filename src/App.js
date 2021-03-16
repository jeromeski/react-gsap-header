import React, { Fragment } from 'react';
import BgContainer from './containers/BgContainer';
import HeaderContainer from './containers/HeaderContainer';
import NavContainer from './containers/NavContainer';

const App = () => {
	return (
		<Fragment>
			<NavContainer />
			<div id='main'>
				<HeaderContainer />
			</div>
			<BgContainer />
		</Fragment>
	);
};

export default App;
