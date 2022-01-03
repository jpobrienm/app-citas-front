import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Citas from './pages/CitasPage';
import Navbar from './pages/Header';
import Padecimientos from './pages/PadecimientosPage';
import NotFound from './pages/NotFoundPage';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Redirect to="/citasReactivas" />
            </Route>
            <Route path="/citasReactivas" component={Citas} />
            <Route path="/padecimientos" component={Padecimientos} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
