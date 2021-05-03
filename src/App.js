import React, { useState } from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import firebase from './firebase.js';
import Main from './main.js';
import Postform from './post.js'

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();


export default function App() {

  const [user, setUser] = useState(null)
  const [uid, setUid] = useState(null)

  const login = () => {
    console.log("Pandya")
    auth.signInWithPopup(provider)
      .then((result) => {
        const user = result.user;
        setUser(user)
        setUid(user.uid)
      });
  }

  const logout = () => {
    auth.signOut()
      .then(() => {
        setUser(null)
      });
  }

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/post" component={() => <Postform uid={uid} />} />
          <Route exact path="/" component={() => <Main isAuthed={user} {...{ login }} {...{ logout }} uid={uid} />} />
        </Switch>
      </main>
    </Router>
  )

}