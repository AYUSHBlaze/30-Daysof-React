import React, {Component} from 'react'

class UserGreeting extends Component{

    constructor(props){
        super(props)
        this.state = {
            isLoggedIn: false
        }
    }

    render(){
        return(
            this.state.isLoggedIn ?
            <div>Ayush</div>:
            <div>Guest</div>
        )
        

        // if(this.state.isLoggedIn){
        //     return(
        //         <div>Welcome Sonal!</div>
        //     )
        // }else{
        //     return(
        //         <div>Welcome Guest.</div>
        //     )
        // }
        // return(
        //     <div>
        //         <div>Welcome Vishwas</div>
        //         <div>Welcome Guest!</div>
        //     </div>
        // )
    }
}

export default UserGreeting
