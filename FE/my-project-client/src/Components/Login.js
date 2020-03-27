import React, { Component } from 'react';

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: ''
        }
    }


    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const reqObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }

        fetch('http://localhost:3000/login', reqObj)
        .then(resp => resp.json())
        .then(data => {
            // recieve data back from login user 
            // set token to local storage
            // redirect to the user profile with that data 

            if(data.error){
                alert(data.error)}
                else{
                    localStorage.setItem('token', data.token)
                    this.props.userInfo(data)
                    this.props.history.push('/home')
                }
            }
        ) 

    }




    render(){
        return(
            <div> 
                
                <h1>Welcome to myHealth</h1>
                <form onSubmit= {(event) => {this.handleSubmit(event)}}>
                    <label htmlFor="username">Username</label>
                    <div>
                        <input type="text" placeholder="Username" name='username' onChange={ (event) => {this.handleInputChange(event)}}></input>
                        
                    </div>

                    <label htmlFor="password">Password</label>
                    <div>
                        <input type="password" name="password" placeholder="Password" onChange={ (event) => {this.handleInputChange(event)}}></input>
                    </div>


                    <input type="submit" value="Login"></input>
                </form>
            </div>
        )
    }
}


export default Login