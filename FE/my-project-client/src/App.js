import React from 'react';
// import NavBar from './Components/NavBar'
import Login from './Components/Login'
import './App.css';
import { Route } from 'react-router-dom'
import { BrowserRouter, Switch, Link } from 'react-router-dom'
import Signup from './Components/Signup'
import Home from './Components/Home'
import { thisExpression } from '@babel/types';

class App extends React.Component{
  constructor(){
    super()
    this.state = {

    }
  }

  userInfo = (userData) => {
    
    this.setState({
      user: userData
    })
    
  }

  componentDidMount(){
    const token = localStorage.getItem('token')

    const reqObj = {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    }

    fetch('http://localhost:3000/current_user',reqObj )
    .then(resp => resp.json())
    .then(data => 
        this.setState({
          user: data
        })
    )
  }

  therapistFetch = (formData) => {
    
    const token = localStorage.getItem('token')
    this.setState({
      ...this.state, therapistData: formData
    })
    const therapistObj = {
      method: 'POST', 
      headers: {
      'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }
      fetch('http://localhost:3000/therapist', therapistObj)
      .then( resp => resp.json())
      .then( data => console.log("======fetch",data))
  }




  render(){
    
    return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
          {/* <Login /> */}
            <Switch>
              <Route exact path="/" render={ (props) => <Login {...props} userInfo={this.userInfo}/> }/>

              <Route exact path="/signup" render={(props) => <Signup therapistFetch={this.therapistFetch} userInfo={this.userInfo}/>}
              />

              <Route exact path="/home" 
              render={(props) => <Home {...props} userData={this.state.user
              }
              />
            
            
            
            
            }

              



              

              
              
              />
            </Switch>
          </header>
        </div>
      </BrowserRouter>
      )
  }
}


export default App;
