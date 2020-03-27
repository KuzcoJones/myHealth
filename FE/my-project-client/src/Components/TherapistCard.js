import React from 'react'

class TherapistCard extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div>
                <h1>{this.props.therapistInfo.name}</h1>
                <p>{this.props.therapistInfo.bio}</p>
                <h4>{this.props.therapistInfo.location}</h4>
                
            </div>        
        )
    }
}


export default TherapistCard