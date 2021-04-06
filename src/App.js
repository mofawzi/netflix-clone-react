import "./App.css";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginScreen from "./components/screens/LoginScreen/LoginScreen.jsx";


function App() {
  const user = null;
  return (
    <div className="App">
      
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
        )}
        
      </Router>
    </div>
  );
}

export default App;
