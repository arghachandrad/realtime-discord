import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import "./App.css"
import routes, { renderRoutes } from "./routes"
import AlertNotification from "./shared/components/AlertNotification"

function App() {
  return (
    <>
      <Router>
        {renderRoutes(routes)}
        {/* <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            <Redirect to="/dashboard" />
          </Route>
        </Switch> */}
      </Router>
      <AlertNotification />
    </>
  )
}

export default App
