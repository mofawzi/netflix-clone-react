import "./App.css";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginScreen from "./components/screens/LoginScreen/LoginScreen.jsx";
import { useEffect } from "react";
import { auth } from "./firebase";


function App() {
  const user = null;
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        // User is logged in
        console.log(userAuth);
      } else {

      }
    })

    return unsubscribe;

  }, [])
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
