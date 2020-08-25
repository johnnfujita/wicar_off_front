import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './cointainers/Home'
import Activate from './cointainers/Activate'
import Login from './cointainers/Login'
import ResetPassword from './cointainers/ResetPassword'
import ResetPasswordConfirm from './cointainers/ResetPasswordConfirm'
import Signup from './cointainers/Signup'
import Layout from './hocs/Layout'

const App = () => (
  <Layout>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/activate/:uid/:token' component={Activate}/>
      <Route exact path='/login' component={Login}/>
      <Route exact path='/reset-password' component={ResetPassword}/>
      <Route exact path='/password/reset/confirm/:uid/:token' component={ResetPasswordConfirm}/>
      <Route exact path='/signup' component={Signup}/>
    </Switch>
  </Layout>
)

export default App
