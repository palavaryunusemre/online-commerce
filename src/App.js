import { Container } from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import Router from './routers/Router';
import './components/css/styles.css';
import './components/css/response.css';

function App() {
  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
