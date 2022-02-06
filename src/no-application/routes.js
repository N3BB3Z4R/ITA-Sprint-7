import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from '../App';

const Routing = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default Routing;