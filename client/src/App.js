import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { checkAuthUser, getUserFromGoogle } from './redux/AC/usersAC'
import GameList from './components/GameList/GameList'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import FormAuth from './components/FormAuth/FormAuth'
import Profile from './components/Profile/Profile'
import GameSettings from './components/GameSettings/GameSettings'
import GroupList from './components/GroupList/GroupList'
import GroupDetail from './components/GroupDetail/GroupDetail'
import Footer from './components/Footer/Footer'
import FormSignIn from './components/FormSignIn/FormSignIn'
import Profilelist from './components/Profilelist/Profilelist'
import PrivateRoute from './components/PrivateRouter/PrivateRouter'

function App() {
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)

  useEffect(() => {
    dispatch(checkAuthUser())
    dispatch(getUserFromGoogle())
    console.log(auth, 11111111)
  }, [])

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route exact path="/auth/signin">
            <FormSignIn />
          </Route>

          <Route exact path="/auth/signup">
            <FormAuth />
          </Route>

          <PrivateRoute exact path="/profile">
            <Profile />
          </PrivateRoute>

          <PrivateRoute exact path="/users">
            <Profilelist />
          </PrivateRoute>
          <PrivateRoute exact path="/users/:userId">
            <Profile />
          </PrivateRoute>

          {/* <PrivateRoute exact path="/users">
            <Profilelist />
          </PrivateRoute> */}

          <PrivateRoute exact path="/games">
            <GameList />
          </PrivateRoute>

          <PrivateRoute exact path="/games/:gamesId">
            <GameSettings />
          </PrivateRoute>

          <PrivateRoute exact path="/groups">
            <GroupList />
          </PrivateRoute>

          <PrivateRoute exact path="/groups/:groupsId">
            <GroupDetail />
          </PrivateRoute>

          <PrivateRoute path="*">
            <h3>Ой! Кажется, такой страницы не существует ^___^ </h3>
          </PrivateRoute>
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
