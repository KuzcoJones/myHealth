import React from 'react';
import TherapistCard from './TherapistCard'

class Home extends React.Component{
    constructor(){
        super()
        this.state = {
                therapists: [],
                TherapistInfo: {}
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

    render(){
        console.log(this.props)
        return(
            <div>
                <h1>Welcome</h1>
                <label for='services'> <h3>Please choose a Massage Service</h3></label>
                    <select id='services'> 
                        {this.renderTherapistList()}
                        </select>
                    <TherapistCard therapistInfo = {this.state.TherapistInfo}/>
            </div>
        )
    }
}

export default Home