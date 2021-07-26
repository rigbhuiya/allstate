import './App.css';
import NavBar from './components/navbar'
import SideBar from './components/sidebar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React, { useState } from 'react';
import SignIn from './components/pages/signin';
import SignUp from './components/pages/signup';
import Homepage from './components/pages/homepage';
import ForgotPassword from './components/pages/forgot-password';


function App() {

  const adminUser = {
    email: "admin@admin.com",
    password: "admin"
  }

  const [user, setUser] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const Login = details => {

    console.log(details);
    if (details.email == adminUser.email && details.password == adminUser.password) {
      console.log("Logged in");
      setUser({
        email: details.email,
      })
    }
    else
      console.log("details dont match");

  }

  const Logout = () => {
    console.log("Logout");
    setUser({ email: "" })
  }

  return (

    <div>
      <Router>


        <Switch>
          {(user.email != "") ? (
            <div>
              <div>
                <NavBar Logout={Logout} />
              </div>
              <div className="logged-in">
                <SideBar />
                <Homepage /> 
              </div>
               


            </div>
          ) :
            (<Route path='/' exact component={() => <SignIn Login={Login} error={error} />}></Route>)
          }

          <Route path='/signup' exact component={SignUp}></Route>
          <Route path='/forgotpassword' exact component={ForgotPassword}></Route>
        </Switch>

      </Router>

    </div>
    // <React.Fragment>

    //   <Router>

    //     <NavBar />

    //     <Switch>
    //       <Route path='/signin' exact component={SignIn}></Route>
    //       <Route path='/signup' exact component={SignUp}></Route>
    //       <Route path='/forgotpassword' exact component={ForgotPassword}></Route>
    //     </Switch>

    //   </Router>

    // </React.Fragment>



  );
}

export default App;
