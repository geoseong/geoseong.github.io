import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Root from './components/app';

export default (
	<Router>
		<div>
			<Route exact path="/" component={(props) => <Root {...props} notebookId={'0-BC575AB8E2AB9833!1937'} />}/>
			<Route exact path="/gcp" component={Root}/>
			<Route path="/gcp_:sectionId" component={Root}/>
			<Route exact path="/dev" component={Root}/>
			<Route path="/dev_:sectionId" component={Root}/>
			<Route exact path="/aws" component={Root}/>
			<Route path="/aws_:sectionId" component={Root}/>
		</div>
	</Router>
)
