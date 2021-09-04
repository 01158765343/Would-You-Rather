import React,{Component} from "react"
import {NavLink, withRouter} from  "react-router-dom"
class Dashporder extends Component {

    userQ=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/unanswers`)
    }

    userAnser=(e)=>{
        e.preventDefault()
        this.props.history.push(`/dashporder/questionAnsers`)
    }

    render (){
        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <NavLink to="eldeeb" className="navbar-brand">
                        <button onClick={this.userQ}>unanswer question</button></NavLink>
                
                    <NavLink to="add-question" className="navbar-brand">
                        <button onClick={this.userAnser}>qustion answer</button></NavLink>
                </div>
            </nav>

            </div>
        )
        
    }
}


export default withRouter(Dashporder)