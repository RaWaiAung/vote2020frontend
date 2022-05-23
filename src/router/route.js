import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from '../pages/state/index'
import Candidate from '../pages/district/index'
import Party from '../pages/candidate/index'
import Carty from '../pages/party/index'
import CandidateCreate from '../pages/candidate/create'
// import Township from '../pages/township';
// import VoterList from '../pages/voter-list'
// import About from '../pages/about'

const Routes = () => {
    return <Switch>
        <Route path="/state" exact>
            <Home />
        </Route>
        <Route path="/district" exact>
            <Candidate />
        </Route>
{/*         
        <Route path="/township" exact>
            <Township />
        </Route> */}
        <Route path="/party" exact>
            <Party />
        </Route>
        <Route path="/candidate" exact={true}><Carty/></Route>
        <Route path="/candidate/create" exact={true}><CandidateCreate/></Route>
{/*         
        <Route path="/voter-list" exact>
            <VoterList />
        </Route> */}
        {/* <Route path="/about" exact>
            <About />
        </Route> */}
    </Switch>
}

export default Routes;