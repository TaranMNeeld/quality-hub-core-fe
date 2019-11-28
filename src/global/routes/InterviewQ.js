import React  from 'react';
import { Route, Switch } from 'react-router-dom';

import InterviewLandingPage from '../../InterviewQ/components/Landing Page';
import CoachForm from '../../InterviewQ/components/CoachForm/CoachForm';
import DatePicker from '../../InterviewQ/components/DatePicker';
import CoachList from '../../InterviewQ/components/CoachList';


function InterviewQ({ loggedin, setLoggedin }) {
	return (
			<Switch>
				<Route exact path='/interviewq' component={InterviewLandingPage} />
				<Route path='/hey' component={DatePicker} />
				<Route path='/interviewq/addcoach' component={CoachForm} />
				{/* <PrivateRoute path='/addcoach' component={CoachForm00} /> */}
				<Route path='/interviewq/coachlist' component={CoachList} />
			</Switch>
	);
}

export default InterviewQ;