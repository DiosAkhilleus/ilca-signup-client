import './App.css';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Admin from './Components/Admin/Admin.jsx';
import NotFound from './Components/NotFound.jsx';
import TimeslotPost from './Components/Admin/TimeslotPost.jsx';
import AdminEventView from './Components/Admin/AdminEventView.jsx';
import SailorEventView from './Components/Timeslot/SailorEventView';

function App() {

  return (

    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/ilca-signup-client' component={Admin} />
        <Route exact path='/ilca-signup-client/admin/create' component={TimeslotPost} />
        <Route path='/ilca-signup-client/signup/:id' children={<SailorEventView />}/>
        <Route path='/ilca-signup-client/admin/event/:ilcaNum' children={<AdminEventView />}/>
        <Route path='/' component={NotFound}/>
      </Switch>
    </HashRouter>
   
  );
}

export default App;
