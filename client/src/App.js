import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GameList from './components/GameList/GameList'
import Navbar from './components/Navbar/Navbar'
import Main from './components/Main/Main'
import FormAuth from './components/FormAuth/FormAuth'
import Profile from './components/Profile/Profile'
import GameSettings from './components/GameSettings/GameSettings'
import GroupList from './components/GroupList/GroupList'
import GroupDetail from './components/GroupDetail/GroupDetail'
import ChatPrivate from './components/ChatPrivate/ChatPrivate'
import Footer from './components/Footer/Footer'
import './App.css';
import TestWebSocket from "./components/TestWebSocket/TestWebSocket";

import React from "react";
import WebSock from "./components/TestWebSocket/Test";
import GlitchTest from "./components/Main/GlitchTest";
import Chat from "./components/Chat/Chat";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/">
            {/*<Main />*/}
            <GlitchTest/>
          </Route>

          <Route exact path="auth/signin">
            <FormAuth />
          </Route>

          <Route exact path="auth/signup">
            <FormAuth />
          </Route>

          <Route exact path="users/:userId/profile">
            <Profile />
          </Route>

          <Route exact path="/games">
            <GameList />
          </Route>

          <Route exact path="/games/:gamesId">
            <GameSettings />
          </Route>

          <Route exact path="/groups">
            <GroupList />
          </Route>

          <Route exact path="/groups/:groupsId">
            <GroupDetail />
          </Route>
        </Switch>
        <Chat />
        <Footer />
      </div>
      {/*<WebSock/>*/}
    </Router>




  );
}

export default App
