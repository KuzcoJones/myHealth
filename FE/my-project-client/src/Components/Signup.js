import React, { Component } from 'react'
import {
	withRouter
} from 'react-router-dom';




class Signup extends React.Component{
    
    constructor(){
        super()
        this.state = {
            isTherapist: false,
            location: '',
            bio: '',
            username: '',
            password: '',
            name: ''
        }
    }


   
    renderTherapistSignUp = () => {
        // console.log(this.props)
        return(
        <div>
            <br/>
            <label htmlFor="name">Full Name</label>
            <div>   
             <input onChange={(event) => {this.setName(event)}} type="text" name="name" placeholder="Name" ></input>
            </div>

            <label htmlFor="">Bio</label>
            <div>
                <textarea onChange={(event) => {this.setBio(event)}} placeholder="200 char max"></textarea>
            </div>

            <label htmlFor="location">Location</label>
            <div>
            <input onChange={(event) => {this.setLocation(event)}} type="text" name="location" placeholder="City, State"></input>
            </div>

        </div>)
    }

    toggleTherapist = (event) => {
        this.setState(prevState => ({
            isTherapist: !prevState.isTherapist
        }));
    }

    


    handleForm = (event) => {
        event.preventDefault()

       
        const loginObj = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(this.state)
        }
    
        fetch('http://localhost:3000/signup', loginObj)
        .then(resp => resp.json())
        .then(data => {
            // recieve data back from login user 
            // set token to local storage
            // redirect to the user profile with that data 

            if(data.error){
                alert(data.error)}
            else { 
                if (this.state.isTherapist){this.props.therapistFetch(this.state)} 
                    localStorage.setItem('token', data.token)
                    this.props.userInfo(data)
                    this.props.history.push('/home')
                   
            }

            
            }
        ) 
    
}

    setLocation = (event) => {
        const value = event.target.value
        this.setState({
            location:value
        })
        
    }

    setBio = (event) => {
        // set the key as the name of the input field
        const value = event.target.value
        this.setState({
            bio:value
        })
        
    }

    setName = (event) => {
        // set the key as the name of the input field
        const value = event.target.value
        this.setState({
            name:value
        })
       
    }

    setUsername = (event) => {
        // set the key as the name of the input field
        const value = event.target.value
        this.setState({
            username:value
        })
       
    }

    setPassword = (event) => {
        // set the key as the name of the input field
        const value = event.target.value
        this.setState({
            password:value
        })
        
    }


    render(){
            
        return(
            
            <div>
                <h1>Welcome, please Signup</h1>
                <form onSubmit={(event) => {this.handleForm(event)}} action="" method="post">
                    <label htmlFor="username">Username</label>
                    <div>
                        <input onChange={(event) => {this.setUsername(event)}}type="text" name="username" id="" placeholder="Username" />
                    </div>

                    <label htmlFor="password">Password</label>
                    <div>
                        <input onChange={(event) => {this.setPassword(event)}}type="password" name="password" id="" placeholder="password"/>
                    </div>

                   <div>Therapist?
                       <input type="checkbox" name="instructor" id="" onChange={(event) => {this.toggleTherapist(event)}}/>

                   { this.state.isTherapist ? this.renderTherapistSignUp() : null } 
                        

                   </div>
                
                
                    <input type="submit" value="Signup"/>
               
                
                </form>
            </div>
        )
    }
}

export default withRouter(Signup)