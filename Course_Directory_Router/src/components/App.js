import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

// App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" render={ () => <About title="About Page"/>} />
          <Route exact path="/teachers" component={Teachers} />
          <Route path="/teachers/:topic/:name" component={Featured} />
          <Route path="/courses" component={Courses} />
          <Route component={NotFound} />
        </Switch>
    </div>
  </BrowserRouter>
);

export default App;
/*
C:\Users\Iftekhar A Chowdhury\Desktop\react-router-4
\react-router-4\1-Getting-Started-with-React-Router
\3-Introducing-the-Project\course-directory
*/
