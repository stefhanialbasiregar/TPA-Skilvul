import './index.css';
import Navbar from './Navbar';
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import About from './About';
import Blog from './Blog';
import Portfolio from './Portfolio';
import Footer from './Footer';

function App() {
  
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
        <div className="App">
          <Navbar />

          <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/portfolio">
                <Portfolio />
              </Route>
            </Switch>
          </div>

          <Footer/>
        </div>
        </Router>
      </div>
    </div>


  );
}

export default App;
