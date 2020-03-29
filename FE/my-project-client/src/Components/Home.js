import React from 'react';
import TherapistCard from './TherapistCard'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
                therapists: [],
                TherapistInfo: {},
                addServiceForm: false,
                Service: {}
        }
    }

    componentDidMount(){
        fetch('http://localhost:3000/therapist')
        .then(resp => resp.json())
        .then(therapists => {this.setState({
            therapists: therapists
        })})

    }

    renderTherapist = (event) => {
        
        fetch(`http://localhost:3000/therapist/${event.target.dataset.therapistid}`)
        .then(resp => resp.json())
        .then( data => this.setState({
            ...this.state, TherapistInfo: data
        }))

    }

    renderTherapistList = () => {
    
       return this.state.therapists.map(therapist => {
           return therapist.services.map(service => {
               return <option onClick = {(event) => this.renderTherapist(event)}
               data-therapistid={therapist.id}>{service.name.toUpperCase()}</option>
           })
       })
    }

    getUserInfo = () => {this.setState({
        userInfo: this.props
    })}

        addService = () => {
        this.setState(prevState => ({
            addServiceForm: !prevState.addServiceForm
        }))
    }

    logout = () => {
        // console.log(this.props)
        localStorage.removeItem('token')
        this.props.history.push('/')
    }

    // finish this later
    // fetchPatchTherapist = () => {
        // const token = localStorage.getItem('token')
    //     const patchObj = {
    //         method: "PATCH", 
    //         headers: {
    //             'Content-Type' : 'application/json',
    // 'Authorization': `Bearer ${token}`
    //         },
    //         // body: JSON.stringify()
    //     }
    //     fetch(`http://localhost:3000/therapist/`)
    //     .then()
    //     .then()
    // }

    // Make a new Service
    // addService = (event) => {
    //     event.preventDefault()
    //     // const token = localStorage.getItem('token')

    //     // const postObj = {
    //     //     method: 'POST',
    //     //     headers: {
    //     //        'Content-Type': 'application',
    //     //        'Authorization': `Bearer ${token}`
    //     //     },
    //     //     body: JSON.stringify({
    //     //         name: this.state.Service.name,
    //     //         description: this.state.Service.description
    //     //     })
    //     // }
    //     //     fetch('localhost/service', postObj)
    //     //     .then(resp => resp.json())
    //     //     .then(data => console.log(data))
    // }

    // setPassword = (event) => {
    //     // set the key as the name of the input field
    //     const value = event.target.value
    //     this.setState({
    //         password:value
    //     })
        
    // }

    setName = (event) => {
        this.setState({
            ...this.state, ...this.state.Service, name: event.target.value 
            
        })
    }


    setDescription = (event) => {
        this.setState({
            ...this.state, ...this.state.Service, description: event.target.value 
            
        })
    }





    addServiceForm = () => {
        if(this.state.addServiceForm){
            return(
                <form onSubmit={this.addService} action="" method="post">

                <label htmlFor="name">name</label>
                <div> 
                    <input onChange={(event) => this.setName(event)} type="text" name="name" id=""></input>
                </div>

                <label htmlFor="descrtiption">Descrpiton</label>
                <div> 
                    <input onChange={(event) => this.setDescription(event)} type="text" name="description" id=""></input>
                </div>

                <div>
                <input type="submit" value="Submit"/>
                </div>
                <br/>
                </form>
            )    
        }
    }


    // button to update state to show edit profile form
    // fetch patch request to update the user profile
    
   
    render(){ 
        // console.log(this.state.TherapistInfo.id)
        console.log(this.state)
        return(
            <div>
                <div>
                    {/* <h2></h2> */}
                </div>
                <h1>Welcome</h1>
                    <button onClick={this.addService}>Add Service</button>
                <label for='services'> <h3>Please choose a Massage Service</h3></label>
                    <select id='services'> 
                        {this.renderTherapistList()}
                        </select>
                    <TherapistCard therapistInfo = {this.state.TherapistInfo}/>

                {this.addServiceForm()}

                <button onClick={this.logout}>Logout</button>

            </div>
        )
    }
}

export default Home