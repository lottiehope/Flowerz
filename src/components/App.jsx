import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Homepage from './Homepage';
import Navigation from './Header/Navigation';
import Footer from './Footer/Footer';
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navigation />
          <Route name="home" exact path="/" component={Homepage} />
          <Footer />
        </div>
      </Router>
    )
  }
}
export default App;