import {
  BrowserRouter as Router,
  useRoutes
} from 'react-router-dom';

import NotFound from './pages/NotFound';
import Home from './pages/Home';

const Routes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);
};

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
