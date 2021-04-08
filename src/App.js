import "./App.css";
import HomeScreen from "./components/screens/HomeScreen/HomeScreen";
import ProfileScreen from "./components/screens/ProfileScreen/ProfileScreen.jsx";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import LoginScreen from "./components/screens/LoginScreen/LoginScreen.jsx";
import { useEffect } from "react";
import { auth } from "./firebase";
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './store/reducers/UserReducer'


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // User is logged in
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }))
      } else {
        dispatch(logout())
      }
    })

    return unsubscribe;

  }, [dispatch])
  return (
    <div className="App">

      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
            <Route exact path="/profile">
              <ProfileScreen />
            </Route>
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
